import { useEffect, useState } from "react";
import axios from "axios";

async function createPad() {
    console.log("CreatePad Front End")
    
    return fetch('http://localhost:8080/createPad', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }//,      body: JSON.stringify(credentials)
    })
    .then((data) => {
        console.log(data)
        return data.json()})
      
  }


export const Pad = (props) => {
    const [padID, setPadID] = useState(undefined)


    useEffect(() => {
        if(padID === undefined) return


        let id = props?.location?.state?.padID
        if(!id) {
            setPadID(createPad().padID)
        } else {
            setPadID(id)
        }

    }, [padID])







return (
<div>

<iframe src={padID}
        width={600}
          height={400}
        ></iframe>


        </div>)


}


export const PadAPI = (props) => {
    // create Pad - ensure that you are logged in to create a pad
    // get Pad - pass an iframe
    // delete Pad
    // get Pad HTML - pass html
    // is valid author
  
    const [authorID, setAuthorID] = useState(props.authorID);
    const [padID, setPadID] = useState(props.padID)
    const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions);
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

     const testPad = async () => {
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
    
     const testPad_setText = async () => {
    
        let padEndPoint_endpoint = `${endPoint("setText")}` + `&padID=${testPadName}` + `&text=I Just Set the text`
    
     await axios.get(padEndPoint_endpoint).then((res) => {
            console.log(res)
           
            console.log("Pad text set: ")
           // return res.data.data.padID
        })
    
    }
    
    
     const testPad_getHTML = async () => {
    let padEndPoint_endpoint = `${endPoint("getHTML")}` + `&padID=${testPadName}` 
    
    return await axios.get(padEndPoint_endpoint).then((res) => {
            console.log(res)
           
            console.log("Pad get HTML")
           // return res.data.data.padID
           return res.data
        })
    }



}