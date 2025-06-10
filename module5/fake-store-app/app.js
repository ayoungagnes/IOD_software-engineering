const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/', express.static('public'));
app.use('/products', productRoutes);

module.exports = app;
