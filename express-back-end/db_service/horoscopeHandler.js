const { getJsonData } = require('./dataController') 

const getAllHoroscope = function(db) {
  // let quertString = `SELECT * FROM astrologies`;
  const astrologiesPath = '../json/astrologies.json';
  return Promise.resolve(getJsonData(astrologiesPath));
    //db;
    // .query(quertString)
    // .then(res => res.row[0])
    // .catch(console.error("error running in get all horoscope!!!!"))
};

module.exports = {
  getAllHoroscope
}