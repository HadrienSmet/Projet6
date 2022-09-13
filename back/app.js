const express = require('express');
<<<<<<< HEAD
const helmet = require('helmet');
const path = require('path');
const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user');
require('./dbConfig');





const app = express();

app.use(helmet());

=======
const mongoose = require('mongoose');
// const path = require('path');


mongoose.connect('mongodb+srv://Hadrien:k6Nuz8E9XhsCyLFg@cluster0.f4s1x9e.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

>>>>>>> eb8b285e9442e0fb0851f0dad263d19d059250e6
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
<<<<<<< HEAD
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
=======
>>>>>>> eb8b285e9442e0fb0851f0dad263d19d059250e6
    next();
  });

app.use(express.json());

<<<<<<< HEAD
app.use('/api', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

=======
>>>>>>> eb8b285e9442e0fb0851f0dad263d19d059250e6
module.exports = app;

// k6Nuz8E9XhsCyLFg