import React, { useContext } from "react";
import UserContext from "../utils/context/UserContext";

const VerifyMail = () => {
  const userCtx = useContext(UserContext);
  const verifyMailOnclickHanlder = async (e) => {
    e.preventDefault();
    userCtx.EmailVerification();
  };
  return (
    <div>
      <button className="p-2 bg-green-200" onClick={verifyMailOnclickHanlder}>
        Verify Mail
      </button>
    </div>
  );
};

export default VerifyMail;
