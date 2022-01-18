const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const port = process.env.PORT || 3000;
const orders = require('./routes/orders');
const suppliers = require('./routes/suppliers');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'simple express API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/orders', orders);
app.use('/suppliers', suppliers);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.listen(port, () => {
  console.info(`Server started on port ${port}`);
});
