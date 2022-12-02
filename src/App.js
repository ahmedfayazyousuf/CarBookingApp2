import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/Home/Home";
import AbuDhabi from "./components/AbuDhabi/index";
import Ajman from "./components/Ajman/index";
import Dubai from "./components/Dubai/index";
import Sharjah from "./components/Sharjah/index";
// import Success from "./components/Success/index";
// import UserPage from './components/UserPage/index';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AbuDhabi" element={<AbuDhabi/>} />
          <Route path="/Ajman" element={<Ajman />} />
          <Route path="/Dubai" element={<Dubai />} />
          <Route path="/Sharjah" element={<Sharjah />} />
          {/* <Route path="/Success" element={<Success />} />
          <Route path="/user/:user_id" element={<UserPage />} /> 
          <Route path="*" element={<Errorpage />} /> */}
      </Routes>
    </>
  )
}
export default App
