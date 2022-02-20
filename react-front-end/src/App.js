import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Footer,
  Home,
  Admin,
  Shop,
  Orders,
  Cart,
  Product,
  Success,
} from "./components";

const App = () =>{

  const [items, setItems] = useState([]);


const [cartItems, setCartItems] = useState([]);

const clearCart = () =>{
  setCartItems(...cartItems, []);
}
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

const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
  
  useEffect(() => {
    axios.get(`/api/products`)
        .then((items) => {
          setItems(items.data);
        });
  },[]);

  
    return (
      <Router>
      <Navigation countCartItems={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop items={items} cartItems={cartItems} onAdd={onAdd} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} clearCart={clearCart} />} />
        <Route path="/shop/:id" element={<Product onAdd={onAdd}/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
    );
  }


export default App;
