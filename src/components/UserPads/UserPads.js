import * as pad from "../../etherpad/Pad"
import * as author from "../../etherpad/Author"
import { useEffect } from "react"
import * as React from 'react';
import {Table} from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core'
import { useState } from "react";
import { Link } from "react-router-dom";
import {ViewPad} from "./ViewPad"
import { useHistory , useParams} from "react-router-dom";

import react from "react";
//import Paper from '@mui/material/Paper';

const UserPads = (props) => {
    const [authorID, setAuthorID] = useState(props.authorID)
    const [padNames, setPadNames] = useState(Array())
    const [padID, setPadID] = useState(undefined)
    const history = useHistory()
  const params = useParams()
useEffect(() => {

    if(authorID) {
        author.ListPadsOfAuthor(authorID).then((data) => {
            console.log("List author pads")
            console.log(data)
            setPadNames(data)           
        }).catch((err) => {
            console.error(err)
        })
    } else {
        pad.ListAllPads().then((data) => {
            console.log("List all pads")
            console.log(data)
            console.log(data?.data)
            console.log(data?.data?.data)
            console.log(data?.data?.data?.data?.padIDs)
            setPadNames(data?.data?.data?.data?.padIDs)
        }).catch((err) => {
            console.error(err)
        })
    }
}, [authorID, padID])
//<TableContainer component={Paper}>  
//  component={ViewPad} to={`/pad`}
function showViewPad(padID)  {
  // I need to change the text
  pad.ListAllPads().then((data) => {
    console.log("List all pads")
    console.log(data)
    console.log(data?.data)
    console.log(data?.data?.data)
    console.log(data?.data?.data?.data?.padIDs)
    setPadID(padID)
    // setPadNames(data?.data?.data?.data?.padIDs)
}).catch((err) => {
    console.error(err)
})

  
  // history.push("/viewPad")
}
useEffect(() => {
if(!padID) return 




}, [padID])


 return(
   <div>
     <button onClick={async () => {
       let newPadID = "1212"
      const data = await pad.createPad(newPadID, "two")
      console.log(data)
      setPadID(newPadID)}}>Create Pad</button>


        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {padNames?.slice(-5).map((row) => (
              <TableRow
                key={row}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right" onClick={() => {
                  showViewPad(row)}}>
                    {row}
                </TableCell>       
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {padID && <ViewPad padID={padID}></ViewPad>}
        </div>
  
 )   
    
}

               
export default UserPads