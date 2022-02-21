import React, {useState} from "react";
import OrdersDisplay from "./OrdersDisplay"

function Orders() {
  const [orderId, setOrderId] = useState({});
  console.log(orderId);

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target[0].value)
    setOrderId(event.target[0].value);
  }

  return (
    <aside className="block col-7 ">
        <div className="row align-items-center my-5">
          
          <div className="col-lg-12 ">
            <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
          <h1 >Input your order number here:</h1>
          </div>
              <label className="d-flex justify-content-center">
                <input type="text" name="name" placeholder="Order Number"/>
              </label>
              <section className="order_display d-flex justify-content-center">
            <button className = "btn-cart " >Summit
          </button>
          </section>
            </form>
            
          </div>
        </div>
    {<OrdersDisplay orderId={orderId}/>}  
  </aside>
  );
}

export default Orders;