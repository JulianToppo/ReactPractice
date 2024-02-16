import React from "react";

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import VerifyMail from "./components/VerifyMail";
import UserContext from "./utils/context/UserContext";
import ForgotPassword from "./components/ForgotPassword";
import { useSelector } from "react-redux";

function App() {
 const userReducer= useSelector((store)=>store.auth)
  return (
    <div className="h-screen w-screen">
      {/* <Header/> */}
      <Routes>
        {!userReducer.loginStatus && (
          <>
            {" "}
            <Route path="/" element={<SignUp />} />
            
          

          </>
        )}
        {userReducer.loginStatus && (
          <>
            <Route path="/loginsuccess" element={<Home />} />
            <Route path="/verifymail" element={<VerifyMail />} />
          </>
        )}
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
