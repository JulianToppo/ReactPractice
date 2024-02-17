import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { UseDispatch } from "react-redux";
import React from "react";
import Notification from "./components/UI/Notification";
import { showNotification } from "./store/ui-slice";
import { getCartData, sendCartData } from "./store/cart-slice";

let isInitial = true;
function App() {
  const cart = useSelector((store) => store.cart);
  const ui = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
       dispatch(sendCartData(cart));
    }

   
  }, [cart]);

  useEffect(() => {
    dispatch(getCartData());
  }, []);


  return (
    <React.Fragment>
      {ui.notification && (
        <Notification
          status={ui.notification.status}
          title={ui.notification.title}
          message={ui.notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
