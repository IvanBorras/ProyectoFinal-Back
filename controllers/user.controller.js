const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Booking = require('../models/booking.model');
const bcrypt = require('bcrypt');
// Configurar JWT
const JWT_SECRET = 'tu_super_secreto'; // Este debe estar en una variable de entorno
const JWT_EXPIRES_IN = '90d';

const userController = {
    // Registro de usuario
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Verificar si el usuario ya existe
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'Usuario ya existe' }); // Retornar un error 409 si el usuario ya existe
            }

            // Crear un nuevo usuario
            const newUser = new User({
                name,
                email,
                password,
                role: 'user'
            });

            await newUser.save();
            res.status(201).send({ message: 'Usuario registrado con éxito', userId: newUser._id });
        } catch (error) {
            res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
        }
    },

    // Inicio de sesión
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
            res.status(200).json({ message: 'Login exitoso', token, id: user._id, role: user.role });
        } catch (error) {
            res.status(500).json({ message: 'Error en el login', error: error.message });
        }
    },

    // Actualizar perfil del usuario
    updateProfile: async (req, res) => {
        try {
            const { userId } = req.params;
            const { name, email } = req.body;
            const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.status(200).json({ message: 'Perfil actualizado con éxito', user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el perfil', error: error.message });
        }
    },
    // Actualizar rol del usuario
    updateUserRole: async (req, res) => {
        try {
            const { userId, role } = req.body;

            if (!['user', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Rol no válido' });
            }

            const updatedUser = await User.findByIdAndUpdate(userId, { role }, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.status(200).json({ message: 'Rol actualizado con éxito', user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el rol', error: error.message });
        }
    },

    // obtener todos los usuarios
    getUsers: async (req, res) =>{
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).son({ message: 'Error al obtener los usuarios', error: error.message });
        }
    },
     // Obtener la informacion personal del usuario
     getInfoByUser: async (req, res) => {
        try {
            const { id } = req.params
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la información del usuario', error: error.message });
        }
    },
    
    // eliminar un usuario por ID
    deleteUser: async(req, res) =>{
        try {
            const { userId } =req.params;
            console.log(userId);
            // Primero, eliminar todas las reservas del usuario
            const deleteBooking = await Booking.deleteMany({ user: userId });
            const deleteUser = await User.findByIdAndDelete(userId);
            console.log(deleteUser, deleteBooking);
            if (!deleteUser) {
                return res.status (404).json({message: 'Usuario no encontrado'});
            }
            if (!deleteBooking) {
                return res.status (404).json({message: 'Reservas no encontradas'});
            }
            res.status(200).json({message:'Usuario eliminado exitosamente'});
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
        }
    },

    // obtener los datos de un usuario. para la parte de area personar
    getUserById: async (req, res) =>{
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            res.status(200).json(user).json({message:'Usuario encontrado exitosamente'});
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
        }
    }
};

module.exports = userController;