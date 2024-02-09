import React, {useEffect, useRef , useState } from "react";
import { getUserDataURL, updateProfileURL } from "../utils/firebase/constants";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const fullname= useRef(null)
  const photoURL = useRef(null)

  const onClickCompleteHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    if(showForm==true) {getUserData();}
  };

  const fillDataInForm= (data)=>{
    fullname.current.value=data.displayName
    photoURL.current.value= data.photoUrl
  }

  const getUserData= async()=>{
    const formObj= {
      idToken:localStorage.getItem("token"),
    }

    try {
      const post = await fetch(getUserDataURL, {
        method: "POST",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      const data = await post.json();
      if (post.ok) {
        console.log(" User data successfully fetched");
        console.log(data.users[0])

        fillDataInForm(data.users[0]);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error)
    }
  }



  const onUpdateFormSubmitHandler=async (e)=>{
    e.preventDefault()

    const formObj= {
      displayName:fullname.current.value,
      photoUrl:photoURL.current.value,
      idToken:localStorage.getItem("token"),
      returnSecureToken:true
    }

    try {
      const post = await fetch(updateProfileURL, {
        method: "POST",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      const data = await post.json();
      if (post.ok) {
        console.log(" User has successfully updated");
        console.log(data)

      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div>
      <div className="flex justify-between bg-slate-100 p-2 shadow-lg">
        <div>
          <p>Welcome to Expense Tracker!</p>
        </div>
        <div className="bg-red-200 rounded-lg p-1">
          <p className="inline">Your profile is incomplete </p>
          <p className="inline text-blue-500" onClick={onClickCompleteHandler}>
            Complete now!
          </p>
        </div>
      </div>

      {showForm && (
        <div className="w-full flex justify-around p-4 bg-red-200">
          <div className="w-1/4">
            <p>Empty</p>
          </div>

          <div className="w-3/4">
            <h1 className="font-medium text-2xl">Contact Details</h1>
            <form className="flex flex-col space-y-6" onSubmit={onUpdateFormSubmitHandler}>
              <div className="flex justify-around space-x-11 ">
                <div className="flex w-full ">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    ref={fullname}
                    id="fullname"
                    type="text"
                    className="border border-gray-400  w-full"
                  />
                </div>

                <div className="flex space-x-7 w-full ">
                  <label htmlFor="profileUrl">Profile Photo Url:</label>
                  <input
                  ref={photoURL}
                    id="profileUrl"
                    type="text"
                    className="border border-gray-400 w-full"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2  rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
