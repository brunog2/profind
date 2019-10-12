const Usuario = require('../models/Usuario');

module.exports = {
    async store(req, res){
        const usuarioJaCadastrado = await Usuario.find({email: req.body.email});

        if (usuarioJaCadastrado.length != 0){
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

        console.log("Novo usuário cadastrado com as seguintes informações: ", req.body);
        return res.json(usuario);
    }
};