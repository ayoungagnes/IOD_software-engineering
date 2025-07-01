const express = require("express");
const CalculatorRouter = require("./routes/CalculatorRoutes")
const app = express();

app.use('/calculator', CalculatorRouter);

module.exports = app;