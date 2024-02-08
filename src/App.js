import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './UICollections/login/index.jsx';
import SignUp from './UICollections/signUp/index.jsx';
import Home from './UICollections/home/index.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
