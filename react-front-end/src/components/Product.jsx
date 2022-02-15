import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from 'axios';

function Product() {
  const params = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    axios.get(`/api/products/${params.id}`)
    .then((item) => {
      console.log(item.data);
      setItem(item.data[`${params.id}`]);
    });
  },[]);

  if (!item) return null;
  console.log(item);

  return (
    <div className="shop">
    <div className="container" >
      <div className="row align-items-center my-5">
         <React.Fragment key = {item.id}>
          <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.img_url}
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light" >
            {item.name}
            </h1>
          <p >
          Price:{item.price}
          </p>
          <p >
          Quantity:{item.quantity}
          </p>
          <p >
          Description:{item.description}
          </p>
          <p onClick={()=>{'Click me'}}>
          Add To Cart
          </p>
        </div>
        </React.Fragment>
      </div>
    </div>
    </div>
  );
}

export default Product;