const { getJsonData } = require('./dataController') 

const getOrderByOrderId = function(db, order_id) {
  const orderId = [order_id];
  const quertString = `SELECT * FROM order_items 
  FULL JOIN products ON products.id = order_items.product_id 
  FULL JOIN orders ON orders.id = order_items.order_id 
  WHERE order_items.order_id = $1
  `;
  //const astrologiesPath = '../json/astrologies.json';
  // return Promise.resolve(getJsonData(astrologiesPath));
  return db
    .query(quertString, orderId)
    .then(res => res.rows)
    .catch(err => console.error("error running in get order by order_id!!!!", err))
};

module.exports = {
  getOrderByOrderId
}