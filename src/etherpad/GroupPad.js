import React, { useEffect, useState } from "react";
import * as api from "../api/server"


const SetCookies = (sessionID) => {
    document.cookie = `sessionID=${sessionID}`;
}

/** const eejs = require('ep_etherpad-lite/node/eejs/'); const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) { args.content = eejs.content="foo"; return cb(); };*/
const GroupPad = (props) => {
  const [groupID, setGroupID] = useState(props.groupID);
  const [authorID, setAuthorID] = useState(props.authorID);
  const [sessionID, setSessionID] = useState(props.sessionID);
  const [groupPadID, setGroupPadID] = useState(props.groupPadID)
  const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions);
  //const [padLocation, setPadLocation] = useState(undefined)
 

  // group
  useEffect(() => {
    // has author - no author
    // has group - no group
    // has session - no session
    // has groupPad - no groupPad
    
    if(!authorID) {
// return false
    } 
      
    if(!groupID) {
        // return false
    } 

    if(!sessionID) {
        // create new session - on group and author
    } else {
        // set sessionID to cookie
    }

    if(!groupPadID) {
        // create new groupPad
        // set Location
    }


    api.createGroupPad().then((res) => {
        let groupPadID = res.groupPadID
        let http = res.clientLocation
        setSessionID(res.sessionID)
        setGroupID(res.groupID)
        setAuthorID(res.authorID)
        setGroupPadID(res.groupPadID)
        let options = translateEtherpadOptions(props.options)
        setPadLocation(`${http}${groupPadID}` + options)
    })
  }, [])


  useEffect(() => {
    if(!sessionID) {
        // do you have an author?
        if(!groupID) {
            // create a group
            setGroupID("tttt")
        } 
    } else {
        SetCookies(sessionID)
      
                  

    }
  }, [sessionID])

  useEffect(() => {
    if(!groupPadID) {
        // create new groupPad
        // set Location
        api.createGroupPad(groupID, etherpadOptions).then((res) => {
            setGroupPadID(res.groupPadID)
        })
    } 
  }, [groupPadID, groupID, sessionID])

  return (
      <iframe
          src={groupPadID}
          width={600}
          height={400}
        ></iframe>
      
  );
}

export default App;
