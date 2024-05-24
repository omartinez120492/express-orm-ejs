const { DataTypes, Model } = require('sequelize')
const sequelize  = require('../db/conn_seque')

class ModelUser extends Model {};
ModelUser.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: DataTypes.STRING,
    telefono: DataTypes.INTEGER
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
})
module.exports = ModelUser
