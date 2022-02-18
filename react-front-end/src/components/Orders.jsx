import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


function Orders(props) {
  const params = useParams();
  const [item, setItem] = useState({});
  const {onAdd} = props;
  // console.log(params.id);


  return (
    <div className="orders">
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
            <h1 class="font-weight-light">Orders</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;