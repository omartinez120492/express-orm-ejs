const express = require('express')
const router = express.Router()
const ModelUser = require('../../models/products')
const ProductsController = require('../../controllers/products')

router.get('/', ProductsController.getAll )
router.get('/:id', ProductsController.getById)
router.post('/', ProductsController.save)
router.put('/:id', ProductsController.update)
module.exports = router