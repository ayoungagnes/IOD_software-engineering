const Calculator = require('../libraries/Calculator');

let calculatorObj = new Calculator();

const add = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let result = calculatorObj.add(number1, number2);

    res.status(200);
    res.json({ result }); 
};

const subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let result = calculatorObj.subtract(number1, number2);

    res.status(200);
    res.json({ result });
};

const division = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let result = calculatorObj.divide(number1, number2);

    res.status(200);
    res.json({ result });
};

const multiplication = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let result = calculatorObj.multiply(number1, number2);

    res.status(200);
    res.json({ result});
};

module.exports = {add, subtract, division, multiplication};