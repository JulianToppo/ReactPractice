import React, { useRef } from "react";
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
    <div className="flex justify-center items-center mt-3 h-3/4 w-1/2 mx-auto  bg-slate-300 rounded-lg">
      <form
        className="flex w-full flex-col p-5 space-y-4"
        onSubmit={onSubmitHandler}
      >
        <div>
          <h1 className="text-3xl">SignUp</h1>
        </div>
        <div>
          <label>Email</label>
          <input
            className="p-2 w-full"
            ref={email}
            type="email"
            placeholder="Enter Email"
            required
          ></input>
        </div>

        <div>
          <label>Password</label>
          <input
            className="p-2 w-full"
            ref={password}
            type="password"
            placeholder="Enter Password"
            required
          ></input>
          <br></br>
        </div>
        <button className="p-2 self-center bg-blue-500 w-3/5 rounded-lg" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
