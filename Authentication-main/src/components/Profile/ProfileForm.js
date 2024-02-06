import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import { changePasswordURL } from "../../utils/firebaseConstants";
import UserContext from "../../utils/UserContext";

const ProfileForm = () => {
  const password = useRef(null);
  const userContext = useContext(UserContext);

  const onClickHandler = async (e) => {
    e.preventDefault();

    const word={
      idToken: userContext.tokenId,
        password: password.current.value,
        returnSecureToken: true,
    }

    console.log(word)
    const postNewPassword = await fetch(changePasswordURL, {
      method: "POST",
      body: JSON.stringify({
        idToken: userContext.tokenId,
        password: password.current.value,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(postNewPassword.ok){
      console.log("Password successfully changed")
    }
    
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={password} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button onClick={onClickHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
