import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import * as api from "./api/server"
import $ from "cash-dom";

//const eejs = require('ep_etherpad-lite/node/eejs/');
//const settings = require('ep_etherpad-lite/node/utils/Settings');

//exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
//  args.content = eejs.content="foo"; return cb(); };



function SignIn() {
  const [padID, setPadID] = useState(undefined);
  // const [groupID, setGroupID] = useState(undefined);
  const [authorID, setAuthorID] = useState(undefined);
  // const [sessionID, setSessionID] = useState(undefined);
  const [etherpad, setEtherpad] = useState(undefined)
  // const [groupPad, setGroupPad] = useState(undefined)
 

  //etherpad.createPad('howdy', ["kekek"])
 


  // group
  useEffect(() => {

api.testPad().then((res) => {


  console.log("useeffect")
  console.log(res)
  let padID = res.groupPadID
  let sessionID = res.sessionID
  console.log(sessionID)
  
  //  document.cookie = `sessionID=${sessionID}`;
   // console.log("Document Cookies: " + document.cookie)
setGroupPad(res.padLocation)
  //setGroupPad(`${http}${padID}` + "?showChat=false&showLineNumbers=false")
  
})

api.testPad_setText().then((res) => {
  return res
})


  }, [])

  function removeEmpty(obj) {
    return Object.keys(obj)
      .filter(function (k) {
        return obj[k] != null;
      })
      .reduce(function (acc, k) {
        acc[k] = obj[k];
        return acc;
      }, {});
  }

  const propsButton = () => {
    api.testPad_getHTML().then((res) => {
      console.log("Get HTML")
      
      let html = $.parseHTML(res.data.html)
      
      var obj = $(a).filter('strong'); // filters for strong words
      $.each(obj, (i, ele) => {
        console.log(ele.innerText)
      })
      return res
    })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
<p>{groupID}</p>
<button onClick={propsButton}>
 GET HTML
</button>
<p>{authorID}</p>
<iframe
          src={groupPad        }
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

export default SignIn;

/*

//export default App;

function App1() {
  const [padID, setPadID] = useState(undefined);
  // const [groupID, setGroupID] = useState(undefined);
  const [authorID, setAuthorID] = useState(undefined);
  // const [sessionID, setSessionID] = useState(undefined);
  const [etherpad, setEtherpad] = useState(undefined)
  // const [groupPad, setGroupPad] = useState(undefined)
 

  //etherpad.createPad('howdy', ["kekek"])
 


  // group
  useEffect(() => {

api.testPad().then((res) => {


  console.log("useeffect")
  console.log(res)
  let http = "http://localhost:9001/p/"
  let padID = res.groupPadID
  let sessionID = res.sessionID
  console.log(sessionID)
  
  //  document.cookie = `sessionID=${sessionID}`;
   // console.log("Document Cookies: " + document.cookie)
setGroupPad(res.padLocation)
  //setGroupPad(`${http}${padID}` + "?showChat=false&showLineNumbers=false")
  
})

api.testPad_setText().then((res) => {
  return res
})


api.createGroupPad().then((res) => {
console.log("useeffect")
console.log(res)
let http = "http://localhost:9001/p/"
let padID = res.groupPadID
let sessionID = res.sessionID
console.log(sessionID)

  document.cookie = `sessionID=${sessionID}`;
  console.log("Document Cookies: " + document.cookie)
setGroupPad(`${http}${padID}` + "?showChat=false&showLineNumbers=false")

})


  }, [])

  function removeEmpty(obj) {
    return Object.keys(obj)
      .filter(function (k) {
        return obj[k] != null;
      })
      .reduce(function (acc, k) {
        acc[k] = obj[k];
        return acc;
      }, {});
  }

  const propsButton = () => {
    api.testPad_getHTML().then((res) => {
      console.log("Get HTML")
      
      let html = $.parseHTML(res.data.html)
      
      var obj = $(a).filter('strong'); // filters for strong words
      $.each(obj, (i, ele) => {
        console.log(ele.innerText)
      })
      return res
    })
      api.testPad_getText().then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.text)
        console.log("Get Text")
        
        console.log($.parseHTML(res.data.text))
        $.parseHTML(res.data.text)
        console.log($(res.data.text))
        $(res.data.text)
        
        return res
        })
  }
  
  let api1 = require("etherpad-lite-client");
  //console.log(api1)
  // alert(api1)
  let etherpad = api1.connect({
    apikey: "308c704c36b41c846ba1713a59f92c6a9707ced910894de32070287a03bfcb68",
    host: "localhost",
    port: 9001,
    rejectUnauthorized: false//,
    //sessionkey: "7b52fbcb43a53ffe28c57280c259cdabcad1d5ade05ea23e8af0e43ae3d289ab"
  });
setEtherpad(etherpad)
  

etherpad.createPad("tempPad",[,"hello"], function (error, data1) { // author
  if (error) console.log("Error creating author: " + error.message);
  else console.log("New pad created: " + data1.authorID);
  setPadID(data1.authorID);
})

//etherpad.setText("tempPad", "yes" )
    
   // console.log(etherpad)
    
    etherpad.createAuthor(["javon-test1"], function (error, data1) { // author
      if (error) console.log("Error creating author: " + error.message);
      else console.log("New author1 created: " + data1.authorID);
      setAuthorID(data1.authorID);
      //alert("Author id1" + data1.authorID);
      
      
      etherpad.createGroup(function(error, data) {
        if(error) console.error('Error creating group: ' + error.message)
        else console.log('New group created: ' + data.groupID)

        setGroupID(data.groupID)


        var args = {
          groupID: data.groupID,
          padName: "testpad",
          text: "Hello world!",
        };
       
  
        etherpad.createGroupPad(args, function (error, data2) {
          if (error) console.error("Error creating pad: " + error.message);
          else console.log("New pad created: " + data2.padID);
  
          if (data2.padID) setPadID(data2.padID);
          //alert(data2.padID)

          
        })
            
            
      
          });
        


      })
      }, []);
      


      useEffect(() => { 

        if(groupID !== undefined & authorID !== undefined ) {
console.log(groupID)
console.log(authorID)
        
      etherpad.createSession(authorID,groupID,          1312201246 ,
        function(error, data) {
console.log("worked")

        });
        } else {
          console.log("tried")
        }
    }, [groupID, authorID, padID]);
      
            // create session
          etherpad.createSession(         data.groupID,            data1.authorID,            1312201246);
           , function (error, data3) {
  if (error) console.log("Error creating session: " + error.message);
  else console.log("New session created: " + data3.sessionID);
  setSessionID(data3.sessionID)
  console.log(data3)
  alert(data3.sessionID)
  });


     etherpad.createAuthorIfNotExistsFor(8, ["javon-test2"], function (error, data1) {
      if (error) console.log("Error creating author: " + error.message);
      else console.log("New author created: " + data1.authorID);
      setAuthorID(data1.authorID);
      console.log(data1)
      alert("Author id" + data1.authorID);
    })

  //  Portal maps the internal userid to an etherpad group:
  Request: http://pad.domain/api/1/createAuthorIfNotExistsFor?apikey=secret&name=Michael&authorMapper=7
    
    Response: {code: 0, message:"ok", data: {authorID: "a.s8oes9dhwrvt0zif"}}
  
    
    Request: http://pad.domain/api/1/createGroupIfNotExistsFor?apikey=secret&groupMapper=7
    
    Response: {code: 0, message:"ok", data: {groupID: "g.s8oes9dhwrvt0zif"}}
    
    Portal creates a pad in the userGroup
    
    Request: http://pad.domain/api/1/createGroupPad?apikey=secret&groupID=g.s8oes9dhwrvt0zif&padName=samplePad&text=This is the first sentence in the pad
    
    Response: {code: 0, message:"ok", data: null}
    
    Portal starts the session for the user on the group:
    
    Request: http://pad.domain/api/1/createSession?apikey=secret&groupID=g.s8oes9dhwrvt0zif&authorID=a.s8oes9dhwrvt0zif&validUntil=1312201246
    
    Response: {"data":{"sessionID": "s.s8oes9dhwrvt0zif"}}
    
    Portal places the cookie "sessionID" with the given value on the client and creates an iframe including the pad.

  //   etherpad.createPad('howdy', ["yes"])
   , function(error, data){
       if (error) console.log("Error creating text: " + error.message);
       else console.log("New pad created: " + data);
       setSessionID('howdy')
     })*/
 
  //  etherpad.setText('howdy', 'hello')
  //setSessionID('howdy')

  //   console.log(etherpad.getText('howdy', [1]))
  // etherpad.getHTML('howdy').then((e) => {
  //   console.log(e)
  // })

/*   etherpad.getHTML('howdy').then((e, d) => {
    console.log(e)
    console.log(d)
  })
    
     , function(error, data){
       if (error) console.log("Error creating text: " + error.message);
       else console.log("New author created: " + data);
       setSessionID('howdy')
       console.log("hehllo")
     })
  

 


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

    })
    {padID && (
          <iframe
            src={
              "http://localhost:9001/p/" + "tempPad" +
              
              "?showChat=false&showLineNumbers=false"
            }
            width={600}
            height={400}
          ></iframe>
        )}
        <iframe
          src={
            "http://localhost:9001/p/" +
            padID +
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<p>{groupID}</p>
<button onClick={propsButton}>
 GET HTML
</button>
<p>{authorID}</p>
<iframe
          src={groupPad        }
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
}*/