const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A'
  },
  documento:{
    tipo: {
      type: String,
      enum: ['individual', 'cooporation'],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endreco: {
    cidade: String,
    uf: String,
    cep: String,
    logradouro: String,
    numero: String,
    pais: String,
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  },  
});


module.exports = mongoose.model('Cliente', cliente)