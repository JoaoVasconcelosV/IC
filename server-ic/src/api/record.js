const restful = require('node-restful');
const mongoose = restful.mongoose;

const recordSchema = new mongoose.Schema({
  registroAns: { type: Number, required: true },
  cnpj: { type: Number, required: true },
  razaoSocial: { type: String, required: true },
  nomeFantasia: { type: String, required: true },
  modalidade: { type: String, required: true },
  logradouro: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  uf: { type: String, required: true },
  cep: { type: Number, required: true },
  ddd: { type: Number, required: true },
  telefone: { type: Number, required: true },
  fax: { type: Number, required: true },
  enderecoEletronico: { type: String, required: true },
  representante: { type: String, required: true },
  cargoRepresentante: { type: String, required: true },
  dataRegistroAns: { type: Date, default: Date.now},
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Record', recordSchema);