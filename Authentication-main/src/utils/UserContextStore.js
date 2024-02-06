import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextStore = (props) => {
  const tokenLocalStorage= localStorage.getItem("token")
  const [idToken, setidToken] = useState(tokenLocalStorage);

  const addToken = (tokenId) => {
    setidToken(tokenId);
  };

  const deleteToken = () => {
    setidToken(null);
  };

  const store = {
    tokenId: idToken,
    setToken: addToken,
    deletetoken: deleteToken,
  };
  return <UserContext.Provider value={store}>
    {props.children}
  </UserContext.Provider>
};

export default UserContextStore;
