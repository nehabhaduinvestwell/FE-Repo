import React, { useState } from 'react'
import SignUpForm from './signUpForm.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();
    const[name, setName] = useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const inputName= async(event)=>{
        setName(event.target.value);
    }

    const inputEmail= async(event)=>{
        setEmail(event.target.value);
    }

    const inputPassword= async(event)=>{
        setPassword(event.target.value);
    }
  
    const handleSubmit= async(event)=> {
      event.preventDefault();
      const data= {name, email, password};
      console.log(data);
      const response= await axios.post('http://localhost:8001/signup',data);
      console.log(response);

      if(response.data.success) {
        const element= document.getElementById("userCreated");
        element.innerText= 'User account created';
        element.style.display= 'block';
        setTimeout(() => {
          element.style.display='none';
        }, 1000);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      else if(response.data.message === 'User already exists!'){
        alert("User already exists!");
      }
      else if(response.data.message === 'Enter name, email or password.'){
        alert("Enter name, email or password.");
      }
      else if(response.data.message === 'Enter a valid mail address.'){
        alert("Enter a valid mail address.");
      }
      else if(response.data.message === 'Enter a valid userName.'){
        alert("User Name should not contain special characters except space.");
      }
      else if(response.data.message === 'Enter a valid password.'){
        alert("Password should be 6 characters long and must contain - atleast one uppercase alphabet, lowercase alphabet, number and no special characters except @.");
      }
      else if(response.data.message === 'Password should be 6 characters long.'){
        alert("Password should be 6 characters long.");
      }
      else {
        alert("Unable to signup, please try agian!");
      }

    };

  return (
    <div>
        <SignUpForm inputName={inputName} inputEmail={inputEmail} inputPassword={inputPassword} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default SignUp