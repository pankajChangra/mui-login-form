import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/login';
import {SignUp} from './components/signUp';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;