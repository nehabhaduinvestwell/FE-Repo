import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import icon from '../../media/images/listIcon.png'
import axios from 'axios';
import './../../media/css/navbar.css'
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false); 
    const navigate = useNavigate();

    const showMenu= () => {
        setShowNavbar(!showNavbar);    
    };

    const policy = async (event) => {
        event.preventDefault();
        const response = await axios.get('http://localhost:8001/api/getPolicy')
        console.log(response.data.policies);
        navigate('/policy', {state : {props : response.data.policies}})
    }

    const NavList = () => {
        return (
            <div className="navContainer">
                <ul className='navList'>
                    <li className='navItem'>Home</li>
                    <li className='navItem'>Profile Section</li>
                    <li className='navItem' onClick={policy}>Policy Docs</li>
                    <li className='navItem'>Attendance</li>
                    <li className='navItem'>Logout</li>
                </ul>
            </div>
        );
    };


    return (
        <>
            <img src= {icon} alt="Logo" className="image" onClick={showMenu} />
            {showNavbar && <NavList />}
        </>
    )
}

export default Navbar

// import React, { useState } from 'react'
// import './../../media/css/navbar.css';
// import { Link } from 'react-router-dom';
// const listIcon = require("../../media/images/listIcon.png");

// function Navbar() {
//     const [show , setshow] = useState(false);

//     return (
//         <div className='navContainer'>
//             <span className='image'><img className='listIcon' src = {listIcon} onClick={()=>setshow(!show)}/></span>

//             { show &&  <div className='navbar'>
//                 <div className='navItem'><Link to = "/home" className='navLink'>Home</Link></div>
//                 <div className='navItem'><Link to = "/profile" className='navLink'>Profile</Link></div>
//                 <div className='navItem'><Link to = "/policy" className='navLink'>Policy Docs</Link></div>
//                 <div className='navItem'><Link to = "/attendance" className='navLink'>Attendance</Link></div>
//             </div>}
//         </div>
//     )
// }

// export default Navbar