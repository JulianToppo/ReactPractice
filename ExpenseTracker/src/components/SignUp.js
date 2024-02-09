import React, { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"
import { firebaseLoginURL, firebaseSignupURL } from "../utils/firebase/constants";

const SignUp = () => {
  const [isLogin, setisLogin] = useState(false)
  const email = useRef();
  const password = useRef();
  
  const navigate= useNavigate();

  const signupfunc =async (email, password) => {
    try {
      
        const formObj = {
          email: email,
          password: password,
          returnSecureToken: true,
        };
       if(!isLogin) {
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
      }else{
        const post = await fetch(firebaseLoginURL, {
          method: "POST",
          body: JSON.stringify(formObj),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        console.log(post)
        const data = await post.json();
        if (post.ok) {
          console.log(" User has successfully logged in.");
          console.log(data)
          localStorage.setItem("token",data.idToken)
          navigate('/verifymail')
        } else {
          console.log("data",data.error.message)
          throw new Error(data.error.message);
        }
      }

    } catch (error) {
   
      alert(error)
    }
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    signupfunc(email.current.value, password.current.value);
  };
  return (
    <div className="flex justify-center items-center mt-3 h-3/4 w-1/2 mx-auto  bg-slate-300 rounded-lg">
      <form
        className="flex w-full flex-col p-5 space-y-4"
        onSubmit={onSubmitHandler}
      >
        <div>
          <h1 className="text-3xl">{isLogin?"Login":"SignUp"}</h1>
        </div>
        <div>
          <label>Email</label>
          <input
            className="p-2 w-full  rounded-md"
            ref={email}
            type="email"
            placeholder="Enter Email"
            required
          ></input>
        </div>

        <div>
          <label>Password</label>
          <input
            className="p-2 w-full  rounded-md"
            ref={password}
            type="password"
            placeholder="Enter Password"
            required
          ></input>
          <br></br>
        </div>
        <button className="p-2 self-center bg-blue-500 w-3/5 rounded-lg" type="submit">
        {isLogin?"Login":"SignUp"}
        </button>
        <div className="w-full border-zinc-950 bg-blue-300 bg-opacity-30  rounded-md p-4">
          <p className="self-center"  onClick={()=>{setisLogin(!isLogin)}}>{isLogin?"Don't Have an account? Signup":"Have an account? Login"}</p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
