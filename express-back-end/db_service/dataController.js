//ONLY FOR TEST DUMMY DATA
const path = require('path');
const fs = require('fs');

const getJsonData = function (PathToData) {
  const basePathToData = path.join(__dirname, PathToData);
  return JSON.parse(fs.readFileSync(basePathToData, 'utf-8'));
};

module.exports = {
  getJsonData
}