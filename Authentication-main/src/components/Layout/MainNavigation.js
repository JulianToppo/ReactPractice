import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";


const MainNavigation = () => {
  const history= useHistory()
  const userContext = useContext(UserContext);
 
  const onLogoutClick =(e)=>{
    e.preventDefault();
    userContext.deletetoken(null)
    history.replace("/")
    
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          { !userContext.tokenId ?<li>
            <Link to="/auth">Login</Link>
          </li> 
        : (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={onLogoutClick}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
