import React, { useContext } from "react";

import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import VerifyMail from "./components/VerifyMail";
import UserContext from "./utils/context/UserContext";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const userCtx = useContext(UserContext);
  return (
    <div className="h-screen w-screen">
      {/* <Header/> */}
      <Routes>
        {!userCtx.isLoggedIn && (
          <>
            {" "}
            <Route path="/" element={<SignUp />} />
            
            <Route path="/forgotpassword" element={<ForgotPassword />} />

          </>
        )}
        {userCtx.isLoggedIn && (
          <>
            <Route path="/loginsuccess" element={<Home />} />
            <Route path="/verifymail" element={<VerifyMail />} />
          </>
        )}
        <Route path="*" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
