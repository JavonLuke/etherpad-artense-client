import React, { useEffect } from 'react';
import Link from 'react-dom';
import { useState } from 'react';
import UserPads from "../UserPads/UserPads"

import etherpad from '../../etherpad/Pad'
//import Pad from '../../../backend/Pad'
import Pad from '../../etherpad/Pad'
import { useHistory } from 'react-router';

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



export default function Dashboard(props) {
 //const history = useHistory()
const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions);
const [padID, setPadID] = useState(undefined)
 
console.log("Set Pad ID" + padID)
//<UserPads authorID = "testAuthor"> </UserPads>




  // group
/*  useEffect(() => {
    if(!padID) return


    history.pushState("/pad")
    
      }, [padID])*/


/**<button onClick={async () => {
      let a = await createPad()
      setPadID(a.padID)}}>Create Pad</button>

  
    <Link to={{
      pathName: "/pad",
      state: {
        padID : padID
      }}}>Get Pad</Link>  */

  return(
    <div>
    <h2>Dashboard</h2>
   <UserPads></UserPads>
    

    </div>


  );
}

