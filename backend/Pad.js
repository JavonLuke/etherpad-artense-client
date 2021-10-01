const etherpad = require('./Etherpad')

const ListAllPads = async () => {
    return etherpad("listAllPads").then((data) => {
     console.log(data)
     return data?.padIDs   
    }).catch((err) => {
        console.log(err)
    })
}


const HTMLPad = () => {

}
 const   DeletePad = () => {

 }
    const ListAuthorOfPad = () => {

    }

    

  const CreatePad = async (tempPadID = undefined, etherpadOptions = undefined) => {
  
    const padID = tempPadID ? tempPadID : guidGenerator()

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

module.exports = {
    CreatePad,
   // GetPad,
    HTMLPad,
    DeletePad,
    ListAuthorOfPad,
    ListAllPads
}