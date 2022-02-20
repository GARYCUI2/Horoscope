import React from "react";
import axios from 'axios';
import './cart.css'
import StripeCheckout from "react-stripe-checkout";
import {useNavigate, Link} from 'react-router-dom';
import 'dotenv/config' 

function Cart(props) {
  const navigate = useNavigate();
  const {cartItems, onAdd, onRemove, clearCart} = props;
  // console.log(cartItems);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const makePayment = token => {
    const body = {
      token,
      cartItems,
      totalPrice
    }

    return axios.post(`/api/payment`, body
    ).then(res=>{
      console.log('RESPONSE',res);
      
      const {status} = res;
      console.log('status',status);
      status === 200 && navigate('/success');
      console.log(cartItems);
      clearCart();
      
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <aside className="block col-8">
    {cartItems.length !== 0 && <h2>Cart Items</h2>}
    <div>
      {cartItems.length === 0 && <div className="text-danger d-flex justify-content-center" >Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row ">
          <div className="col-lg-2">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.img_url}
            alt={item.name}
          />
          </div>

          <Link className = "col-2" to={`/shop/${item.id}`}>{item.name}</Link>
          <div className="col-2">
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>{' '}
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>

          <div className="col-2 text-right">
            {item.qty} x ${Number(item.price).toFixed(2)}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2 text-middle">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">
              ${shippingPrice.toFixed(2)}
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-center">
              <StripeCheckout 
            stripeKey='pk_test_51KOlmmKJmeHNxH00PDndFuulzugzXpK7oc96KzYmCJKY5D6lLmLv2DL0QQB1jWqXM4o8vNKZwMxYGU7AmGEvQLtd004APTZ0W2'
            token={makePayment} 
            name=""
            amount={totalPrice * 100}
            shippingAddress
            billingAddress
            >
              <button type = "button" className = "btn-cart ">Checkout</button>
          </StripeCheckout>   
          </div>
        </>
      )}
    </div>
  </aside>
  );
}

export default Cart;