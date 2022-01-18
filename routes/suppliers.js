const express = require('express');

const router = express.Router();

const suppliers = [
  { id: 1, name: 'suppliers1' },
  { id: 2, name: 'suppliers2' },
  { id: 3, name: 'suppliers3' },
  { id: 4, name: 'suppliers4' },
  { id: 5, name: 'suppliers5' },
];

/**
 * @swagger
 * tags:
 *    name: Suppliers
 *    description: The Suppliers managin api
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Retrieve a list of suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 suppliers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The supplier ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The supplier name.
 *                         example: supplier
 */

router.get('/', (req, res) => {
  res.json({ suppliers });
});

/**
 * @swagger
 * /suppliers/{id}:
 *   get:
 *     summary: Retrieve a single supplier.
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the supplier to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single supplier.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 supplier:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The supplier ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The supplier name.
 *                       example: supplier
 */
router.get('/:id', (req, res) => {
  const supplier = suppliers.find((item) => item.id === Number(req.params.id));
  res.json({ supplier });
});

module.exports = router;
