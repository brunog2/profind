const Profissional = require('../models/Profissional');

module.exports = {
    async index(req, res) {
        console.log("Listando profissonais...");
        const profissionais = await Profissional.find({}).then(resposta => {
            return res.json(resposta);
        });
    },

    async encontrar(req, res) {            
        const {email} = req.body;
        const {senha} = req.body;        
        const validacaoProfissional = await Profissional.find({senha: senha, email: email});
        if (validacaoProfissional != 0){ 
            return res.json({auth:"true"});
        }
        return res.json({auth:"false"});
    },

    async store(req, res) {
        const profissionalJaCadastrado = await Profissional.find({email: req.body.email});
        if (profissionalJaCadastrado.length != 0){
            console.log("Email já cadastrado!");
            return res.json({message: "Email já cadastrado!"})
        };

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