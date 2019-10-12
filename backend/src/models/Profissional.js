const { Schema, model } = require('mongoose');

const ProfissionalSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
    },
    senha: {
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: true
    },
    url_foto: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    avaliacoes_positivas: {
        type: Number,
        required: true
    },
    avaliacoes_negativas: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Profissional', ProfissionalSchema);

