



 export const CreatePad = async (tempPadID = undefined, etherpadOptions = undefined) => {
    
let apiKey = "308c704c36b41c846ba1713a59f92c6a9707ced910894de32070287a03bfcb68"
let apiVersion = "1.2.14"
let site = "localhost"
let connectionType = "http"
let port = ":9001" // don't forget colon
let createAuthor_endpoint = 'createAuthor'
// let createSession_endpoint = 'createSession'
// let createGroup_endpoint = 'createGroup'
// let validUntil_endpoint = 2312905480;
// let createGroupPadID_endpoint = 'createGroupPad'
let createPadID_endpoint = 'createPad'
let defaultText = "";
let testPadName = "testCreatePad"
let testText = "this is the first sentence - testing"
let clientLocation = "http://localhost:9001/p/"


function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

    const padID = tempPadID ? tempPadID : guidGenerator()

    const endPoint = (point) => `${connectionType}://${site}${port}/api/${apiVersion}/${point}?apikey=${apiKey}`;
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
    
        return {       
    "groupPadID": groupPadID,
    "clientLocation": clientLocation,
    "padLocation": padLocation}
    }
/*
 const CreatePad1 = (tempPadID = undefined, etherpadOptions) => {
    //const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions);
    //const [padID, setPadID] = useState(props.padID)
    const padID = tempPadID ? tempPadID : guidGenerator()

    // create Pad - ensure that you are logged in to create a pad
    // delete Pad
    // get Pad HTML - pass html
    // is valid author
    // create author

    const endPoint = (point) => `${connectionType}://${site}${port}/api/${apiVersion}/${point}?apikey=${apiKey}`;

    //const [authorID, setAuthorID] = useState(props.authorID);
    

    


    

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
    
        return {       
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



}*/