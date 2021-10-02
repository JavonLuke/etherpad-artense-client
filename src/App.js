import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import * as api from "./api/server"
import $ from "cash-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import useToken from "./components/token/useToken";
import {Pad} from './etherpad/Pad'
import {ViewPad} from "./components/UserPads/ViewPad"
import UserPads from "./components/UserPads/UserPads"
//const eejs = require('ep_etherpad-lite/node/eejs/');
//const settings = require('ep_etherpad-lite/node/utils/Settings');

//exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
//  args.content = eejs.content="foo"; return cb(); };
import Login from './components/Login/Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  // const token = getToken();
  // const [token, setToken] = useState();
  //const {token, setToken} = useState("")//useToken()
  const [token, setToken] = useState("")//useToken()
//const token = ""
  /*if(!token) {
    return <Login setToken={setToken} />
  }*/

  return (
    <div className="wrapper">
      <h1>Application</h1>
     
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/viewPad">
            <div> HELLO </div>
            <ViewPad />
          </Route>
          <Route path="/userPads">
            <UserPads />
          </Route>
          
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
