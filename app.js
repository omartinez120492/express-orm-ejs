const express = require('express');
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()

const routes_products = require('./routes/products')
const routes_home = require('./routes/home/routes-home')
const sequelize = require('./db/conn_seque')
const methodOverride = require('method-override')

// const expressLayouts = require('express-ejs-layouts');
const app = express()

//! Configuraciones
app.set('puerto', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join( __dirname, 'views' )) 


//! Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// app.use(expressLayouts);
app.use(morgan('dev'))
app.use(methodOverride('_method'))


//? Define default method: GET
app.use('/', routes_home)
app.use('/products', routes_products)

//? Server up
app.listen( app.get('puerto'), async()=>{
    const ports = app.get('puerto')
    console.log(`Server: http://localhost:${app.get('puerto')}/products`)
    await sequelize.sync({force: false})
    .then(()=>{
        console.log("DB Online with Sequelize");
    })
    .catch((error)=>{
        console.log("Error Al conectarse ", error);
    })

})



