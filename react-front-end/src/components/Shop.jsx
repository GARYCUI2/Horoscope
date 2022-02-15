import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './shop.css'
import Button from './Button';
import { Cart } from ".";

function Shop(props) {

  const [items, setItems] = useState([]);


const [cartItems, setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find ( x => x.id === product.id );
  if (exist) {
    setCartItems(cartItems.map((x) =>
    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    ))
  }else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

  console.log(cartItems);
  

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
              alt={item.name}
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
            <section className="shop">
          <section className="add_to_cart">
            <Button confirm onClick={onAdd}>Add To Cart</Button>
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