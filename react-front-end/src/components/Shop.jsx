import React from "react";
import './shop.css'
import Button from './Button';

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
            <h3 className="font-weight-light" >
              {item.name}
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