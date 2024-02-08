import React, { useRef } from "react";

import "./css/signup.css";
import { firebaseSignupURL } from "../utils/firebase/constants";

const SignUp = () => {
  const email = useRef();
  const password = useRef();

  const singupfunc = (email, password) => {
    try {
      const postData = async () => {
        const formObj = {
          email: email,
          password: password,
          returnSecureToken: true,
        };
        const post = await fetch(firebaseSignupURL, {
          method: "POST",
          body: JSON.stringify(formObj),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await post.json();
        if (post.ok) {
          console.log(" User has successfully signed up.");
        } else {
          throw new Error(data.error.message);
        }
      };

      postData();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    singupfunc(email.current.value, password.current.value);
  };
  return (
    <div className="flex-center">
      <form className="signupform" onSubmit={onSubmitHandler}>
        <div>
          <h1 className="flex-center">SignUp</h1>
        </div>
        <label>Email</label>
        <input ref={email} type="email" placeholder="Enter Email" required></input>

        <label>Password</label>
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          required
        ></input>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
