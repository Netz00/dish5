require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mealRoutes = require('./routes/meals.js');
const menuRoutes = require('./routes/menus.js');
const userRoutes = require('./routes/user.js');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/meals', mealRoutes);
app.use('/menus', menuRoutes);

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
