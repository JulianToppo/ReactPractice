import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import React from "react";
import { useSelector } from "react-redux";
import store from "./store/index";

function App() {
  const auth = useSelector((store) => store.auth);

  return (
    <React.Fragment>
      <Header />
      {auth.isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
