import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form'

function App() {
  const [teamMembers ,setTeamMembers] = useState([

  {
    name:'bill',
    email:'bill@lambdaschool.com',
    role: 'web dev',
  },
  {
  name:'demetri',
  email:'demetri@lambdaschool.com',
  role: 'fullstack deveolper',
}

])



  return (

      <div>
        <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      
  <div>{teamMembers.map(memberDetails=>{
    return (
      <div>
        <div>{memberDetails.name} </div>
        <div>{memberDetails.email} </div>
        <div>{memberDetails.role} </div>
    </div>
      )
      })}
   </div>
</div> 
      );
}

export default App;
