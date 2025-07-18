const express = require('express');
const router = express.Router();
const Testemunho = require('../models/Testemunho');

// GET : récupérer tous les témoignages
router.get('/', async (req, res) => {
  try {
    const dados = await Testemunho.find();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST : ajouter un nouveau témoignage
router.post('/', async (req, res) => {
  const novo = new Testemunho({
    nome: req.body.nome,
    mensagem: req.body.mensagem
  });

  try {
    const salvo = await novo.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
