import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleShow } from '../../store/cart-slice';

const CartButton = (props) => {
  
  const dispatch= useDispatch();

  const toggleCartVisibility= (e)=>{
    e.preventDefault();

    dispatch(toggleShow())
  }
  return (
    <button className={classes.button}>
      <span onClick={toggleCartVisibility}>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
