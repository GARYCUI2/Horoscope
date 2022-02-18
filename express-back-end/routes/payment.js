const { response } = require('express');
const express = require('express');
const router = express.Router();

const paymentHelper = require("../db_service/paymentHandler");

module.exports = (db) => {
  router.post("/", 
  (req,res) => {
    const {token,cartItems,totalPrice} = req.body;

    postPaymentService(db, token, cartItems, totalPrice)
    .then(response => {
      res.send("success");
    })
    .catch(err => {
      console.log(err);
      res.status(500)
        .json({error:err.message})
    })
  })

  return router;
}

const generateRandomString = (length = 6) =>Math.random().toString(20).substr(2, length);

const postPaymentService = async (db, token, cartItems, totalPrice) => {
  // update prodocts quantities in table products
  for (let index = 0; index < cartItems.length; index++) {
    let dbRes = await paymentHelper.minusQuantityInProduct(db, cartItems[index]);
    //console.log("update quantity for: ", dbRes);

    let order_id = generateRandomString();

    await paymentHelper.addorder(order_id, db, token, totalPrice);
    await paymentHelper.addOrderItem(db, cartItems[index],order_id)
  };
}