const { getJsonData } = require('./dataController') 

const getAllProducts = function(db) {
  // let quertString = `SELECT * FROM astrologies`;
  const productsPath = '../json/product.json';
  return Promise.resolve(getJsonData(productsPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

const getProductsBySign = function(db) {
  // let quertString = `SELECT * FROM astrologies`;
  const productsPath = '../json/recommend-product.json';
  return Promise.resolve(getJsonData(productsPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

const editProductsBySign = function(db) {
  // let quertString = `SELECT * FROM astrologies`;
  const productsPath = '../json/recommend-product.json';
  return Promise.resolve(getJsonData(productsPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

module.exports = {
  getAllProducts,
  getProductsBySign
}