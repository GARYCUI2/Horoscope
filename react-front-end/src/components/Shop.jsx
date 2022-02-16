import React from "react";
import { Link } from "react-router-dom";
import './shop.css'

function Shop(props) {
  const {items, onAdd} = props;
  if (!items) return null;
const array = Object.values(items);
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
            <h2 className="font-weight-light" >
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </h2>
              <p >
              Price:${Number(item.price).toFixed(2)}
              </p>
              <p >
              Quantity:{item.quantity}
              </p>
            <section className="shop">
          <section className="add_to_cart">
            <button onClick={() => onAdd(item)}>Add To Cart</button>
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