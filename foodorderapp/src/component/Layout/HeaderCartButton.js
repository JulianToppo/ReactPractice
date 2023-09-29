import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const iconClickHandler=()=>{
    console.log("on screen toggle called");
    props.toggleCartDisplayFunction();
  }
  return (
    <button className={classes.button}>
      <span className={classes.icon} onClick={iconClickHandler}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;