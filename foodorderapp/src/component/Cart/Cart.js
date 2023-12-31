import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-contexts';
import CartItems from './CartItems';

const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItems item={item}/>
      ))}
    </ul>
  );

  const onClickCloseHandler=()=>{
    props.toggleCartDisplayFunction();
  }

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClickCloseHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;