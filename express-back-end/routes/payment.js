const { response } = require('express');
const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//send email function
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const paymentHelper = require("../db_service/paymentHandler");

module.exports = (db) => {
  router.post("/", 
  (req,res) => {
    const {token,cartItems,totalPrice} = req.body;

    let order_id = generateRandomString();
    
    stripe.customers.create({
      email: token.email,
      source: token.id
    }).then(customer => {stripe.charges.create({
      amount: totalPrice * 100,
      customer: customer.id,
      currency: 'cad',
      receipt_email: token.email
    }, {
      idempotencyKey: order_id
    })});

    postPaymentService(db, token, cartItems, totalPrice, order_id)
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



const postPaymentService = async (db, token, cartItems, totalPrice, order_id) => {
  const msg = {
    to: token.email,
    from: 'hailan6257@gmail.com', // Use the email address or domain you verified above
    subject: 'Shoping list in Luck Shop',
    text: `Thanks for you shopping, you paid ${totalPrice}. Use order Id ${order_id} to track your order!`
  };
  
  await paymentHelper.addorder(order_id, db, token, totalPrice);

  // update prodocts quantities in table products
  for (let index = 0; index < cartItems.length; index++) {
    let dbRes = await paymentHelper.minusQuantityInProduct(db, cartItems[index]);
    //console.log("update quantity for: ", dbRes);

    await paymentHelper.addOrderItem(db, cartItems[index],order_id);
  };

  await sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  
}