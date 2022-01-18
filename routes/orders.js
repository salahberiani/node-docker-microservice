const express = require('express');

const router = express.Router();
const orders = [
  { id: 1, name: 'order1' },
  { id: 2, name: 'order2' },
  { id: 3, name: 'order3' },
  { id: 4, name: 'order4' },
  { id: 5, name: 'order5' },
];

/**
 * @swagger
 * tags:
 *    name: Orders
 *    description: The Orders managin api
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve a list of orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The order ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The order name.
 *                         example: order
 */
router.get('/', (req, res) => {
  res.json({ orders });
});

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Retrieve a single order.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the order to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single order.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The order ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The order name.
 *                       example: order
 */

router.get('/:id', (req, res) => {
  const order = orders.find((item) => item.id === Number(req.params.id));
  if (order) res.json({ order });
  else res.json({ message: 'Order not found' });
});

module.exports = router;
