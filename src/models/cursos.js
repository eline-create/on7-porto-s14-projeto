const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema({
    id: {type: Number},
    descricao:{type: String},
    datainclusao: {type: String},
    ativo: {type: Boolean},
    horario: {type: String},
    bootcamp: {type: Boolean},
    quantidadeAlunos: {type: Number},
    gratuito: {type: Boolean},
    cidade: {type: String}, 
    estado: {type: String}
},{
    versionKey: false
});

module.exports = mongoose.model("cursos", cursosSchema);