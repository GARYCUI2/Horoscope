const express = require('express');
const router = express.Router();

const productsHelper = require("../db_service/productsHandler");

module.exports = (db) => {
  router.get("/", 
  (req,res) => {
    productsHelper.getAllProducts(db)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })
  })

  router.get("/:id", 
  (req,res) => {
    let sign = req.params.id;
    productsHelper.getProductsById(db)
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