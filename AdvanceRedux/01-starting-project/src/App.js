import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { UseDispatch } from "react-redux";
import React from "react";
import Notification from "./components/UI/Notification";
import { showNotification } from "./store/ui-slice";

let isInitial = true;
function App() {
  const cart = useSelector((store) => store.cart);
  const ui = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: "pending",
          title: "Sending... ",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://expensetracker-1b48b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      const responseData = await response.json();
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if(isInitial){
      isInitial=false
      return
    }

    sendCartData().catch((err) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    });
  }, [cart]);
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
