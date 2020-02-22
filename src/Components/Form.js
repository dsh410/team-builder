import React, { useState } from 'react'

const Form = (props)=>{
    const [newTeamMember,setNewTeamMember]= useState({
        name:'',
        email:'',
        role:''
    })
    const changeHandler=(event)=>{
        setNewTeamMember({...newTeamMember,[event.target.name]:event.target.value})
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        props.setTeamMembers([...props.teamMembers,newTeamMember])
    }
    return (
    <div>
        <form onSubmit ={submitHandler} >

            <input name="name" onChange={changeHandler} type="text"></input>
            <input name="email" onChange={changeHandler} type="text"></input>
            <input name="role" onChange={changeHandler}  type="text"></input>
            <button input='submit' >submit</button>
        </form>


        <div>current name {newTeamMember.name}</div>
        <div>current email {newTeamMember.email}</div>
        <div>current role {newTeamMember.role}</div>
    </div>
    )

}

export default Form;