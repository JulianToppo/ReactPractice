import React, { useEffect, useState } from "react";
import Orders from "./Orders";

export default function Tables(props) {
  const [table1Orders, setTableOneOrders] = useState([]);
  const [table2Orders, setTableTwoOrders] = useState([]);
  const [table3Orders, setTableThreeOrders] = useState([]);

  console.log(props.orders)
  useEffect(() => {
    for (let i = 0; i <props.orders.length; i++) {
      console.log("check",props.orders[i].table)
      switch (props.orders[i].table) {
        case "table1":
          setTableOneOrders((table1Orders) => {
            return [...table1Orders, props.orders[i]];
          });
          break;
        case "table2":
          setTableTwoOrders((table2Orders) => {
            return [...table2Orders, props.orders[i]];
          });
          break;
        case "table3":
          setTableThreeOrders((table3Orders) => {
            return [...table3Orders, props.orders[i]];
          });
          break;
        default:
          break;
      }
    }

    return () => {
      setTableOneOrders([]);
      setTableTwoOrders([]);
      setTableThreeOrders([]);
    };
  }, [props.orders]);

  return (
    <div>
      <h1>Orders</h1>
      <h1>Table 1</h1>
      <ul>
        <Orders val={table1Orders} />
      </ul>
      <h1>Table 2</h1>
      <ul>
        <Orders val={table2Orders} />
      </ul>
      <h1>Table 3</h1>
      <ul>
        <Orders val={table3Orders} />
      </ul>
    </div>
  );
}
