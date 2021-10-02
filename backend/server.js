
const pad = require('./Pad')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.use('/login', (req, res) => {
    //req.useremail address
    // return author ID

    res.send({
      token: 'test123'
    });
});

app.use('/listAllPads', async (req, res) => {
  pad.ListAllPads().then((data) => {
    console.log(data)
    res.send({
      data: data
    });
  }).catch((err) => {
    console.error(err)
  })  
})


app.use('/createPad', (req, res) => {
  // req.authorID not null
  // req.authorID is an author - api.getAuthorName
  // ask the Pad to create a pad
  // send the pad Location to the user
  
  //console.log(req)
  //let padID = req.padID ? req.padID : "testing"


  pad.CreatePad({padID: req?.body?.padID, text: req?.body?.text
  }).then((data) => {
    console.log("Server - CreatePad - Success")
    console.log(data.message)
    console.log(JSON.stringify(data))
    // I think I would deal with any errors here
    res.send({
      data: JSON.stringify(data)
    });
  }).catch((err) => {
    console.log("Server - CreatePad - Error")
  })
});



app.listen(8080, () => console.log('API is running on http://localhost:8080'));

