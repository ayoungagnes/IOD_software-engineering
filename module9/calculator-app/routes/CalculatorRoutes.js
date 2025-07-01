const express = require('express');
const CalculatorRouter = express.Router();
const CalculatorController = require("../controllers/CalculatorController");

CalculatorRouter.get('/add', (req, res) => {
    CalculatorController.add(req, res);
});

CalculatorRouter.get('/subtract', (req, res) => {
    CalculatorController.subtract(req, res);
})

CalculatorRouter.get('/divide', (req, res) => {
    CalculatorController.division(req, res);
})

CalculatorRouter.get('/multiply', (req, res) => {
    CalculatorController.multiplication(req, res);
});

module.exports = CalculatorRouter;