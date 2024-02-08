import React, { useState } from 'react'
import LoginForm from './loginForm'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  const navigate = useNavigate();
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const inputEmail= async(event)=>{
    setEmail(event.target.value);
  }

  const inputPassword= async(event)=>{
      setPassword(event.target.value);
  }

  const handleSubmit= async(event)=> {
    event.preventDefault();
    const data= {email, password};
    console.log(data);
    const response= await axios.post('http://localhost:8001/login',data);;
    console.log(response);

    if(response.data.success) {
      navigate("/home",{state : {props:response.data.loginServiceOutput[0].name}});
    }
    else if(response.data.message === 'Type correct password'){
      alert("Type correct password.");
    }
    else if(response.data.message === 'User not found'){
      alert("User not found");
    }
    else if(response.data.message === 'Enter email or password.'){
      alert("Enter email or password.");
    }
    else {
      alert("Unable to login, please try agian!");
    }

  }

  return (
    <div>
        <LoginForm inputEmail={inputEmail} inputPassword={inputPassword} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Login