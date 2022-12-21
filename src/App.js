import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

import AdminNissan from "./components/AdminNissan/index";
import AdminInfiniti from "./components/AdminInfiniti/index";
import AdminChooseCompany from "./components/AdminChooseCompany/Home";

import UserNissan from './components/UserNissan';
import UserInfiniti from './components/UserInfiniti';
import UserChooseCompany from './components/UserChooseCompany';

import TimeSlot from './components/TimeSlot';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Registration/>} />
          <Route path="/AdminNissan" element={<AdminNissan/>} />
          <Route path="/AdminInfiniti" element={<AdminInfiniti />} />
          <Route path="/AdminChooseCompany" element={<AdminChooseCompany/>} />

          <Route path="/UserNissan" element={<UserNissan />} />
          <Route path="/UserInfiniti" element={<UserInfiniti />} />
          <Route path="/UserChooseCompany" element={<UserChooseCompany />} />

          <Route path="/User/:id" element={<TimeSlot />} />
          {/* <Route path="/Success" element={<Success />} />
          <Route path="/user/:user_id" element={<UserPage />} /> 
          <Route path="*" element={<Errorpage />} /> */}
      </Routes>
    </>
  )
}
export default App
