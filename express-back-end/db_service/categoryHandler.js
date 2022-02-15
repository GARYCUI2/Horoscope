const { getJsonData } = require('./dataController') 

const getAllCategorier = function(db) {
  // let quertString = `SELECT * FROM astrologies`;
  const categoriesPath = '../json/categories.json';
  return Promise.resolve(getJsonData(categoriesPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

const deleteCategoryByid = function(db,deleteCategory) {
  // let quertString = `SELECT * FROM astrologies`;
  const categoriesPath = '../json/deleteCategories.json';
  return Promise.resolve(getJsonData(categoriesPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

const editCategoryByid = function(db,newCategory) {
  // let quertString = `SELECT * FROM astrologies`;
  const categoriesPath = '../json/editedCategories.json';
  return Promise.resolve(getJsonData(categoriesPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

module.exports = {
  getAllCategorier,
  editCategoryByid,
  deleteCategoryByid
}