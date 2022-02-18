const minusQuantityInProduct = function(db,newProductInfo) {
  const id = newProductInfo.id
  const newQuantity = Number(newProductInfo.quantity) - Number(newProductInfo.qty);
  const newValue = [id, newQuantity]
  const quertString = `UPDATE products SET quantity = $2 WHERE products.id = $1 
  RETURNING *`;

  return db
    .query(quertString, newValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in minus quantity In product: ", err))
};

const addorder = function(db,token,total_price) {
  const buyer_name = token.card.name;
  const buyer_email = token.email;
  const credit_card_number = token.buyer_email;
  const mobile = token.id;
  
  const created_at = token.created;
  const newValue = [buyer_name, buyer_email, credit_card_number, mobile, created_at, total_price];
  
  const quertString = `INSERT INTO orders (buyer_name, buyer_email, credit_card_number, mobile, created_at, total_price)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  return db
    .query(quertString,newValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in add order information!!!!",err))
};

const addOrderItem = function(db,newOrderItem) {
  const order_id = newOrderItem.order_id;
  const product_id = newOrderItem.id;
  const quantity = newOrderItem.qty;
  const newValue = [order_id, product_id, quantity]
  const quertString = `INSERT INTO order_items (order_id, product_id, quantity)
  VALUES ($1, $2, $3) RETURNING *`;

  return db
    .query(quertString,newValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in add order item!!!!", err))
};

module.exports = {
  minusQuantityInProduct,
  addOrderItem,
  addorder
}