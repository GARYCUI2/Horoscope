const express = require('express');
const router = express.Router();

const paymentHelper = require("../db_service/paymentHandler");

module.exports = (db) => {
  
  router.post("/", 
  (req,res) => {
    const {token,cartItems,total_price} = req.body;

    const generateRandomString = (length = 6) =>Math.random().toString(20).substr(2, length);

    cartItems[order_id] = idempontencyKey;

    const idempontencyKey = generateRandomString();
    paymentHelper.minusQuantityInProduct(db,cartItems)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })

    paymentHelper.addorder(db,token,total_price)
        .then(dbRes => {
          res.send(dbRes);
        })
        .catch(err => {
          res.status(500)
            .json({error:err.message})
        })


    paymentHelper.addOrderItem(db,cartItems)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })

    
  })
  return router;
}