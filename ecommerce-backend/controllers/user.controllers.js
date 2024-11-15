const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


async function getUsers(req, res) {
    try {

        const users = await User.find();

        console.log(users);

        return res.status(200).send(users);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al obtener usuario")
    }
}


async function createUser(req, res) {

    if (!req.body.password) {
        return res.status(400).send({
            ok: false,
            message: "La contraseña es requerida"
        })
    }

    const user = new User(req.body);

    if(req.file) {
        user.image = req.file.filename;
    }

    bcrypt.hash(user.password, saltRounds, (error, hash) => {

        if (error) {
            return res.status(500).send({
                ok: false,
                message: "Error al crear usuario"
            })
        }

        user.password = hash;

        user.save().then((nuevoUser) => {

            console.log(nuevoUser);
            res.status(201).send(nuevoUser);

        }).catch(error => {
            console.log(error);

            res.send("el usuario no se pudo crear");
        })
    })
    
}


async function getUserById(req, res) {

    try {

        const { id } = req.params;

        if (req.user.role !== "admin" && id !== req.user._id) {
            return res.status(403).send({
                message: "No tienes permiso para actualizar este usuario"
            })
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({
                message: "El usuario no fue encontrado",
                ok: false
            })
        }

        user.password = undefined;

        return res.status(200).send({
            ok: true,
            message: "El usuario fue encontrado",
            user
        })

    } catch (error) {
        console.log(error);

        return res.status(500).send("Error al obtener usuario en la DB");
    }

}


async function deleteUser(req, res) {
    try {

        const { id } = req.params

        const deletedUser = await User.findByIdAndDelete(id)

        return res.status(200).send({
            ok: true,
            message: "El usuario fue borrado correctamente!",
            deletedUser

        })
    } catch (error) {
        console.log(error);

        return res.status(500).send({
            ok: false,
            message: "Error al borrar el usuario"
        });
    }
}


async function updateUser(req, res) {
    try {

        const { id } = req.params

        if (req.user.role !== "admin" && id !== req.user._id) {
            return res.status(403).send({
                message: "No tienes permiso para actualizar este usuario"
            })
        }

        if(req.file) {
            req.body.image = req.file.filename;
        }

        const user = await User.findByIdAndUpdate(id, req.body, { new: true })


        console.log(user);

        return res.status(200).send({
            ok: true,
            message: "Se actualizo el usuario correctamente",
            user
        })

    } catch (error) {
        console.log(error);

        return res.status(500).send({
            ok: false,
            message: "Error al actualizar el usuario"
        });
    }
}


async function login(req, res) {
    try {

        const { email, password } = req.body;
        console.log(email, password);

        if (!email || !password) {
            return res.status(400).send({
                message: "Email y contraseña son requeridos"
            })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).send({
                message: "Alguno de los dato son incorrecto"
            })
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).send({
                message: "Alguno de los dato son incorrecto"
            })
        }

        user.password = undefined;
        user.__v = undefined;

        const token = jwt.sign(user.toJSON(), SECRET, { expiresIn: '1h' });

        console.log(token);


        return res.status(200).send({
            ok: true,
            message: "Login exitoso",
            user,
            token
        })

    } catch (error) {
        console.log(error);

        return res.status(500).send({
            ok: false,
            message: "Error al autenticar usuario"
        });
    }
}




module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    login
}