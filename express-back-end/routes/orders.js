const express = require('express');
const router = express.Router();

const orderHelper = require("../db_service/orderHandler");

module.exports = (db) => {
  router.get("/:orderId", 
  (req,res) => {
    const order_id = req.params.orderId;
    orderHelper.getOrderByOrderId
    (db,order_id)
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