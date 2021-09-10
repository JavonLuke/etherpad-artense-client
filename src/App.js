import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
//const eejs = require('ep_etherpad-lite/node/eejs/');
//const settings = require('ep_etherpad-lite/node/utils/Settings');

//exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
//  args.content = eejs.content="foo"; return cb(); };

function App() {
  const [padID, setPadID] = useState(undefined);
  const [groupID, setGroupID] = useState(undefined);
  const [authorID, setAuthorID] = useState(undefined);
  const [sessionID, setSessionID] = useState(undefined);



  //etherpad.createPad('howdy', ["kekek"])
 

  // group
  useEffect(() => {
    let api1 = require("etherpad-lite-client");
    //console.log(api1)
    // alert(api1)
    let etherpad = api1.connect({
      apikey: "e0ee8e03e729eb36821bc1ccd2a9710adf9bf292841b563bc9f75f3d8df7e92f",
      host: "localhost",
      port: 9001//,
     // rejectUnauthorized: false
    });
  
  //   etherpad.createPad('howdy', ["yes"])
/*     , function(error, data){
       if (error) console.log("Error creating text: " + error.message);
       else console.log("New pad created: " + data);
       setSessionID('howdy')
     })*/
 
  //  etherpad.setText('howdy', 'hello')
  setSessionID('howdy')

  //   console.log(etherpad.getText('howdy', [1]))
  // etherpad.getHTML('howdy').then((e) => {
  //   console.log(e)
  // })

   etherpad.getHTML('howdy').then((e, d) => {
    console.log(e)
    console.log(d)
  })
  
/*     
     , function(error, data){
       if (error) console.log("Error creating text: " + error.message);
       else console.log("New author created: " + data);
       setSessionID('howdy')
       console.log("hehllo")
     })
  */

  }, []);

/** 
, function (error, d) {
  if (error) console.log("Error creating author: " + error.message);
  else console.log("New text created: " + d);
  alert("text id" + d)
  console.log(d)

})


etherpad.createAuthorIfNotExistsFor(8, ["javon-test2"], function (error, data1) {
  if (error) console.log("Error creating author: " + error.message);
  else console.log("New author created: " + data1.authorID);
  setAuthorID(data1.authorID);
  alert("Author id" + data1.authorID);
})
etherpad.createAuthor(["javon-test1"], function (error, data1) {
  if (error) console.log("Error creating author: " + error.message);
  else console.log("New author1 created: " + data1.authorID);
  setAuthorID(data1.authorID);
  //alert("Author id1" + data1.authorID);
})


etherpad.createAuthorIfNotExistsFor(7, ["javon-test"], function (error, data1) {
    if (error) console.log("Error creating author: " + error.message);
    else console.log("New author created: " + data1.authorID);
    setAuthorID(data1.authorID);
    alert("Author id" + data1.authorID);

    etherpad.createGroupIfNotExistsFor(7, function (error, data) {
      if (error) console.error("Error creating group: " + error.message);
      else console.log("New group created: " + data.groupID);
      setGroupID(data.groupID);
      alert("Group pad" + data.groupID);
      // author
      // createAuthorIfNotExistsFor;
      var args = {
        groupID: data.groupID,
        padName: "testpad",
        text: "Hello world!",
      };
      etherpad.createGroupPad(args, function (error, data2) {
        if (error) console.error("Error creating pad: " + error.message);
        else console.log("New pad created: " + data2.padID);

        if (data2.padID) setPadID(data2.padID);
        alert(data2.padID)
        etherpad.createSession(
          data.groupID,
          data1.authorID,
          1312201246);
         , function (error, data3) {
if (error) console.log("Error creating session: " + error.message);
else console.log("New session created: " + data3.sessionID);
setSessionID(data3.sessionID)
console.log(data3)
alert(data3.sessionID)
});
      });
    });
  }
);

  etherpad.createPad("test1", ["hello"],
    function (error, data) {
      if (error) console.error('Error creating pad: ' + error.message)
      else console.log('New pad created: ' + data.padID)

      if(padID === undefined) {
        setPadID(data.padID)
      }

    })*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {padID && (
          <iframe
            src={
              "http://localhost:9001/p/" +
              
              "?showChat=false&showLineNumbers=false"
            }
            width={600}
            height={400}
          ></iframe>
        )}
        <iframe
          src={
            "http://localhost:9001/p/" +
            "test1" +
            "?showChat=false&showLineNumbers=false"
          }
          width={600}
          height={400}
        ></iframe>
          <iframe
          src={
            "http://localhost:9001/p/" +
            sessionID +
            "?showChat=false&showLineNumbers=false"
          }
          width={600}
          height={400}
        ></iframe>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
