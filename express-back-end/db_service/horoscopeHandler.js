const { getJsonData } = require('./dataController') 

const getAllHoroscope = function(db) {
  const quertString = `SELECT * FROM astrologies;`;
  //const astrologiesPath = '../json/astrologies.json';
  // return Promise.resolve(getJsonData(astrologiesPath));
  return db
    .query(quertString)
    .then(res => res.rows)
    .catch(err => console.error("error running in get all horoscope!!!!", err))
};

module.exports = {
  getAllHoroscope
}