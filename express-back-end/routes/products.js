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
    const id = req.params.id;
    productsHelper.getProductsById(db,id)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })
  })

  router.delete("/", 
  (req,res) => {
    let id = req.body.id;
    productsHelper.deleteProductsById(db,id)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })
  })

  router.post("/", 
  (req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const description= req.body.description; 
    const category = req.body.category;
    const price = req.body.price;
    const img_url = req.body.img_url; 
    const quantity = req.body.quantity;

    const newProduct = {
      id,
      name,
      description,
      category,
      price,
      img_url,
      quantity
    }
    productsHelper.editProductsById(db,newProduct)
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