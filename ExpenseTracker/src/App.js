import React from "react";

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import VerifyMail from "./components/VerifyMail";

function App() {
  return (
    <div className="h-screen w-screen">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/loginsuccess" element={<Home />} />
        <Route path="/verifymail" element={<VerifyMail/>} />
      </Routes>
    </div>
  );
}

export default App;
