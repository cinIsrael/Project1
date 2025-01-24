const express = require("express");
const bodyParser = require("body-parser");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/payments", paymentRoutes);

module.exports = app;
