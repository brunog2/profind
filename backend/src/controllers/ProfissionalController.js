const Profissional = require('../models/Profissional');
const Usuario = require('../models/Usuario');

module.exports = {
    async index(req, res) {
        console.log("Listando profissonais...");
        const { user } = req.headers;
        const usuarioLogado = await Usuario.findById(user);

        const profissionais = await Profissional.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: usuarioLogado.avaliacoes_negativas } },

            ],
        });

        return res.json(profissionais);
    },

    async store(req, res) {

        const profissionalJaCadastrado = await Profissional.find({email: req.body.email});
        console.log(profissionalJaCadastrado)

        if (profissionalJaCadastrado.length != 0){
            console.log("Email já cadastrado!");
            return res.json({message: "Email já cadastrado!"})
        };

        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            url_foto: req.body.url_foto,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });

        const profissional = await Profissional.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            profissao: req.body.profissao,
            url_foto: req.body.url_foto,
            descricao: req.body.descricao,
            avaliacoes_negativas: req.body.avaliacoes_negativas,
            avaliacoes_positivas: req.body.avaliacoes_positivas,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });

        console.log("Novo profissional cadastrado com as seguintes informações: ", req.body);
        return res.json(profissional);
    }
};