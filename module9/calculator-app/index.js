const express = require("express");
const app = require("./app")
const port = 3005;
const calculatorRoutes = require('./routes/CalculatorRoutes');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

app.get('/', (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`This web server is listening on ${port}`);
});


app.use('/', express.static('public'));


