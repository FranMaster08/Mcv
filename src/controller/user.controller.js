const model = require('../model/user.model');

const getUsers = async (req, res, next) => {
    try {
        let id = req.query.id
        let usuarios;
        if (id)
            usuarios = await model.findAll({
                where: {
                    id: id
                }
            })
        else
            usuarios = await model.findAll()

        res.render('index.html', { data: usuarios })
    } catch (error) {
        res.status(400).json(error)
    }

}

const insertUser = async (req, res, next) => {
    try {
        let { firstName, lastName } = req.body
        let response = await model.create({ firstName, lastName })
        res.render('index.html')
    } catch (error) {
        res.status(400).json(error)
    }

}

const updateUser = async (req, res, next) => {
    try {
        let id = req.params.id
        let usuarios = [];
        let { firstName, lastName } = req.body
        if (id)
            usuarios = await model.update({ firstName, lastName }, {
                where: {
                    id: id
                }
            })

        if (usuarios.length > 0)
            res.status(200).json({ succes: true, mensaje: `se actualizo usuario con id:${id}` })
        else
            res.status(400).json({ succes: false, mensaje: `no se actualizo usuario con id:${id}` })

    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let id = req.params.id
        let usuarios = [];
        if (id)
            usuarios = await model.destroy({
                where: {
                    id: id
                }
            })

        if (usuarios > 0)
            res.status(200).json({ succes: true, mensaje: `se elimino usuario con id:${id}` })
        else
            res.status(400).json({ succes: false, mensaje: `no se elimino usuario con id:${id}` })

    } catch (error) {
        res.status(400).json({ mensaje: ` ocurrio un error ,${JSON.stringify(error)}` })
    }
}

module.exports = {
    getUsers,
    insertUser,
    updateUser,
    deleteUser
}