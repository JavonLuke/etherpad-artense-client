
const createPad = require('./Pad')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    //req.useremail address
    // return author ID

    res.send({
      token: 'test123'
    });
});

app.use('/listAllPads', async (req, res) => {
  res.send({
    data: createPad.ListAllPads()
  });
  
})


app.use('/createPad', async (req, res) => {
  // req.authorID not null
  // req.authorID is an author - api.getAuthorName
  // ask the Pad to create a pad
  // send the pad Location to the user
  

  let padID = await createPad.CreatePad()
  res.send({


    padID: padID,
    tempPadID: 'test123PadID'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

