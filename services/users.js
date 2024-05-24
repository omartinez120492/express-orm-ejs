const mysql = require('mysql')
const connection = require('../db')

const user_service = { }
// Methodo: [GET]
user_service.getAll = (req, res)=>{
    connection.query("SELECT * FROM users", (error, results, fields)=>{
        if(error){
            return res.json({
                estatus:"Ocurrio un error al obtener los datos",
                error,
                data: null
            })
        }
        return res.json({
            estatus:"Datos hallados",
            error: null,
            data: results
        })
    })    
}
// Methodo: [GET by ID]
user_service.getByID = (req, res)=>{
    const { id } = req.params
    connection.query('SELECT * FROM  users WHERE id = ? ',[id], (error, results, fields)=>{
        if(error){
            return res.json({
                estatus:"Ocurrio un error al obtener los datos",
                error,
                data: null
            })
        }
        if(results.length == 0){
            return res.json({
                estatus: 'No hay datos',
                error: 'ID No Encotrado',
                data: results
            })
        }
        return res.json({
            estatus:"Datos hallados",
            error: null,
            data: results
        })
    })
}

// Methodo: [POST] Agregar
user_service.add = (req, res)=>{
    const { username, password, nombre, apellidos, telefono } = req.body

    const qry = `insert into users(username, password, nombre, apellidos, telefono)values('${username}','${password}', '${nombre}', '${apellidos}', ${telefono})`

    connection.query(qry, (error, results, fields)=>{
        if(error){
            return res.json({
                estatus: 'Error al insertar',
                error,
                data: null
            })
        }
        const {affectedRows} = results;
        return res.json({
            estatus:"Registro insertado exitosamente",
            error: null,
            data:`Registros insertados: ${affectedRows}`,
        })
    })
}
// Methodo: [DELETE] Eliminar
user_service.delete = (req, res)=>{
    const {id} = req.params
    const qry = `DELETE FROM users WHERE id = ${id}`
    connection.query(qry, (error, results, fields)=>{
        if(error){
            return res.json({
                estatus: 'Error al eliminar',
                error,
                data: null
            })
        }
        const { affectedRows } = results
        if(affectedRows != 0){
            return res.json({
                estatus: "Eliminado exitosamente",
                error: null,
                data: results
            })
        }
        return res.json({
            estatus: "Id Incorrecto",
            error: "Id no encotrado",
            data: results
        })
    } )
}
// Methodo: [PUT] Actualizar
user_service.put = (req, res)=>{
    const { id } = req.params
    const { username, password, nombre, apellidos, telefono } = req.body
    const qry = `UPDATE users SET username='${username}', password = '${password}', 
    nombre='${nombre}', apellidos='${apellidos}', telefono = ${telefono} WHERE id = ${id}`
    connection.query(qry, (error, results, fields)=>{
        return res.json({
            estado: "Ejecutado",
            error,
            data: results
        })
    })
}

module.exports = user_service