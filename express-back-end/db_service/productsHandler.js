const { getJsonData } = require('./dataController') 

const getAllProducts = function(db) {
  const quertString = `SELECT * FROM products;`;
  //const productsPath = '../json/product.json';
  //return Promise.resolve(getJsonData(productsPath));
  return db
    .query(quertString)
    .then(res => res.rows)
    .catch(err => console.error("error running in get all products: ", err))
};

const getProductsBySign = function(db,sign) {
  let signValue = [sign];
  // const quertString = `SELECT * FROM products WHERE id = $1`;
  const productsPath = '../json/recommend-product.json';
  return Promise.resolve(getJsonData(productsPath));
    //db;
    // .query(quertString,signValue)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get products by sign!!!!"))
};

// const editProductsBySign = function(db) {
//   // const quertString = `SELECT * FROM astrologies`;
//   const productsPath = '../json/recommend-product.json';
//   return Promise.resolve(getJsonData(productsPath));
//     //db;
//     // .query(quertString)
//     // .then(res => res.row[0])
//     // .catch(console.error("error running in edit product!!!!"))
// };

const getProductsById = function(db, id) {
  const idValue = [id];
  const quertString = `SELECT * FROM products WHERE id = $1;`;
  // const productsPath = '../json/productById.json';
  // return Promise.resolve(getJsonData(productsPath));
  return db
    .query(quertString, idValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in get all products by id: ", err))
};

const deleteProductsById = function(db,id) {
  const idValue = [id];
  const quertString = `DELETE FROM products WHERE id = $1;`;
  // const productsPath = '../json/recommend-product.json';
  // return Promise.resolve(getJsonData(productsPath));
  return db
    .query(quertString,idValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in delete products: ", err))
};

// const editProductsById = function(db, newProduct) {
//   const newValue = [
//     newProduct.name,
//     newProduct.description,
//     newProduct.category,
//     newProduct.price,
//     newProduct.img_url,
//     newProduct.quantity,
//     newProduct.id,
//   ];

//   const quertString = `UPDATE products SET name = $1, description = $2, category = $3, price = $4, img_url = $5, quantity = $6 WHERE id = $7 
//   RETURNING *`;
//   // const productsPath = '../json/recommend-product.json';
//   // return Promise.resolve(getJsonData(productsPath));
//   return db
//     .query(quertString,newValue)
//     .then(res => res.rows)
//     .catch(err => console.error("error running in edit product by id: ", err))
// };

const addProducts = function(db, newProduct) {
  const newValue = [
    newProduct.name,
    newProduct.description,
    newProduct.category_id,
    newProduct.price,
    newProduct.img_url,
    newProduct.quantity
  ];
console.log(newValue);
  const quertString = `INSERT INTO products (name, description, category_id, price, img_url, quantity) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
  return db
    .query(quertString,newValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in add product by id: ", err))
};

module.exports = {
  getAllProducts,
  getProductsBySign,
  getProductsById,
  // editProductsBySign,
  deleteProductsById,
  // editProductsById,
  addProducts
}