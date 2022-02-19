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
  },[]);
//  console.log(order);
  if (!order) return null;


  return (
    <div className="orders">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h2 className="font-weight-light">Order Id  {order.id}</h2>
            <p>
            {order.buyer_name}
            </p>
            <p>
            {order.buyer_email}
            </p>
            <p>
            {order.status}
            </p>
            <p>
            {order.mobile}
            </p>
            <p>
            {order.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders_display;