import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`);
    const item = await data.json();
    // console.log(item.data);
    setItem(item.data.item);
  }
  console.log(item.images);

  return (
    <div className="shop">
    <div className="container" >
      <div className="row align-items-center my-5">
         <React.Fragment key = {1}>
          <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.images}
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light" >
            {item.name}
            </h1>
          <p >
          Price:
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