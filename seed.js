const mongoose = require('mongoose');
const User = require('./models/user.model');
const Movie = require('./models/movie.model');
const Booking = require('./models/booking.model');
const Serie = require('./models/serie.model')
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

  const users = [
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user1@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user2@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user3@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user4@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user5@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user6@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user7@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user8@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user9@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user10@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user11@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user12@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user13@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user14@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user15@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user16@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user17@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "user", email: "user18@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "PepinosPower", email: "pepino@gmail.com", password: "1", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "edward", email: "edward@gmail.com", password: "1", role: "admin" },
    { _id: new mongoose.Types.ObjectId(), name: "bea", email: "bea@gmail.com", password: "1", role: "admin" },
    { _id: new mongoose.Types.ObjectId(), name: "ivan", email: "ivan@gmail.com", password: "1", role: "admin" }
];

const movies = [
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
        year: 1994,
        thema: "Drama",
        synopsis: "Dos hombres encarcelados entablan una amistad a lo largo de varios años, encontrando consuelo y redención final a través de actos de decencia común.",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        valoration: 9.3,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Godfather",
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino, James Caan",
        year: 1972,
        thema: "Crimen, Drama",
        synopsis: "El envejecido patriarca de una dinastía criminal organiza la transferencia de su imperio clandestino a su hijo reacio.",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        valoration: 9.2,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
        pricePerDay: 3.49 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Dark Knight",
        director: "Christopher Nolan",
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
        year: 2008,
        thema: "Acción, Crimen, Drama",
        synopsis: "Cuando la amenaza conocida como el Joker emerge de su pasado misterioso, causa estragos y caos en la gente de Gotham.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        valoration: 9.0,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        pricePerDay: 3.99 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
        year: 1994,
        thema: "Crimen, Drama",
        synopsis: "La vida de dos sicarios, un boxeador, la esposa de un gánster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.",
        image: "https://es.web.img2.acsta.net/pictures/17/06/12/10/21/182251.jpg",
        valoration: 8.9,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=tGpTpVyI_OQ",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        actors: "Tom Hanks, Robin Wright, Gary Sinise",
        year: 1994,
        thema: "Drama, Romance",
        synopsis: "La presidencia de Kennedy y Johnson, los eventos de Vietnam, Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama con un CI bajo.",
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        valoration: 8.8,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Inception",
        director: "Christopher Nolan",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        year: 2010,
        thema: "Acción, Aventura, Ciencia Ficción",
        synopsis: "Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños compartidos es dado la tarea inversa de plantar una idea en la mente de un CEO.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/2b8bc4866e28f9b95c65965a2b33c8b14a8cebe8287b7399b536c672729ef018.jpg",
        valoration: 8.8,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        pricePerDay: 3.49
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Fight Club",
        director: "David Fincher",
        actors: "Brad Pitt, Edward Norton, Meat Loaf",
        year: 1999,
        thema: "Drama",
        synopsis: "Un oficinista insomne y un fabricante de jabón imprudente forman un club de pelea subterráneo que se convierte en algo mucho, mucho más.",
        image: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        valoration: 8.8,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=BdJKm16Co6M",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        year: 1999,
        thema: "Acción, Ciencia Ficción",
        synopsis: "Un hacker descubre la verdad inquietante sobre su realidad y su papel en la guerra contra sus controladores.",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        valoration: 8.7,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=OM0tSTEQCQA",
        pricePerDay: 3.49 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Interstellar",
        director: "Christopher Nolan",
        actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        year: 2014,
        thema: "Aventura, Drama, Ciencia Ficción",
        synopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
        image: "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg",
        valoration: 8.6,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        pricePerDay: 3.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Parasite",
        director: "Bong Joon Ho",
        actors: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo",
        year: 2019,
        thema: "Comedia, Drama, Suspense",
        synopsis: "Toda la familia Kim se interesa por los ricos y glamorosos Parks hasta que se ven atrapados en un incidente inesperado.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/bbed89d7822a68e883cb964d109c5b81e9dcc60fb0248c7b724467bebba45624.jpg",
        valoration: 8.6,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=9kLlmWPilSE",
        pricePerDay: 3.49
    },
    {
        _id: new mongoose.Types.ObjectId(), 
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
        year: 2001,
        thema: "Aventura, Drama, Fantasía",
        synopsis: "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg",
        valoration: 8.8,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        pricePerDay: 3.99
    },
    {
        _id: new mongoose.Types.ObjectId(), 
        title: "Schindler's List",
        director: "Steven Spielberg",
        actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
        year: 1993,
        thema: "Biografía, Drama, Historia",
        synopsis: "En la Polonia ocupada por los nazis durante la Segunda Guerra Mundial, Oskar Schindler gradualmente se preocupa por su fuerza de trabajo judía después de presenciar su persecución por los nazis.",
        image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        valoration: 9.0,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=mxphAlJID9U",
        pricePerDay: 3.49
    }
];

