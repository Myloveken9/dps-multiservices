const mongoose = require('mongoose');

const testemunhoSchema = new mongoose.Schema({
  nome: String,
  mensagem: String,
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Testemunho', testemunhoSchema);
