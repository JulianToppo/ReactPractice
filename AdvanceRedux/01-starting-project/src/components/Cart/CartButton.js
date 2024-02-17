import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleShow } from '../../store/cart-slice';

const CartButton = (props) => {
  const cartStore = useSelector((store) => store.cart);
  const dispatch= useDispatch();

  const toggleCartVisibility= (e)=>{
    e.preventDefault();

    dispatch(toggleShow())
  }
  return (
    <button className={classes.button}>
      <span onClick={toggleCartVisibility}>My Cart</span>
      <span className={classes.badge}>{cartStore.totalItems}</span>
    </button>
  );
};

export default CartButton;
