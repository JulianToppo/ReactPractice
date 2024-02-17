import { addCartItems, deleteCartItems } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import {useSelector,useDispatch} from 'react-redux'

const CartItem = (props) => {
  const { title, quantity, description,total, price } = props.item;
  console.log(props.item)
  const cart= useSelector((store)=>store.cart);
  const dispatch= useDispatch();

  const addProduct=(e)=>{
    e.preventDefault();
    dispatch(addCartItems({
      'title':title,
      'price':price,
      'description':description,
      'quantity':1,
    }))

  }

  const deleteProd=(e)=>{
    e.preventDefault();
    dispatch(deleteCartItems({
      'title':title
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteProd}>-</button>
          <button onClick={addProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
