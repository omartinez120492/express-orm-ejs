const express = require('express')
const router = express.Router()
const user_service = require('../../services/users')

router.get( '/', user_service.getAll)
router.post('/', user_service.add)
router.delete('/:id', user_service.delete)
router.put('/:id', user_service.put)
router.get('/:id', user_service.getByID)


module.exports = router