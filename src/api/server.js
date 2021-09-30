import axios from "axios";

import React, { useEffect, useState } from "react";
//const eejs = require('ep_etherpad-lite/node/eejs/');
//const settings = require('ep_etherpad-lite/node/utils/Settings');

//exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
//  args.content = eejs.content="foo"; return cb(); };
let apiKey = "308c704c36b41c846ba1713a59f92c6a9707ced910894de32070287a03bfcb68"
let apiVersion = "1.2.14"
let site = "localhost"
let connectionType = "http"
let port = ":9001" // don't forget colon
let createAuthor_endpoint = 'createAuthor'
let createSession_endpoint = 'createSession'
let createGroup_endpoint = 'createGroup'
let validUntil_endpoint = 2312905480;
let createGroupPadID_endpoint = 'createGroupPad'
let createPadID_endpoint = 'createPad'
let defaultText = "";
let testPadName = "testCreatePad"
let testText = "this is the first sentence - testing"
let clientLocation = "http://localhost:9001/p/"

const endPoint = (point) => `${connectionType}://${site}${port}/api/${apiVersion}/${point}?apikey=${apiKey}`;

export const testPad = async () => {
    console.log("Attempting to test pad")
    let authorID = await axios.get(endPoint(createAuthor_endpoint)).then((res) => {
        console.log("Author Created: " + res.data.data.authorID)
        return res.data.data.authorID
    })
    console.log(authorID)
    
    
   // let groupPadEndPoint_endpoint = `${endPoint(createGroupPadID_endpoint)}` + `&groupID=${groupID}` + `&padName=${"testPadName"}` +
   // `&text=${testText}`
    


    let padEndPoint_endpoint = `${endPoint(createPadID_endpoint)}` + `&padID=testCreatePad` + `&text=${testText}`

    let groupPadID = await axios.get(padEndPoint_endpoint).then((res) => {
        console.log(res)
        if(res.data.data === null) {
            return "testCreatePad"
        }
        console.log("Pad Created: " + res.data.data.padID)
        return res.data.data.padID
    })

    let padLocation = `${clientLocation}${groupPadID}`// + translateEtherpadOptions(etherpadOptions)

    return { "authorID": authorID,
    
"groupPadID": groupPadID,
"clientLocation": clientLocation,
"padLocation": padLocation}
}

export const testPad_setText = async () => {

    let padEndPoint_endpoint = `${endPoint("setText")}` + `&padID=${testPadName}` + `&text=I Just Set the text`

 await axios.get(padEndPoint_endpoint).then((res) => {
        console.log(res)
       
        console.log("Pad text set: ")
       // return res.data.data.padID
    })

}


export const testPad_getHTML = async () => {
let padEndPoint_endpoint = `${endPoint("getHTML")}` + `&padID=${testPadName}` 

return await axios.get(padEndPoint_endpoint).then((res) => {
        console.log(res)
       
        console.log("Pad get HTML")
       // return res.data.data.padID
       return res.data
    })
}
export const testPad_getText = async () => {
    let padEndPoint_endpoint = `${endPoint("getText")}` + `&padID=${testPadName}` 
    
    return await axios.get(padEndPoint_endpoint).then((res) => {
            console.log(res)
           
            console.log("Pad get Text")
           // return res.data.data.padID
           return res.data
        })
    }



export const testPad_1 = async () => {
    console.log("Attempting to test pad")
    console.log(endPoint(createAuthor_endpoint))
    let authorID = await axios.get(endPoint(createAuthor_endpoint)).then((res) => {
        console.log("Author Created: " + res.data.data.authorID)
        return res.data.data.authorID
    })
    console.log(authorID)
    let groupID = await axios.get(endPoint(createGroup_endpoint)).then((res) => {
        console.log("Group Created" + res.data.data.groupID)
        return res.data.data.groupID
    })
    
    let sessionEndPoint = `${endPoint(createSession_endpoint)}` + `&authorID=${authorID}` + `&groupID=${groupID}` +
    `&validUntil=${validUntil_endpoint}`

    let sessionID = await axios.get(sessionEndPoint).then((res) => {
        console.log(res)
        console.log("Session Created: " + res.data.data.sessionID)
        return res.data.data.sessionID
    })

    let groupPadEndPoint_endpoint = `${endPoint(createGroupPadID_endpoint)}` + `&groupID=${groupID}` + `&padName=${"testPadName"}` +
    `&text=${testText}`

    let groupPadID = await axios.get(groupPadEndPoint_endpoint).then((res) => {
        console.log(res)
        console.log("Group Pad Created: " + res.data.data.padID)
        return res.data.data.padID
    })

    let padLocation = `${clientLocation}${groupPadID}`// + translateEtherpadOptions(etherpadOptions)

    return { "authorID": authorID,
    "sessionID": sessionID,
    "groupID": groupID,
"groupPadID": groupPadID,
"clientLocation": clientLocation,
"padLocation": padLocation}
}

export const createGroupPad = async (groupID, etherpadOptions) => {
    console.log("Attempting to create Pad")

    const translateEtherpadOptions = (etherpadOptions) => {
        return "?showChat=false&showLineNumbers=false"
      }

    let authorID = await axios.get(endPoint(createAuthor_endpoint)).then((res) => {
        console.log("Author Created: " + res.data.data.authorID)
        return res.data.data.authorID
    })
    groupID = await axios.get(endPoint(createGroup_endpoint)).then((res) => {
        console.log("Group Created" + res.data.data.groupID)
        return res.data.data.groupID
    })

    
    let sessionEndPoint = `${endPoint(createSession_endpoint)}` + `&authorID=${authorID}` + `&groupID=${groupID}` +
    `&validUntil=${validUntil_endpoint}`

    let sessionID = await axios.get(sessionEndPoint).then((res) => {
        console.log(res)
        console.log("Session Created: " + res.data.data.sessionID)
        return res.data.data.sessionID
    })

    let groupPadEndPoint_endpoint = `${endPoint(createGroupPadID_endpoint)}` + `&groupID=${groupID}` + `&padName=${"testPadName"}` +
    `&text=${defaultText}`

    let groupPadID = await axios.get(groupPadEndPoint_endpoint).then((res) => {
        console.log(res)
        console.log("Group Pad Created: " + res.data.data.padID)
        return res.data.data.padID
    })

    let padLocation = `${clientLocation}${groupPadID}` + translateEtherpadOptions(etherpadOptions)

    return { "authorID": authorID,
    "sessionID": sessionID,
    "groupID": groupID,
"groupPadID": groupPadID,
"clientLocation": clientLocation,
"padLocation": padLocation}
}


