import React, {useState, useEffect} from "react";
import axios from 'axios';


function Orders_display(props) {
  const {orderId} = props;
  const [order, setOrder] = useState({});
  console.log(orderId);

  useEffect(() => {
    axios.get(`/api/orders/${orderId}`)
    .then((order) => {
      console.log(order);
      setOrder(order.data[0]);
    });
  },[orderId]);


//  console.log(order);
  if (!order) return null;


  return (
    <div className="orders">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h2 className="text-danger">Order Id:  {order.id}</h2>
            <p>
            Buyer:{order.buyer_name}
            </p>
            <p>
            Buyer's email: <nobr className="text-primary">{order.buyer_email}</nobr>
            </p>
            <p>
           Order status: <nobr className="text-danger">{order.status}</nobr>
            </p>
            <p>
           Buyer's mobile: <nobr className="text-primary">{order.mobile}</nobr>
            </p>
            <p>
           Created at: {order.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders_display;