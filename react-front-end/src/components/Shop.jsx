import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './shop.css'
import Button from './Button';

function Shop() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/products`)
        .then((items) => {
          setItems(items.data);
        });
  },[]);

  if (!items) return null;

const array = Object.values(items);
// console.log(items)
// console.log(array)
  return (
    <div className="shop">
    <div className="container" >
      <div className="row align-items-center my-5">
        {array.map(item => (
         <React.Fragment key = {item.id}>
          <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.img_url}
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h3 className="font-weight-light" >
            <Link to = {`/shop/${item.id}`}>{item.name}</Link>
            </h3>
          <p >
          Price:{item.price}
          </p>
          <p >
          Quantity:{item.quantity}
          </p>
          <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button confirm onClick={`validate`}>Add To Cart</Button>
        </section>
        </section>
        </div>
        </React.Fragment>
        ))}
        
      </div>
    </div>
    </div>
  );
}

export default Shop;