import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import './../../media/css/home.css'
import Navbar from './../navbar/index.jsx'
import axios from 'axios';


function Home() {
  const navigate = useNavigate();
  const location= useLocation();
  console.log("location= ", location);
  console.log("location state=", location.state);
  const userName= location.state.props;
  console.log("checkingusername",userName);
  
  const [display , setDisplay] = useState(false);
  
  useEffect(()=>{
      setDisplay(true);
      setTimeout(()=>{
       setDisplay(false);
      },1000)},[]);
  
  const getData= async()=>{
    console.log("inside getdata()");
    const res= await axios.get('http://localhost:8001/api/profile' ,{withCredentials: true });
    console.log("after getting response");
    const {userID, name, email}= res.data.authData;  
    console.log(userID,name,email);

    if(res.data.message === "session expired"){
      document.getElementById('displayData').innerText = `${res.data.message}`;
      navigate("/");
    }else{
      document.getElementById('displayData').innerText = `userID: ${userID}, name: ${name}, email: ${email}`;
    }
  };

  const logout= async()=>{

  }

  return (
    <div>
        <Navbar />
        <div className='homeContainer'>
          <h1 className='Greet'>Hi {userName}!</h1>
          {/* <button className='logOutButton' onClick={() => logout()}>Logout</button> */}
          <button className='getDataButton' onClick={() => getData()}>Get user data.</button><br></br>
          <div id='displayData'></div>
        </div>
        {display && <div id='homeToast'>Successfully Logged In!</div>}
        
    </div>
  )
}

export default Home