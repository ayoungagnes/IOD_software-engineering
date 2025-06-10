const Logger = require('./logger');

class Calculator{
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000);
    }

    add(num1, num2) {
        const result = num1 + num2
        Logger.log(this.id, result);
        return result;
    }

    subtract(num1, num2) {
         const result = num1 - num2
         Logger.log(this.id, result);
         return result;
    }

    divide(num1, num2) {
        const result = num1 / num2
        Logger.log(this.id, result);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2
        Logger.log(this.id, result);
        return result;
    }
}

module.exports = Calculator;   