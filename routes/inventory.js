const express = require('express');
const router = express.Router();

const { getProductById, getProducts, updateProduct, createProduct, deleteProduct, patchProduct, newStock } = require('../../controllers/inventory');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);
router.post('/restock', newStock);

module.exports = router;