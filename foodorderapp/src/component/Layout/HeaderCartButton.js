import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-contexts';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);

  console.log(cartCtx.items)
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    console.log("iterating through array")
    return curNumber+Number(item.count);
  },0);

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
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;