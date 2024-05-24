const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('home', {
        msg: "Bienvenido a mi sitio",
     })
})


module.exports = router