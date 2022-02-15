const express = require('express');
const router = express.Router();
const axios = require('axios');

const categoryHelper = require("../db_service/categoryHandler");

module.exports = (db) => {
  router.get("/", 
  (req,res) => {
    categoryHelper.getAllCategorier(db)
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
    const newCategory = req.body.newCategory;
   
    categoryHelper.editCategoryByid(db, newCategory)
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
   
    const deleteCategory = req.body.deleteCategory;
    categoryHelper.deleteCategoryByid(db,deleteCategory)
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