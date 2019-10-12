const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
    },
    endereco: {
        type: String,
    },
    url_foto: {
        type: String,
    },
    avaliacoes_positivas: [{
        type: Schema.Types.ObjectId,
        ref: 'Profissional'
    }],
    avaliacoes_negativas: [{
        type: Schema.Types.ObjectId,
        ref: 'Profissional'
    }]

}, {
    timestamps: true
})

module.exports = model('Usuario', UsuarioSchema);