const series = [
    { _id: new mongoose.Types.ObjectId(), 
        title: "Breaking Bad",
        director: "Vince Gilligan",
        actors: "Bryan Cranston, Aaron Paul, Anna Gunn",
        year: 2008,
        thema: "Crimen, Drama, Suspense",
        synopsis: "Un profesor de química convertido en fabricante de metanfetaminas se asocia con un exalumno para asegurar el futuro financiero de su familia.",
        image: "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
        valoration: 9.5,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        pricePerDay: 2.99
    },
    { _id: new mongoose.Types.ObjectId(), 
        title: "Stranger Things",
        director: "Los Hermanos Duffer",
        actors: "Winona Ryder, David Harbour, Finn Wolfhard",
        year: 2016,
        thema: "Drama, Fantasía, Terror",
        synopsis: "Cuando un niño desaparece, una pequeña ciudad descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
        image: "https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg",
        valoration: 8.8,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=Wre1F5YyIlA",
        pricePerDay: 2.49
    },
    { _id: new mongoose.Types.ObjectId(), 
        title: "Game of Thrones",
        director: "David Benioff, D.B. Weiss",
        actors: "Emilia Clarke, Peter Dinklage, Kit Harington",
        year: 2011,
        thema: "Acción, Aventura, Drama",
        synopsis: "Nueve familias nobles luchan por el control de las tierras de Westeros, mientras un antiguo enemigo vuelve después de estar inactivo durante miles de años.",
        image: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        valoration: 9.3,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
        pricePerDay: 3.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Witcher",
        director: "Lauren Schmidt Hissrich",
        actors: "Henry Cavill, Anya Chalotra, Freya Allan",
        year: 2019,
        thema: "Acción, Aventura, Drama",
        synopsis: "Geralt de Rivia, un cazador de monstruos solitario, lucha por encontrar su lugar en un mundo donde las personas suelen ser más perversas que las bestias.",
        image: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg",
        valoration: 8.2,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=ETY44yszyNc",
        pricePerDay: 3.49
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Mandalorian",
        director: "Jon Favreau",
        actors: "Pedro Pascal, Gina Carano, Carl Weathers",
        year: 2019,
        thema: "Acción, Aventura, Fantasía",
        synopsis: "Un cazarrecompensas mandaloriano viaja a los confines de la galaxia, lejos de la autoridad de la Nueva República.",
        image: "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
        valoration: 8.7,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
        pricePerDay: 3.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Chernobyl",
        director: "Johan Renck",
        actors: "Jared Harris, Stellan Skarsgård, Emily Watson",
        year: 2019,
        thema: "Drama, Historia, Suspense",
        synopsis: "Una dramatización de la catástrofe nuclear de Chernóbil y los esfuerzos sin precedentes para contener el desastre.",
        image: "https://es.web.img3.acsta.net/pictures/19/04/29/08/21/1692162.jpg?coixp=45&coiyp=73",
        valoration: 9.4,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Dark",
        director: "Baran bo Odar, Jantje Friese",
        actors: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari",
        year: 2017,
        thema: "Crimen, Drama, Misterio",
        synopsis: "Una desaparición de niños desentraña los secretos de cuatro familias y una red de tiempo y espacio que abarca varias generaciones.",
        image: "https://es.web.img3.acsta.net/pictures/17/11/10/12/27/3064798.jpg",
        valoration: 8.8,
        ageRestriction: "16+",
        trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "The Crown",
        director: "Peter Morgan",
        actors: "Claire Foy, Olivia Colman, Imelda Staunton",
        year: 2016,
        thema: "Biografía, Drama, Historia",
        synopsis: "Sigue la vida de la Reina Isabel II y los eventos políticos y personales que han moldeado su reinado.",
        image: "https://es.web.img3.acsta.net/pictures/22/10/18/00/44/2538124.jpg",
        valoration: 8.6,
        ageRestriction: "13+",
        trailer: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
        pricePerDay: 2.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Westworld",
        director: "Jonathan Nolan, Lisa Joy",
        actors: "Evan Rachel Wood, Thandiwe Newton, Jeffrey Wright",
        year: 2016,
        thema: "Drama, Misterio, Ciencia Ficción",
        synopsis: "En un parque temático futurista, los visitantes interactúan con androides en escenarios del Viejo Oeste, pero las cosas empiezan a ir mal.",
        image: "https://es.web.img2.acsta.net/pictures/16/09/01/14/52/298580.jpg",
        valoration: 8.6,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=kEkZdgWu7mM",
        pricePerDay: 3.99
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Black Mirror",
        director: "Charlie Brooker",
        actors: "Bryce Dallas Howard, Alice Eve, Michael Kelly",
        year: 2011,
        thema: "Drama, Ciencia Ficción, Suspense",
        synopsis: "Una serie de antología que explora un futuro retorcido y de alta tecnología donde las mayores innovaciones de la humanidad y sus oscuros instintos chocan.",
        image: "https://es.web.img3.acsta.net/pictures/23/05/24/11/22/4785740.jpg",
        valoration: 8.8,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=zLZHdK6l55I",
        pricePerDay: 3.49
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Fleabag",
        director: "Phoebe Waller-Bridge",
        actors: "Phoebe Waller-Bridge, Sian Clifford, Olivia Colman",
        year: 2016,
        thema: "Comedia, Drama",
        synopsis: "Una mujer joven navega por la vida en Londres mientras trata de sobrellevar la tragedia y la lucha interna.",
        image: "https://cdn.kinocheck.com/i/cbdgmrl1f0.jpg",
        valoration: 8.7,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=L3iqdpYoZNU",
        pricePerDay: 2.49
    },
    {
        _id: new mongoose.Types.ObjectId(), 
        title: "The Boys",
        director: "Eric Kripke",
        actors: "Karl Urban, Jack Quaid, Antony Starr",
        year: 2019,
        thema: "Acción, Comedia, Crimen",
        synopsis: "Un grupo de vigilantes se propone acabar con superhéroes corruptos que abusan de sus superpoderes.",
        image: "https://es.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52",
        valoration: 8.7,
        ageRestriction: "18+",
        trailer: "https://www.youtube.com/watch?v=5SKP1_F7ReE",
        pricePerDay: 3.49
    }
];

