import React from "react";
import UserFunctions from '../utils/storefunctions/UserFunctions';

const Header = () => {
  const { LogoutFunc } = UserFunctions();
  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    LogoutFunc();
  };

  return (
    <div className="flex justify-end p-4 rounded-lg bg-yellow-100">
      <button
        className="bg-orange-400 px-6 py-1 rounded-lg"
        onClick={onLogoutClickHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
