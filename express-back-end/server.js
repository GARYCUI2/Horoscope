const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const horoscopeRoutes = require("./routes/horoscope");
App.use("/api/horoscope", horoscopeRoutes());

const productRoutes = require("./routes/products");
App.use("/api/products", productRoutes());

const categoryRoutes = require("./routes/categories");
App.use("/api/categories", categoryRoutes());




// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

