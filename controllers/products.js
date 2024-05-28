const ModelUser = require('../models/products')
const ProductsController = {}

ProductsController.getAll = async (req, res) => {
    try {
        const data = await ModelUser.findAll()
        return res.render('products/index', {
            msg: "Todos los productos",
            title: 'Productos',
            users: data,
            error: null
        })
    } catch (error) {
        res.json({
            msg: "Error en getAll controller",
            data: null,
            error
        })
    }
}

ProductsController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await ModelUser.findAll({
            where: {
                id
            }
        })
        if (user.length > 0) {
            return res.json({
                msg: "Dato encontrado",
                data: user,
                error: null
            })
        }
        return res.json({
            msg: "ID Incorrecto",
            data: null,
            error: "Id no encontrado"
        })
    } catch (error) {
        return res.json({
            msg: "Error con el id",
            data: null,
            error
        })
    }
}

ProductsController.save = async (req, res) => {
    const user = req.body
    try {
        const instanciaUser = await ModelUser.create(user)
        const resp = (await instanciaUser).save()
        return res.json({
            msg: "Item Guardado",
            data: resp,
            error: null
        })
    } catch (error) {
        const { errors } = error
        const er = errors.map((i) => `${i.path}: no puede ser nulo`)

        return res.json({
            msg: "Error al guardar el item",
            data: null,
            error: er
        })
    }
}

ProductsController.update = async (req, res) => {
    return res.json('Muy bien, funciona')
    /*
        const { id } = req.params
        const  userupddate = req.body
        try {
            const resp = await ModelUser.update(
                userupddate,
                {
                    where:{
                        id
                    }
                })
            if(resp[0] >= 1){
                return res.json({
                    msg:"Datos actualizados",
                    data: ` ${resp[0]} registros actualizados`,
                    error: null
                })
            }
            return res.json({
                msg:"Intenta actualizar un registro inexistente",
                data: null,
                error: "El ID no se encuentra"
            })
            
        } catch (error) {
            const {errors} = error
            const valError = errors.map( ( i )=>`the property ${i.path}  can´t be null ` )
            return res.json({
                msg: "we found errors",
                data: null,
                valError
            })
        }
    */
}

ProductsController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const resp = await ModelUser.destroy({
            where: {
                id
            },
        });
        return res.redirect('/products')
    } catch (error) {
        res.json({
            msg: "Error al eliminar",
            data: null,
            error
        })
    }
}


module.exports = ProductsController
