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
//import Paper from '@mui/material/Paper';

const UserPads = (props) => {
    const [authorID, setAuthorID] = useState(props.authorID)
    const [padNames, setPadNames] = useState(Array())
    
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
            setPadNames([data])
        }).catch((err) => {
            console.error(err)
        })
    }
}, [authorID])

//  
 return(<div>

<TableContainer component={Paper}>  
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {padNames?.map((row) => (
              <TableRow
                key={row}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right" component={ViewPad} to={`/pad/`}>
                    {row}</TableCell>       
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
 </div>)   
    
}


export default UserPads