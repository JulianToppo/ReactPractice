import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/index";
import { authActions } from "../store/index";

const Header = () => {
  const auth = useSelector((store) => store.auth);
const dispatch = useDispatch();
  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth.isAuthenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutClickHandler}> Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
