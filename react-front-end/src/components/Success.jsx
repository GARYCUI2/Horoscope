import React from "react";

function Success(props) {


  return (
    <aside className="block col-7">
    <h1 className="text-danger">Congrats!</h1>
    <h2 className="text-info">Stripe has successfully processed your payment</h2>
  </aside>
  );
}

export default Success;