const axios = require('axios')

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

let clientLocation = "http://localhost:9001/p/"



const endPoint = (point) => `${connectionType}://${site}${port}/api/${apiVersion}/${point}?apikey=${apiKey}`;
    
const etherpad = (point, etherpadOptions = []) => {
    let options = "";
    if(etherpadOptions.length > 0) {
        options = etherpadOptions.flat().join("")
    }

    let connectionPoint = endPoint(point).concat(options)

   return axios.get(connectionPoint).then((res) => {
       console.log("Etherpad - Connection - Success ~ " + point)
        return res?.data

    }).catch((err) => {
        console.log("Etherpad - Connection - Error")
    })

}


module.exports = etherpad