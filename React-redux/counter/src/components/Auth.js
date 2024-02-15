import classes from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux'
import store from '../store/index';
import {authActions} from '../store/index'

const Auth = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch= useDispatch()
  const onLoginClickHandler =(e)=>{
    e.preventDefault();
    console.log("loginnnnnnn")
    console.log(auth.isAuthenticated)
    dispatch(authActions.login())
    console.log(auth.isAuthenticated)
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={onLoginClickHandler} >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
