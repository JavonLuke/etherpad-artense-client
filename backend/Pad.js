const etherpad = require('./Etherpad')

const ListAllPads = () => {
    return etherpad("listAllPads")
}

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()).toString();
}

const HTMLPad = () => {

}
 const   DeletePad = () => {

 }
    const ListAuthorOfPad = () => {

    }

    const CreatePad = (options) => {
        console.log("Pad - CreatePad")        
        let padID = options?.padID ? 
        `&padID=${options?.padID}` :
        `&padID=${guidGenerator()}`
        console.log(padID)

        let text = options?.text ? `&text=${options?.text}` : ""
        console.log(text)


        const etherpadOptions = [padID, text]

        return etherpad('createPad', etherpadOptions)
    }

    const CreatePad1 = (tempPadID = undefined, etherpadOptions = undefined) => {
  
        
        const padID = tempPadID ? tempPadID : guidGenerator()
        console.log(padID)
        let padEndPoint_endpoint = `${endPoint('createPad')}` + `&padID=${padID}` + `&text=${testText}`
        
        console.log(endPoint('createPad'))
        console.log(padEndPoint_endpoint)

        return axios.get(padEndPoint_endpoint).then((res) => {
                    console.log(res)
                    console.log("Pad Created: " + res.data.data.padID)
                    let groupPadID = res.data.data.padID
                    
                    // return res.data.data.padID
                    let padLocation = `${clientLocation}${groupPadID}`// + translateEtherpadOptions(etherpadOptions)
            
                    return {       
                "groupPadID": groupPadID,
                "clientLocation": clientLocation,
                "padLocation": padLocation}

                }).catch((err) => {
                    console.error(err)
                })
            
         
    }

  /*const CreatePad = async (tempPadID = undefined, etherpadOptions = undefined) => {
  
    const padID = tempPadID ? tempPadID : guidGenerator()

    let padEndPoint_endpoint = `${endPoint('createPad')}` + `&padID=${padID}` + `&text=${testText}`
    
    let groupPadID = await axios.get(padEndPoint_endpoint).then((res) => {
            console.log(res)
            if(res.data.data === null) {
                return padID
            }
            console.log("Pad Created: " + res.data.data.padID)
            return res.data.data.padID
        })
    
        let padLocation = `${clientLocation}${groupPadID}`// + translateEtherpadOptions(etherpadOptions)
    
        return {       
    "groupPadID": groupPadID,
    "clientLocation": clientLocation,
    "padLocation": padLocation}
    }*/
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