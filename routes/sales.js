const express = require('express');
const { getSaleById,getSales,updateSale,deleteSale,patchSale,createSale } = require('../../controllers/sales');

const route = express.Router();

route.get('/', getSales);
route.post('/', createSale);
route.get('/:id', getSaleById);
route.get('/:id', updateSale);
route.get('/:id', patchSale);
route.get('/:id', deleteSale);

module.exports = route;