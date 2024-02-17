import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const cartStore = useSelector((store) => store.cart);
  const [showCart, setshowCart] = useState(false);

  useEffect(() => {
    setshowCart(cartStore.show);
  }, [cartStore.show]);

  return (
    showCart && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
          />
        </ul>
      </Card>
    )
  );
};

export default Cart;
