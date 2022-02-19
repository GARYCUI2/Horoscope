import React, {useState} from "react";
import OrdersDisplay from "./OrdersDisplay"

function Orders() {
  const [orderId, setOrderId] = useState({});
  // console.log(orderId);

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target[0].value)
    setOrderId(event.target[0].value);
  }

  return (
    <aside className="block col-1">
    <div className="orders">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>
          <div className="col-lg-5">
            <form onSubmit={handleSubmit}>
              <label>
                <input type="text" name="name" placeholder="Order Number"/>
              </label>
              <section className="order_display">
            <button >Summit
          </button>
          </section>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    {<OrdersDisplay orderId={orderId}/>}  
  </aside>
  );
}

export default Orders;