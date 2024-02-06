import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";
import { firebaseLoginURL, firebaseSignUpURL } from "../../utils/firebaseConstants";
import UserContext from "../../utils/UserContext";


const AuthForm = () => {

  const userContext = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const email = useRef();
  const password = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onClickHandler = async (e) => {
    try {
      e.preventDefault(); 
       setisLoading(true);
       const newUser = {
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: true,
      };

      if (isLogin) {
       
        const postData = await fetch(firebaseLoginURL, {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setisLoading(false)

        const data=await postData.json()
        console.log(data)
        if(postData.ok){
          console.log("User Logged In")
       
          userContext.setToken(data.idToken)
         
        }else{
          throw new Error("Authentication failed: "+ data.error.message)
        }


        console.log(postData)
      } else {
    

        const postData = await fetch(firebaseSignUpURL, {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setisLoading(false); 
        const data = await postData.json();

       
        if (postData.ok) {
          console.log("successfully added into firebase");
         
        }else{
          console.log(data)
          throw new Error(data.error.message)
        }

      }
    } catch (error) {
        
      alert(error.message);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={email} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={password} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button onClick={onClickHandler}>
            {isLogin ?  (isLoading ? "Sending Request...." : "Login") :( isLoading ? "Sending Request...." : "Signup")}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
