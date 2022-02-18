const { getJsonData } = require('./dataController') 

const getAllCategorier = function(db) {
 const quertString = `SELECT * FROM category;`;
  const categoriesPath = '../json/categories.json';
  // return Promise.resolve(getJsonData(categoriesPath));
  return db
    .query(quertString)
    .then(res => res.rows)
    .catch(err => console.error("error running in get all category: ", err))
};

const deleteCategoryByid = function(db,deleteCategory) {
  const deleteValue = [deleteCategory]
  const quertString = `DELETE FROM category WHERE id = $1;`;
  //const categoriesPath = '../json/deleteCategories.json';
  //return Promise.resolve(getJsonData(categoriesPath));
  return db
    .query(quertString,deleteValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in get category by id: ", err))
};

const editCategoryByid = function(db,newCategory) {
  const newValue = [newCategory.category_name,newCategory.id]
  const quertString = `UPDATE category SET category_name = $1 WHERE category.id = $2 
  RETURNING *`;
  //const categoriesPath = '../json/editedCategories.json';
  //return Promise.resolve(getJsonData(categoriesPath));
  return db
    .query(quertString,newValue)
    .then(res => res.rows)
    .catch(err => console.error("error running in edit category!!!!", err))
};

module.exports = {
  getAllCategorier,
  editCategoryByid,
  deleteCategoryByid
}