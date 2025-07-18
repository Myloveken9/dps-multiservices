require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Pour pouvoir lire les JSON dans les requêtes

// Vérification que l'URI est bien chargée
console.log('🔍 URI MongoDB:', process.env.MONGO_URI);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connexion MongoDB réussie'))
.catch(err => console.error('❌ Erreur MongoDB:', err));

// Routes de test
app.get('/', (req, res) => {
  res.send('🎉 Serveur backend opérationnel !');
});

// Exemple de route pour les témoignages
const Testemunho = require('./models/Testemunho');

// GET - Obtenir tous les témoignages
app.get('/api/testemunhos', async (req, res) => {
  try {
    const lista = await Testemunho.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération' });
  }
});

// POST - Créer un nouveau témoignage
app.post('/api/testemunhos', async (req, res) => {
  try {
    const novo = new Testemunho(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création' });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
// Routes pour les témoignages
const testemunhosRouter = require('./routes/testemunhos');
app.use('/api/testemunhos', testemunhosRouter);