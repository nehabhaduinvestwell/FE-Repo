import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import '../../media/css/home.css'

function Home() {
  const location= useLocation();
  const userName= location.state.props;
  
  const [display , setDisplay] = useState(false);
  
  useEffect(()=>{
      setDisplay(true);
      setTimeout(()=>{
       setDisplay(false);
      },1000)},[])
  

  return (
    <div>
        
        <h1>Hi {userName}!</h1>
        {display && <div id='homeToast'>Successfully Logged In!</div>}
    </div>
  )
}

export default Home