const bookings = [
    
    { user: users[2]._id,
        type: "movie",
        movie: movies[1]._id,
        startDate: new Date('2025-07-05'),
        endDate: new Date('2025-07-12'),
        price: movies[1].pricePerDay * 7 
    },
    {
        user: users[3]._id,
        type: "serie",
        serie: series[5]._id,
        startDate: new Date('2025-01-08'),
        endDate: new Date('2025-01-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[4]._id,
        type: "serie",
        serie: series[10]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[5]._id,
        type: "movie",
        movie: movies[10]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[0]._id,
        type: "movie",
        movie: movies[11]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[1]._id,
        type: "movie",
        movie: movies[9]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[6]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[7]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[8]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[9]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[10]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[11]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[12]._id,
        type: "serie",
        serie: series[0]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[13]._id,
        type: "serie",
        serie: series[4]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[14]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[15]._id,
        type: "serie",
        serie: series[8]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[16]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[17]._id,
        type: "serie",
        serie: series[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[18]._id,
        type: "serie",
        movie: movies[7]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[19]._id,
        type: "serie",
        serie: series[4]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[20]._id,
        type: "serie",
        serie: series[3]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    },
    {
        user: users[21]._id,
        type: "serie",
        serie: series[5]._id,
        startDate: new Date('2025-02-08'),
        endDate: new Date('2025-02-10'),
        price: series[0].pricePerDay * 2
    }
];


const seedDB = async () => {
    await User.deleteMany({});
    await Serie.deleteMany({});
    await Movie.deleteMany({});
    await Booking.deleteMany({});
  
    for (const user of users) {
        const newUser = new User(user);
        await newUser.save();
    }

    for (const movie of movies) {
        const newMovie = new Movie(movie);
        await newMovie.save();
    }

    for (const serie of series) {
        const newSerie = new Serie(serie);
        await newSerie.save();
    }

    for (const booking of bookings) {
        const newBooking = new Booking(booking);
        await newBooking.save();
    }
};

seedDB().then(() => {
    console.log(`Seeds creadas correctamente!`)
    mongoose.connection.close();
});