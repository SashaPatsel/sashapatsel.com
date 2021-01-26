import React, {Component} from  "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./pages/Landing";
import StyleGuide from "./pages/StyleGuide";
import Activate from "./auth/Activate";
import { ToastContainer } from 'react-toastify';
import PasswordResetReq from "./auth/PasswordResetReq";
import PasswordReset from "./auth/PasswordReset";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer/>
        <Router history={history}>
          <Switch>
            {/* Root */}
            <Route exact path="/" component={Landing}/>
            
            {/* Authentication */}
            <Route path="/accounts/activate" component={Activate}/>
            <Route path="/accounts/password_reset_req" component={PasswordResetReq}/>
            <Route path="/accounts/password_reset" component={PasswordReset}/>

            {/* Other */}
            <Route path="/style_guide" component={StyleGuide}/> 

          </Switch>
        </Router>
      </div>
    )
  }
};

export default App;
