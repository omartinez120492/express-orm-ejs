const mysql = require('mysql')
require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'store',
    password:'',
    port:3307 
})

connection.connect( (error)=>{
    if(error){
        console.log(' Error al conectarse ', error);
        return null;
    }
    console.log('Conectado a la base de datos');       
    return connection;
} )

module.exports = connection// connection