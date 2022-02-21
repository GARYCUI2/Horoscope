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

  // router.post("/", 
  // (req,res) => {
  //   const id = req.body.id;
  //   const category_name = req.body.category_name;
    
  //   const newCategory = {
  //     id,
  //     category_name
  //   };
  //   categoryHelper.editCategoryByid(db, newCategory)
  //   .then(dbRes => {
  //     res.send(dbRes);
  //   })
  //   .catch(err => {
  //     res.status(500)
  //       .json({error:err.message})
  //   })
  // })

  router.post("/", 
  (req,res) => {
    const category_name = req.body.category_name;
 
    categoryHelper.addCategory(db, category_name)
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