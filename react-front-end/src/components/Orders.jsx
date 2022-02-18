import React, {useState} from "react";
import Orders_display from "./Orders_display"

function Orders() {
  const [orderId, setOrderId] = useState({});

  return (
    <aside className="block col-1">
    <div className="orders">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>
          <div className="col-lg-5">
            <form>
              <label>
                <input type="text" name="name" placeholder="Order Number"/>
              </label>
              <section className="order_display">
            <button onClick={(event) => {
                                          event.preventDefault();
                                          setOrderId(event.target.value);
            }}>Summit
          </button>
          </section>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    {orderId && Orders_display(orderId)}  
  </aside>
  );
}

export default Orders;