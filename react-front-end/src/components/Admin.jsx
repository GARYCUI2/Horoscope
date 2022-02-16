import React from "react";

function Admin(props) {

  // const {cartItems, onAdd} = props;
  // console.log(cartItems);
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Admin</h1>
            {/* <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;