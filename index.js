const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")

// Importar rutas
const userRoutes = require('./routes/user.routes');
const bookingRoutes = require('./routes/booking.routes');
const movieRoutes = require('./routes/movie.routes');
const serieRoutes = require('./routes/serie.routes');

dotenv.config(); // Cargar variables de entorno desde .env
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// // Configurar CORS
// const corsOptions = {
//     origin: 'https://cinestream-chi.vercel.app', // Permitir solo este dominio
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
//     credentials: true, // Permitir credenciales (cookies, etc.)
//   };
  
//   app.use(cors(corsOptions));


  // Configurar CORS manualmente
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cinestream-chi.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Si necesitas especificar métodos
    next();
  });


// Conexión a MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB', err));

// Definir rutas
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/series', serieRoutes);

// // Definir el puerto y poner en marcha el servidor
// const PORT = process.env.PORT || 4040;

app.get("/", (req,res)=>{
    res.send("Express en Vercel")
})

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app