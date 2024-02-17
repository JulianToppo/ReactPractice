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
          {cartStore.items.map((item,index) => (
            <CartItem
              key={item.index}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.quantity * item.price,
                description:item.description,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
