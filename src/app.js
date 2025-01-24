const express = require('express');
const bodyParser = require("body-parser");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(bodyParser.json());
app.use("./api/v1/payments", paymentRoutes);
module.exports = app;