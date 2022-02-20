import React from "react";
import { Link } from "react-router-dom";
import './shop.css'

function Shop(props) {
  const {items, onAdd} = props;
  if (!items) return null;
const array = Object.values(items);
  return (
    <div className = "products">
    <div className = "container">
        <h1 className = "lg-title">Shop</h1>

        <div className = "product-items">
            {array.map(item => (
                <React.Fragment key = {item.id}>

             <div className = "product">
                <div className = "product-content">
                    <div className = "product-img">
                        <img src={item.img_url} alt={item.name}></img>
                    </div>
                    <div className = "product-btns">
                        <button type = "button" className = "btn-cart" onClick={() => onAdd(item)}> add to cart
                            <span><i className = "fas fa-plus"></i></span>
                        </button>
                    </div>
                </div>

                <div className = "product-info">
                    <Link className = "product-name" to={`/shop/${item.id}`}>{item.name}</Link>
                    <p className = "product-price">${Number(item.price).toFixed(2)}</p>
                </div>

                <div className = "off-info">
                    <h2 className = "sm-title">Hot</h2>
                </div>
            </div>
        </React.Fragment>
        ))}

        </div>
    </div>
</div>

  );
}

export default Shop;