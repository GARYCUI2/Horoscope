// load .env data into process.env
require("dotenv").config();

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const horoscopeRoutes = require("./routes/horoscope");
App.use("/api/horoscope", horoscopeRoutes(db));

const productRoutes = require("./routes/products");
App.use("/api/products", productRoutes(db));

const categoryRoutes = require("./routes/categories");
App.use("/api/categories", categoryRoutes(db));




// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

