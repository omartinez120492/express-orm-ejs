const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("store","root",'', {
    host:"localhost",
    dialect:'mysql',
    port: 3307 
})

const testConn = async()=>{
    try {
        await sequelize.authenticate()
        console.log("Conexion establecida")
    } catch (error) {
        console.log("Error de conexion")
        console.log(error)
    }
}

module.exports = sequelize
