const express = require('express');
const router = express.Router();
const axios = require('axios');

const horoscopeHelper = require("../db_service/horoscopeHandler");

module.exports = (db) => {
  router.get("/", 
  (req,res) => {
    horoscopeHelper.getAllHoroscope(db)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })
  })

  router.get("/:sign", 
  (req,res) => {
    const sign = req.params.sign;
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`

    axios.post(URL)
    .then(result => {
        res.send(result.data);
    })
    .catch(err => {
      res.status(500)
        .json({error:err.message})
    })
  })
  
  return router;
}