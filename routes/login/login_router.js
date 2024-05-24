const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Welcome to home page <h1> Products</h1> ")
})
router.post('/', (req, res)=>{
    res.send("Welcome to POST <h1> login</h1>")
})
module.exports = router