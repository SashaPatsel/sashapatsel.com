import React, { Component, useState } from "react";
import { Autocomplete, Button, Card, CardStripe, Dropdown, EditField, FileUpload, Icon, InlineDropdown, Input, Label, List, ListItem, Loading, ModalClose, Menu, Navbar, RadioButton, Select, SideNav, Table, TableHead, TableRow, TH, TD } from "../components"
import TextArea from "../components/TextArea";

import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { CodeBlock, dracula } from "react-code-blocks";


const StyleGuide = props => {
  const initState = {
    modalOpen: false,
    navShowing: false,
    sidenavOpen: true,
    editFieldName: "Default value"
  }

  const [state, setState] = useState(initState)

  function toggleNav() { setState({ ...state, navShowing: !state.navShowing }) }

  function updateEditField(e) {
    setState({ ...state, editFieldName: e.updatedValue })
  }

  const species = ["bear", "fish"]

  return (
    <div>
      <div className="styleguide__nav u-background-blue">

        <h3 className="heading__3 heading__3--ko u-mgn-btm-sm">Directory</h3>
        <Button buttonType="text" ko={true} href="#autocomplete"> Autocomplete </Button>
        <Button buttonType="text" ko={true} href="#button"> Button </Button>
        <Button buttonType="text" ko={true} href="#card"> Card </Button>
        <Button buttonType="text" ko={true} href="#dropdown"> Dropdown </Button>
        <Button buttonType="text" ko={true} href="#editfield"> Edit Field </Button>
        <Button buttonType="text" ko={true} href="#fileupload"> File Upload </Button>
        <Button buttonType="text" ko={true} href="#icons"> Icons </Button>
        <Button buttonType="text" ko={true} href="#input"> Input </Button>
        <Button buttonType="text" ko={true} href="#inlinedropdown"> Inline Dropdown </Button>
        <Button buttonType="text" ko={true} href="#list"> List </Button>
        <Button buttonType="text" ko={true} href="#loading"> Loading </Button>
        <Button buttonType="text" ko={true} href="#menu"> Menu </Button>
        <Button buttonType="text" ko={true} href="#modal"> Modal </Button>
        <Button buttonType="text" ko={true} href="#navbar"> Navbar </Button>
        <Button buttonType="text" ko={true} href="#radio"> Radio Buttons </Button>
        <Button buttonType="text" ko={true} href="#select"> Select </Button>
        <Button buttonType="text" ko={true} href="#sidenav"> SideNav </Button>
        <Button buttonType="text" ko={true} href="#table"> Table </Button>
        <Button buttonType="text" ko={true} href="#textarea"> TextArea </Button>
        <Button buttonType="text" ko={true} href="#typography"> Typography </Button>
        <Button buttonType="text" ko={true} href="#utility"> Utility Classes </Button>
      </div>

      <div className="styleguide">
        <h1 className="heading__1 u-pad-sm u-mgn-btm-sm">Conservationist.io Style Guide</h1>

        {/* AUTOCOMPLETE */}
        <div id="autocomplete" className="u-pad-sm">
          <h2 className="heading__2 u-mgn-btm-sm">Autocomplete</h2>
          <div className="u-mgn-btm-sm">
            <Label text="Type a species name below to test the component!" />
          </div>
          <Autocomplete data={species} placeholder="Placeholder Text" htmlID="uniqueID" />

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>
            <TableRow>
              <TD>data</TD>
              <TD>array</TD>
              <TD>["value1", "value2", etc...]</TD>
              <TD>The data to be searched through user input</TD>
            </TableRow>

            <TableRow>
              <TD>placeholder</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>Text to be rendered in input until it is being used</TD>
            </TableRow>

            <TableRow>
              <TD>onChange</TD>
              <TD>function</TD>
              <TD>any string</TD>
              <TD>Event function triggered when text is typed into the input. Event object will be the autocomplete element including the current input value</TD>
            </TableRow>
          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Autocomplete } from "/components";

            const species = ["Acanthorutilus handlirschi", "Accipiter fasciatus natalis", "Accipiter francesii pusillus"] 
            
            function autoCompleteEvent(e) {
              // Will print the autocomplete element including the current input value
              console.log("event", e)
            }
            
            <Autocomplete data={species} onChange={autoCompleteEvent} placeholder="Placeholder Text" htmlID="uniqueID" />
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>



        {/* BUTTONS */}
        <div id="button" className="u-pad-sm">
          <h2 className="heading__2">Button</h2>

          <div className="u-pad-sm u-flex u-flex-justify-between">
            <div className="u-mgn-vert-sm">
              <Button buttonType="primary" ko={false}> Primary Button </Button>
            </div>
            <div className="u-mgn-vert-sm">
              <Button buttonType="secondary" ko={false}> Secondary Button </Button>
            </div>
            <div className="u-mgn-vert-sm">
              <Button buttonType="text" ko={false}> Text Button </Button>
            </div>
          </div>

          <div className="u-background-blue u-pad-sm u-flex u-flex-justify-between">
            <div className="u-mgn-vert-sm">
              <Button buttonType="primary" ko={true}> Primary Button KO </Button>
            </div>
            <div className="u-mgn-vert-sm">
              <Button buttonType="secondary" ko={true}> Secondary Button KO </Button>
            </div>
            <div className="u-mgn-vert-sm">
              <Button buttonType="text" ko={true}> Text Button KO </Button>
            </div>
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>
            <TableRow>
              <TD>buttonType</TD>
              <TD>string</TD>
              <TD>"primary", "secondary", or "text"</TD>
              <TD>Choose between three types of buttons</TD>
            </TableRow>

            <TableRow>
              <TD>href</TD>
              <TD>string</TD>
              <TD>a valid URL</TD>
              <TD>Will redirect to the provided URL</TD>
            </TableRow>

            <TableRow>
              <TD>ko</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD> Set to true when the element is rendered over a dark background </TD>
            </TableRow>

            <TableRow>
              <TD>small</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD> Set to true to reduce the overall size of the component. </TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD> Button is not a self-closing component. Wrap any desired content within the open and close tags </TD>
            </TableRow>

            <TableRow>
              <TD>...props</TD>
              <TD>JSX button attributes</TD>
              <TD>Any valid attribute that is applicable to a default JSX "button" element</TD>
              <TD>Provide elements as would normally be applied to a button element. For example: type="submit" </TD>
            </TableRow>
          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Button } from "/components";
            
            function doStuff() {
              // This function will be invoked when the button is clicked
            }
            
            <Button buttonType="primary" ko={true} href="/some/link" onClick={doStuff}> Button Text <Button/> 
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>
        {/* CARD */}
        <div id="card" className="u-pad-sm">
          <h2 className="heading__2">Card</h2>
          <h4 className="heading__4">INCOMPLETE</h4>
          <div className="u-pad-sm u-flex u-flex-justify-around">

            <Card>
              <CardStripe position="top">

              </CardStripe>

            </Card>

            <Card>
              <CardStripe position="bottom">

              </CardStripe>

            </Card>

            <Card>

            </Card>

          </div>
        </div>

        {/* DROPDOWN */}
        <div id="dropdown" className="u-pad-sm">
          <h2 className="heading__2">Dropdown</h2>



          <div className="u-pad-sm">
            <Dropdown title="Dropdown">
              <Menu
                options={[
                  {
                    name: "Option 1",
                    action: () => { console.log("option1") }
                  },
                  {
                    name: "Option 2",
                    action: () => { console.log("option2") }
                  },
                  {
                    name: "Option 3",
                    action: () => { console.log("option3") }
                  },
                  {
                    name: "Option 4",
                    action: () => { console.log("option4") }
                  }
                ]}
              />
            </Dropdown>
          </div>

          <div className="u-pad-sm">
            <List>
              <Dropdown title="Dropdown">
                <Menu
                  options={[
                    {
                      name: "Option 1",
                      action: () => { console.log("option1") }
                    }
                  ]}
                />
              </Dropdown>

              <Dropdown title="Dropdown">
                <Menu
                  options={[
                    {
                      name: "Option 1",
                      action: () => { console.log("option1") }
                    }
                  ]}
                />
              </Dropdown>

              <Dropdown title="Dropdown">
                <Menu
                  options={[
                    {
                      name: "Option 1",
                      action: () => { console.log("option1") }
                    }
                  ]}
                />
              </Dropdown>

              <Dropdown title="Dropdown">
                <Menu
                  options={[
                    {
                      name: "Option 1",
                      action: () => { console.log("option1") }
                    }
                  ]}
                />
              </Dropdown>
            </List>
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>title</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>Text to be displayed on the dropdown button (the button that, when clicked, opens the dropdown.</TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD> Dropdown is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the dropdown is open. </TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Dropdown } from "/components";
             
            <Dropdown title="Dropdown">
                <div>
                  Some content
                </div>
            </Dropdown>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />


        </div>


        {/* EDIT FIELD */}
        <div id="editfield" className="u-mgn-vert-md u-pad-sm">
          <h2 className="heading__2">Edit Field</h2>

          <div className="u-pad-sm">
            <EditField inputValue={state.editFieldName} ko={false} updateValueCB={updateEditField} name="editFieldName">
              <p className="paragraph__1">
                {state.editFieldName}
              </p>
            </EditField>
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>inputValue</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>Will populate the input field when in editing mode</TD>
            </TableRow>

            <TableRow>
              <TD>name</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>To be used as an ID. If using multiple edit fields, it is key that they have different names so that values can be properly updated.</TD>
            </TableRow>

            <TableRow>
              <TD>updateValueCB</TD>
              <TD>function</TD>
              <TD>Function will be invoked like an event</TD>
              <TD>The provided function should take a single argument when defined. The argument will be an object containing the original value, the changed value and the input name. This function is invoked when the user clicks "Done".</TD>
            </TableRow>

            <TableRow>
              <TD>ko</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Set to true when the component is used over a dark background.</TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD> Dropdown is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the dropdown is open. </TD>
            </TableRow>

          </Table>

          {/* Exaple */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { EditField } from "/components";
            state = {
              editFieldName: "Some name"
            }
            function updateValueCB(e) {
              const { inputValue, updatedValue, elementName }
              setState({...state, editFieldName: updatedValue})
            }
             
            <EditField inputValue={state.editFieldName} ko={false} updateValueCB={updateEditField} name="editFieldName">
              <p>
                {state.editFieldName}
              </p>
            </EditField>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* FILE UPLOAD */}
        <div id="fileupload" className="u-pad-sm">
          <h2 className="heading__2">File Upload</h2>


          <div className="u-pad-sm">
            <FileUpload uploadCB={() => console.log("this happens when you upload a file")} instructions="This is where you leave instructions about the file(s) you want users to upload" />
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>instructions</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>Text to be rendered at the top of the file upload field. Use this text to give the user instructions about how/what they should upload.</TD>
            </TableRow>

            <TableRow>
              <TD>uploadCB</TD>
              <TD>function</TD>
              <TD>Event function</TD>
              <TD>Event like function with one argument. The argument will be an event object containing the uploaded FormData.</TD>
            </TableRow>

            <TableRow>
              <TD>toggleModal</TD>
              <TD>function</TD>
              <TD>Modal toggle function</TD>
              <TD>Optional. If passed it will be assumed this component is rendered on a modal. If provided, the component will render a "close" button which allows the user to exit the modal. The function should close/toggle whichever Modal the FileUpload component is in.</TD>
            </TableRow>

          </Table>

          {/* Exaple */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { FileUpload } from "/components";

            function handleFileUpload(formData) {
              // Send the formdata to your server, handle error, etc...
            }

            <FileUpload uploadCB={handleFileUpload} instructions="This is where you leave instructions about the file(s) you want users to upload" />
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* Icons */}
        <div id="icons" className="u-pad-sm">
          <h2 className="heading__2">Icon</h2>

          <div className="u-pad-sm u-background-blue u-flex u-flex-wrap">
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="account" />
              <p className="paragraph__2 paragraph__2--ko">account</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="add" />
              <p className="paragraph__2 paragraph__2--ko">add</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="adduser" />
              <p className="paragraph__2 paragraph__2--ko">adduser</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="apps" />
              <p className="paragraph__2 paragraph__2--ko">apps</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="attach" />
              <p className="paragraph__2 paragraph__2--ko">attach</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="bell" />
              <p className="paragraph__2 paragraph__2--ko">bell</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="calendar" />
              <p className="paragraph__2 paragraph__2--ko">calendar</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="camera" />
              <p className="paragraph__2 paragraph__2--ko">camera</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="caret-down" />
              <p className="paragraph__2 paragraph__2--ko">caret-down</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="caret-up" />
              <p className="paragraph__2 paragraph__2--ko">caret-up</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="chat" />
              <p className="paragraph__2 paragraph__2--ko">chat</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="close" />
              <p className="paragraph__2 paragraph__2--ko">close</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="check" />
              <p className="paragraph__2 paragraph__2--ko">check</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="comment" />
              <p className="paragraph__2 paragraph__2--ko">comment</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="crosshairs" />
              <p className="paragraph__2 paragraph__2--ko">crosshairs</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="document" />
              <p className="paragraph__2 paragraph__2--ko">document</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="download" />
              <p className="paragraph__2 paragraph__2--ko">download</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="duplicate" />
              <p className="paragraph__2 paragraph__2--ko">duplicate</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="edit" />
              <p className="paragraph__2 paragraph__2--ko">edit</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="error" />
              <p className="paragraph__2 paragraph__2--ko">error</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="externallink" />
              <p className="paragraph__2 paragraph__2--ko">externallink</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="github" />
              <p className="paragraph__2 paragraph__2--ko">github</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="help" />
              <p className="paragraph__2 paragraph__2--ko">help</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="image" />
              <p className="paragraph__2 paragraph__2--ko">image</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="invisible" />
              <p className="paragraph__2 paragraph__2--ko">invisible</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="line" />
              <p className="paragraph__2 paragraph__2--ko">line</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="link" />
              <p className="paragraph__2 paragraph__2--ko">link</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="marker" />
              <p className="paragraph__2 paragraph__2--ko">marker</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="menu" />
              <p className="paragraph__2 paragraph__2--ko">menu</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="minus" />
              <p className="paragraph__2 paragraph__2--ko">minus</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="move" />
              <p className="paragraph__2 paragraph__2--ko">move</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="network" />
              <p className="paragraph__2 paragraph__2--ko">network</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="new" />
              <p className="paragraph__2 paragraph__2--ko">new</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="personalinfo" />
              <p className="paragraph__2 paragraph__2--ko">personalinfo</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="plus" />
              <p className="paragraph__2 paragraph__2--ko">plus</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="polygon" />
              <p className="paragraph__2 paragraph__2--ko">polygon</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="print" />
              <p className="paragraph__2 paragraph__2--ko">print</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="profile" />
              <p className="paragraph__2 paragraph__2--ko">profile</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="public" />
              <p className="paragraph__2 paragraph__2--ko">public</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="rectangle" />
              <p className="paragraph__2 paragraph__2--ko">rectangle</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="redo" />
              <p className="paragraph__2 paragraph__2--ko">redo</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="remove" />
              <p className="paragraph__2 paragraph__2--ko">remove</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="reply" />
              <p className="paragraph__2 paragraph__2--ko">reply</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="save" />
              <p className="paragraph__2 paragraph__2--ko">save</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="search" />
              <p className="paragraph__2 paragraph__2--ko">search</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="send" />
              <p className="paragraph__2 paragraph__2--ko">send</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="share" />
              <p className="paragraph__2 paragraph__2--ko">share</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="star" />
              <p className="paragraph__2 paragraph__2--ko">star</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="success" />
              <p className="paragraph__2 paragraph__2--ko">success</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="trash" />
              <p className="paragraph__2 paragraph__2--ko">trash</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="undo" />
              <p className="paragraph__2 paragraph__2--ko">undo</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="upload" />
              <p className="paragraph__2 paragraph__2--ko">upload</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="video" />
              <p className="paragraph__2 paragraph__2--ko">video</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="visible" />
              <p className="paragraph__2 paragraph__2--ko">visible</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="warning" />
              <p className="paragraph__2 paragraph__2--ko">warning</p>
            </div>
            <div className="u-pad-sm u-flex u-flex-column u-flex-align-center">
              <Icon ko={true} icon="works" />
              <p className="paragraph__2 paragraph__2--ko">works</p>
            </div>
          </div>


          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>icon</TD>
              <TD>string</TD>
              <TD>any of the reserved strings listed below the desired icon above</TD>
              <TD>Pass in any of the values displayed below the desired icon above</TD>
            </TableRow>

            <TableRow>
              <TD>size</TD>
              <TD>string</TD>
              <TD>sm, md, lg</TD>
              <TD>Determines the size of the icon. If left blank, the icon will default to medium (md).</TD>
            </TableRow>

            <TableRow>
              <TD>ko</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Set to true when the component is used over a dark background.</TD>
            </TableRow>

            <TableRow>
              <TD>...props</TD>
              <TD>JSX div attributes</TD>
              <TD>Any valid attribute that is applicable to a default JSX "div" element</TD>
              <TD>Provide JSX attributes that could be applied to a div element. For example: `data-thing`="value" or onClick={`{someFunction}`}</TD>
            </TableRow>


          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Icon } from "/components";
             
            <Icon ko={true} icon="works" size="sm" />

            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />

        </div>

        {/* INPUT */}
        <div id="input" className="u-pad-sm">
          <h2 className="heading__2">Input</h2>
          <div className="u-mgn-btm-sm">
            <Label text="label" />
            <Input placeholder="placeholder" />
          </div>
          <div className="u-background-blue u-pad-sm">
            <Label text="label" ko={true} />
            <Input placeholder="placeholder" ko={true} />
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>ko</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD> Set to true when the element is rendered over a dark background </TD>
            </TableRow>

            <TableRow>
              <TD>...props</TD>
              <TD>JSX button attributes</TD>
              <TD>Any valid attribute that is applicable to a default JSX "input" element</TD>
              <TD>Provide elements as would normally be applied to a button element. For example: type="password" </TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Input } from "/components";

            function handleChange(e) {
              setState({...state, [e.target.name]: e.target.value})
            }

            <Input onChange={handleChange} placeholder="placeholder text" type="email"/>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>


        {/* Inline Dropdown */}
        <div id="inlinedropdown" className="u-pad-sm">
          <h2 className="heading__2">Inline Dropdown</h2>

          <div className="u-pad-sm">
            <InlineDropdown
              title={
                <p className="paragraph__1 paragraph__1--ko u-flex">
                  <span className="u-mgn-right-sm">
                    Products
                </span>
                  <Icon icon="caret-down" size="sm" ko={true} />
                </p>

              }
            >
              <Menu
                options={[
                  {
                    name: "Option 1",
                    action: () => { console.log("option1") }
                  },
                  {
                    name: "Option 2",
                    action: () => { console.log("option2") }
                  },
                  {
                    name: "Option 3",
                    action: () => { console.log("option3") }
                  },
                  {
                    name: "Option 4",
                    action: () => { console.log("option4") }
                  }
                ]}
              />
            </InlineDropdown>
          </div>

          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>title</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>The content passed here will be rendered inside the button that, when clicked, opens the dropdown. This content will always be displayed regardless of whether or not the dropdown is open/active.</TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>InlineDropdown is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the dropdown is open. </TD>
            </TableRow>


          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { InlineDropdown } from "/components";

            <InlineDropdown 
              title={
                <p className="paragraph__1 paragraph__1--ko u-flex">
                  <span className="u-mgn-right-sm">
                    Products
                  </span>
                  <Icon icon="caret-down" size="sm" ko={true} />
                </p>
              }
            >
              <div>
                some content
              </div>
            </InlineDropdown>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>




        {/* LIST */}
        <div id="list">
          <div className="u-pad-sm">
            <h2 className="heading__2">List</h2>

          </div>

          <div className="u-around-flex u-flex-wrap">


            <div className="u-pad-sm">
              <List>
                <div className="u-mgn-btm-sm">
                  <ListItem>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus unde eum quis magni quam qui impedit, voluptate aspernatur voluptas hic porro excepturi deserunt asperiores dolor eveniet fuga obcaecati ipsam tempore!
                  </p>
                  </ListItem>
                </div>
                <div className="u-mgn-btm-sm">
                  <ListItem>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus unde eum quis magni quam qui impedit, voluptate aspernatur voluptas hic porro excepturi deserunt asperiores dolor eveniet fuga obcaecati ipsam tempore!
                  </p>
                  </ListItem>
                </div>
                <div className="u-mgn-btm-sm">

                  <ListItem>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus unde eum quis magni quam qui impedit, voluptate aspernatur voluptas hic porro excepturi deserunt asperiores dolor eveniet fuga obcaecati ipsam tempore!
                  </p>
                  </ListItem>
                </div>
              </List>
            </div>

            <div className="u-pad-sm">
              <List table={true}>
                <ListItem ko={true} thumbnail="/img/species/canadaLynx1.jpg">
                  <p className="paragraph__1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                </ListItem>
                <ListItem ko={true} thumbnail="/img/species/canadaLynx1.jpg">
                  <p className="paragraph__1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                </ListItem>
                <ListItem ko={true} thumbnail="/img/species/canadaLynx1.jpg">
                  <p className="paragraph__1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                </ListItem>
              </List>
            </div>

            <div className="u-pad-sm">
              <List>
                <div className="u-mgn-btm-sm">

                  <ListItem thumbnail="/img/species/canadaLynx1.jpg" thumbnailRounded={true}>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                  </ListItem>
                </div>
                <div className="u-mgn-btm-sm">

                  <ListItem thumbnail="/img/species/canadaLynx1.jpg" thumbnailRounded={true}>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                  </ListItem>
                </div>
                <div className="u-mgn-btm-sm">

                  <ListItem thumbnail="/img/species/canadaLynx1.jpg" thumbnailRounded={true}>
                    <p className="paragraph__1 paragraph__1--ko">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem perferendis culpa odio aliquam, dolorum voluptates adipisci voluptatibus unde neque explicabo porro repellendus dignissimos laudantium rem incidunt commodi, maxime dolore?
                </p>
                  </ListItem>
                </div>
              </List>
            </div>
          </div>
          {/* Props */}

          <h3 className="heading__3 u-mgn-vert-sm">List Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>List is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the dropdown is open. </TD>
            </TableRow>

          </Table>
          <h3 className="heading__3 u-mgn-vert-sm">ListItem Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>thumbnail</TD>
              <TD>string</TD>
              <TD>a valid path to an image</TD>
              <TD>Adds a thumbnail to the lefthand side of the ListItem component.</TD>
            </TableRow>


            <TableRow>
              <TD>thumbnailRounded</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Set to true if you want a ListItem's left-hand side thumbnail to be a circle</TD>
            </TableRow>

            <TableRow>
              <TD>ko</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Set to true when the component is used over a dark background.</TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD> ListItem is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the dropdown is open. </TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { List, ListItem } from "/components";
             
            <List>
            <div className="u-mgn-btm-sm">

              <ListItem thumbnail="/img/species/canadaLynx1.jpg" thumbnailRounded={true}>
                <p className="paragraph__1 paragraph__1--ko">
                   Some text
                </p>
              </ListItem>
            </div>
            <div className="u-mgn-btm-sm">

              <ListItem thumbnail="/img/species/canadaLynx1.jpg" thumbnailRounded={false}>
                <p className="paragraph__1 paragraph__1--ko">
                   Some text
                </p>
              </ListItem>
            </div>
            <div className="u-mgn-btm-sm">

              <ListItem >
                <p className="paragraph__1 paragraph__1--ko">
                   Some text
                </p>
              </ListItem>
            </div>
          </List>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* LOADING */}
        <div id="loading" className=" u-pad-sm">
          <h2 className="heading__2">Loading</h2>

          <Loading />

          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>size</TD>
              <TD>string</TD>
              <TD>lg, md, sm</TD>
              <TD>Pass one of three strings to determine the size of this component when rendered. If no value or an invalid value is passed, it will default to medium (md) size.</TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Loading } from "/components";

            state = {
              isLoading: false
            }

            {state.isLoading ?
              <Loading />
              : null
            }
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>


        {/* MENU */}
        <div id="menu" className=" u-pad-sm">
          <h2 className="heading__2">Menu</h2>



          <div className="u-pad-sm">
            <Menu
              options={[
                {
                  name: "Option 1",
                  link: "#menu"
                },
                {
                  name: "Option 2 -- I console.log when clicked!",
                  onClick: () => console.log("Option onClick example")
                },
                {
                  name: "Option 3",
                  link: "#menu"
                },
                {
                  name: "Option 4",
                  link: "#menu"
                }
              ]}
            />
          </div>


          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>options</TD>
              <TD>array of objects</TD>
              <TD>
                {`[
                {
                  name: "Option 1",
                  link: "/link/to/place"
                },

                {
                  name: "option 2",
                  onClick: someFunction
                }
                ]`}
              </TD>
              <TD>Each object in the array must include a name field. This will be the text displayed for that option. `link` and `onClick` are both optional. Link will go to the provided web address when clicked. onClick will trigger the provided function when the menu option is clicked.</TD>
            </TableRow>

            <TableRow>
              <TD>dark</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>If true, the menu will have a dark background.</TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { Menu } from "/components";

            <Menu
              options={[
                {
                  name: "Option 1",
                  link: "/link/to/place"
                },
                {
                  name: "option2",
                  onClick: someFunction
                },
                {
                  name: "Option 3",
                  link: "/link/to/place"
                }
              ]}
            />
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* MODAL */}
        <div id="modal" className=" u-pad-sm">
          <h2 className="heading__2">Modal</h2>


          <div className="u-pad-sm">
            <Button buttonType="primary" onClick={() => setState({ ...state, modalOpen: !state.modalOpen })} >Open Modal</Button>

            <Modal isOpen={state.modalOpen} toggle={() => setState({ ...state, modalOpen: !state.modalOpen })}>
              <ModalHeader>
                <ModalClose cb={() => setState({ ...state, modalOpen: !state.modalOpen })} />
                Modal Header
            </ModalHeader>
              <ModalBody>
                <div className="u-pad-sm">
                  <p className="paragraph__1">Modal Content</p>
                </div>
              </ModalBody>
            </Modal>

          </div>
          {/* Props */}
          <h3 className="heading__3 u-mgn-vert-sm">Modal Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>isOpen</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Determines whether or not the modal is active/open.</TD>
            </TableRow>

            <TableRow>
              <TD>toggle</TD>
              <TD>function</TD>
              <TD>modal toggling function</TD>
              <TD>The function passed as a prop here should set the modal's open state to its opposite. In other words, it should toggle the modal's open state.</TD>
            </TableRow>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>Modal is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the modal is open/active. </TD>
            </TableRow>

          </Table>

          <h3 className="heading__3 u-mgn-vert-sm">ModalHeader Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>Modal Header is not a self-closing component. Wrap any desired content within the open and close tags. Generally a heading will go here. In most cases, it is best to just write the desired heading directly in between the ModalHeader tags.</TD>
            </TableRow>

          </Table>

          <h3 className="heading__3 u-mgn-vert-sm">ModalClose Props:</h3>
          <p className="paragraph__2 u-text-italic">Note: this is a self-closing tag that when placed in between ModalHeader tags will render at the top right of that component.</p>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>cb</TD>
              <TD>function</TD>
              <TD>modal toggling function</TD>
              <TD>Text to be displayed on the dropdown button (the button that, when clicked, opens the dropdown. The function passed as a prop here should set the modal's open state to its opposite. In other words, it should toggle the modal's open state.</TD>
            </TableRow>

          </Table>

          <h3 className="heading__3 u-mgn-vert-sm">ModalBody Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>


            <TableRow>
              <TD>children</TD>
              <TD>JSX</TD>
              <TD>Any valid JSX</TD>
              <TD>ModalBody is not a self-closing component. Wrap any desired content within the open and close tags. All children will only be displayed when the modal is open/active. </TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { ModalClose } from "/components";
            import {
              Modal,
              ModalHeader,
              ModalBody
            } from "reactstrap";
            
            const initState = {
              modalOpen: false
            }
            
            const [state, setState] = useState(initState)
            
            
            <Modal isOpen={state.modalOpen} toggle={() => setState({ ...state, modalOpen: !state.modalOpen })}>
            <ModalHeader>
                <ModalClose cb={() => setState({ ...state, modalOpen: !state.modalOpen })}/>
                Modal Header
            </ModalHeader>
              <ModalBody>
                <div className="u-pad-sm">
                  <p className="paragraph__1">Modal Content</p>
                </div>
              </ModalBody>
            </Modal>

            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />

        </div>


        {/* NAVBAR */}
        <div id="navbar" className=" u-pad-sm">
          <h2 className="heading__2">Navbar</h2>

        </div>


        <div className="u-pad-sm">
          {state.navShowing ?
            <Navbar

            />
            : null}
          <Button buttonType="primary" onClick={toggleNav} > Toggle Navbar Display </Button>

        </div>



        {/* RADIO */}
        <div id="radio" className=" u-pad-sm">
          <h2 className="heading__2">Radio Buttons</h2>


          <div className="u-pad-sm">
            <form action="" className="u-flex">
              <div className="u-mgn-right-md u-flex u-flex-column u-flex-align-center">
                <RadioButton name="radio1" onClick={() => console.log("onClick CB")} defaultChecked={true} />
                <p className="paragraph__2 u-mgn-top-sm">Option 1</p>
              </div>
              <div className="u-flex u-flex-column u-flex-align-center">

                <RadioButton name="radio2" onClick={() => console.log("onClick CB")} defaultChecked={false} />
                <p className="paragraph__2 u-mgn-top-sm">Option 2</p>
              </div>

            </form>
          </div>

          <h3 className="heading__3 u-mgn-vert-sm">Props:</h3>
          <Table>
            <TableHead>
              <TH>Name</TH>
              <TH>Data type</TH>
              <TH>Data format</TH>
              <TH>Description</TH>
            </TableHead>

            <TableRow>
              <TD>name</TD>
              <TD>string</TD>
              <TD>any string</TD>
              <TD>Give the radio button a name so it can be identified on click and to separate it from other radio buttons in the same form.</TD>
            </TableRow>

            <TableRow>
              <TD>onClick</TD>
              <TD>function</TD>
              <TD>callback function triggered by a click on the radio button</TD>
              <TD>The function passed here will be invoked when the radio button is clicked.</TD>
            </TableRow>

            <TableRow>
              <TD>defaultChecked</TD>
              <TD>boolean</TD>
              <TD>true, false</TD>
              <TD>Determines whether or not a radio button is selected by default.</TD>
            </TableRow>

          </Table>

          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <CodeBlock
            text={`
            import { RadioButton } from "/components";

            <form action="" className="u-flex">
              <div className="u-mgn-right-md u-flex u-flex-column u-flex-align-center">
                <RadioButton name="radio1" onClick={() => console.log("onClick CB")} defaultChecked={true} />
                <p className="paragraph__2 u-mgn-top-sm">Option 1</p>
              </div>
              <div className="u-flex u-flex-column u-flex-align-center">

                <RadioButton name="radio2" onClick={() => console.log("onClick CB")} defaultChecked={false} />
                <p className="paragraph__2 u-mgn-top-sm">Option 2</p>
              </div>

            </form>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />

        </div>

        {/* SELECT */}
        <div id="select" className=" u-pad-sm">
          <h2 className="heading__2">Select</h2>

        </div>


        <div className="u-pad-sm">
          <Select
            options={[
              {
                name: "Option 1",
                action: () => { console.log("option1") }
              },
              {
                name: "Option 2",
                action: () => { console.log("option2") }
              },
              {
                name: "Option 3",
                action: () => { console.log("option3") }
              },
              {
                name: "Option 4",
                action: () => { console.log("option4") }
              }
            ]}
          />
        </div>

        <div className=" u-background-blue u-pad-sm">
          <Select
            options={[
              {
                name: "Option 1",
                action: () => { console.log("option1") }
              },
              {
                name: "Option 2",
                action: () => { console.log("option2") }
              },
              {
                name: "Option 3",
                action: () => { console.log("option3") }
              },
              {
                name: "Option 4",
                action: () => { console.log("option4") }
              }
            ]}
            ko={true}
          />
        </div>

        {/* SIDENAV */}
        <div id="sidenav" className=" u-pad-sm">
          <h2 className="heading__2">Sidenav</h2>
        </div>

        <div className="u-pad-sm">
          <SideNav isOpen={state.sidenavOpen} arrow={true} altColors={true} title="Sidenav" fullHeight={false} onToggle={() => setState({ ...state, sidenavOpen: !state.sidenavOpen })}
          >
            <div className="u-pad-lg u-background-darkblue">
              <p className="paragraph__1 paragraph__1--ko">
                Content goes here...
              </p>
            </div>
          </SideNav>
        </div>

        {/* TABLE */}
        <div id="table" className=" u-pad-sm">
          <h2 className="heading__2">Table</h2>

        </div>

        <div className="u-pad-sm">

        </div>

        {/* TEXTAREA */}
        <div id="textarea" className=" u-pad-sm">
          <h2 className="heading__2">TextArea</h2>
          <div className="u-mgn-top-sm">
            <Label text="The component will grow with more text" />
            <TextArea placeholder="placeholder">
            </TextArea>
          </div>
          <div className="u-background-blue u-mgn-top-sm">
            <div className="u-pad-sm">
              <Label text="The component will grow with more text" ko={true} />
              <TextArea placeholder="placeholder" ko={true} >
              </TextArea>
            </div>
          </div>
        </div>


        {/* TYPOGRAPHY */}
        <div id="typography">

          <div className="u-pad-sm">
            <h2 className="heading__2">Typography</h2>

          </div>

          <div className="u-pad-sm">
            <h1 className="u-mgn-vert-sm heading__1">Heading 1</h1>
            <h2 className="u-mgn-vert-sm heading__2">Heading 2</h2>
            <h3 className="u-mgn-vert-sm heading__3">Heading 3</h3>
            <h4 className="u-mgn-vert-sm heading__4">Heading 4</h4>
            <h5 className="u-mgn-vert-sm heading__5">Heading 5</h5>
            <Label text="label" />
            <p className="u-mgn-vert-sm paragraph__1">paragraph text 1</p>
            <p className="u-mgn-vert-sm paragraph__2">paragraph text 2</p>
            <p className="u-mgn-vert-sm subtext">subtext</p>
            <div className="u-mgn-vert-sm">
              <a href="#typography" className="hyperlink">hyperlink</a>
            </div>
            <div className="u-mgn-vert-sm">
              <a href="#typography" className="hyperlink hyperlink--alt">hyperlink-alt</a>
            </div>
          </div>

          <div className="u-background-blue u-pad-sm">
            <h1 className="u-mgn-vert-sm heading__1 heading__1--ko">Heading 1-ko</h1>
            <h2 className="u-mgn-vert-sm heading__2 heading__2--ko">Heading 2-ko</h2>
            <h3 className="u-mgn-vert-sm heading__3 heading__3--ko">Heading 3-ko</h3>
            <h4 className="u-mgn-vert-sm heading__4 heading__4--ko">Heading 4-ko</h4>
            <h5 className="u-mgn-vert-sm heading__5 heading__5--ko">Heading 5-ko</h5>
            <Label text="label" ko={true} />
            <p className="u-mgn-vert-sm paragraph__1 paragraph__1--ko">paragraph text 1-ko</p>
            <p className="u-mgn-vert-sm paragraph__2 paragraph__2--ko">paragraph text 2-ko</p>
            <p className="u-mgn-vert-sm subtext subtext--ko">subtext-ko</p>
            <div className="u-mgn-vert-sm">
              <a href="#typography" className="hyperlink hyperlink--ko">hyperlink-ko</a>
            </div>
          </div>
          {/* Example */}
          <h3 className="heading__3 u-mgn-vert-sm">Example:</h3>
          <p className="paragraph__2 u-text-italic
          u-mgn-btm-sm">Aside from padding margin, the code below reflects the text displayed above.</p>
          <CodeBlock
            text={`
            import { Label } from "/components";

          <div className="u-pad-sm">

            <h1 className="heading__1">Heading 1</h1>

            <h2 className="heading__2">Heading 2</h2>

            <h3 className="heading__3">Heading 3</h3>

            <h4 className="heading__4">Heading 4</h4>

            <h5 className="heading__5">Heading 5</h5>

            <Label text="label" />

            <p className="paragraph__1">paragraph text 1</p>

            <p className="paragraph__2">paragraph text 2</p>

            <p className="subtext">subtext</p>

            <a href="#typography" className="hyperlink">hyperlink</a>

            <a href="#typography" className="hyperlink hyperlink--alt">hyperlink-alt</a>

          </div>

          <div className="u-background-blue u-pad-sm">

            <h1 className="heading__1 heading__1--ko">Heading 1-ko</h1>

            <h2 className="heading__2 heading__2--ko">Heading 2-ko</h2>

            <h3 className="heading__3 heading__3--ko">Heading 3-ko</h3>

            <h4 className="heading__4 heading__4--ko">Heading 4-ko</h4>

            <h5 className="heading__5 heading__5--ko">Heading 5-ko</h5>

            <Label text="label" ko={true} />

            <p className="paragraph__1 paragraph__1--ko">paragraph text 1-ko</p>

            <p className="paragraph__2 paragraph__2--ko">paragraph text 2-ko</p>

            <p className="subtext subtext--ko">subtext-ko</p>

            <a href="#typography" className="hyperlink hyperlink--ko">hyperlink-ko</a>

          </div>
            `}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>

        {/* UTILITY CLASSES */}
        <div id="utility" className="u-mgn-top-sm u-pad-sm">
          <h2 className="heading__2">Utility classes</h2>
          <p className="paragraph__1">Utility classes are used to add single style values to a given element. For example, if all you need to do to an element was to give it margin above, rather than creating a brand new css class that would only add margin, you can use a utility class that accomplishes the same thing.</p>

          <p className="paragraph__1 u-mgn-top-sm">When applied, all utility classes will begin with the `u-` prefix. For example: `u-mgn-btm-sm`</p>

        </div>
        <h3 className="heading__3 u-mgn-vert-sm">Margin</h3>

        <Table>
          <TableHead>
            <TH>Category</TH>
            <TH>Prefix</TH>
            <TH>Extensions</TH>
            <TH>Modifiers</TH>
          </TableHead>

          <TableRow>
            <TD>Margin</TD>
            <TD>mgn-</TD>
            <TD>top-, left-, right-, bottom-</TD>
            <TD>sm, md, lg</TD>
          </TableRow>

        </Table>

        {/* Example */}
        <h5 className="heading__5 u-mgn-vert-sm">Margin examples:</h5>
        <CodeBlock
          text={`
            <div className="u-mgn-btm-sm">
            </div>

            <div className="u-mgn-top-lg">
            </div>

          `}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />

        <h3 className="heading__3 u-mgn-vert-sm">Padding</h3>
        <Table>
          <TableHead>
            <TH>Category</TH>
            <TH>Prefix</TH>
            <TH>Extensions</TH>
            <TH>Modifiers</TH>
          </TableHead>

          <TableRow>
            <TD>Padding</TD>
            <TD>pad-</TD>
            <TD>top-, left-, right-, bottom-</TD>
            <TD>sm, md, lg</TD>
          </TableRow>

        </Table>

        {/* Example */}
        <h5 className="heading__5 u-pad-vert-sm">Padding examples:</h5>
        <CodeBlock
          text={`
            <div className="u-pad-btm-sm">
            </div>

            <div className="u-pad-top-lg">
            </div>

          `}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />

        <h3 className="heading__3 u-mgn-vert-sm">Flexbox</h3>
        <Table>
          <TableHead>
            <TH>Category</TH>
            <TH>Prefix</TH>
            <TH>Extensions</TH>
            <TH>Modifiers</TH>
          </TableHead>

          <TableRow>
            <TD>Flexbox</TD>
            <TD>flex-</TD>
            <TD>justify-, align-, self-</TD>
            <TD>
              <div>
                justify: 
                <p>start, end, center, between, evenly, around</p>
              </div>
              <div className="u-mgn-top-sm">
                align (items): 
                <p>start, end, center</p>
              </div>
              <div cslassName="u-mgn-top-sm">
                Misc (no extensions. so u-[value listed below]): 
                <p>all-center (display flex and justify + align center), row (direction), column (direction), wrap (wrap)</p>
              </div>
            </TD>
          </TableRow>

        </Table>

        {/* Example */}
        <h5 className="heading__5 u-pad-vert-sm">Padding examples:</h5>
        <CodeBlock
          text={`
            <div className="u-pad-btm-sm">
            </div>

            <div className="u-pad-top-lg">
            </div>

          `}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </div>
  )
}

export default StyleGuide
