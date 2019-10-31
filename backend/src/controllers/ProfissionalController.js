const Profissional = require('../models/Profissional');

module.exports = {
    async index(req, res) {
        console.log("Listando profissonais...");
        const profissionais = await Profissional.find({}).then(resposta => {
            return res.json(resposta);
        });
    },

    async autenticar(req, res) {            
        const {email} = req.body;
        const {senha} = req.body;        
        const validacaoProfissional = await Profissional.find({senha: senha, email: email});
        if (validacaoProfissional != 0){ 
            return res.json({auth:"true"});
        }
        return res.json({auth:"false"});
    },


    async encontrarPorId(req, res){
        const {id} = req.query;
        console.log("Procurando profissional com o id "+id)
        const resultadoPesquisa = await Profissional.findById(id).then(resposta => {            
            return res.json(resposta);
        });  
    },

    async encontrar(req, res){
        
        const {textoPesquisa} = req.query;
        console.log(`Pesquisando profissionais com a seguinte palavra-chave: ${textoPesquisa}`)
        const resultadoPesquisa = await Profissional.find({$or: [{profissao: {$regex : new RegExp(textoPesquisa, "i")}}, {nome: {$regex: new RegExp(textoPesquisa, "i")}}]}).then(resposta => {            
            return res.json(resposta);
        });
        
    },

    async store(req, res) {
        const profissionalJaCadastrado = await Profissional.find({email: req.body.email});
        const verificaTelefone = await Profissional.find({telefone: req.body.telefone});
        if (profissionalJaCadastrado.length != 0){
            return res.json({cadastro: "err_email"})
        }
        else if (verificaTelefone.length != 0){
            return res.json({cadastro: "err_telefone"})
        }
        else if (req.body.senha != req.body.confirmacaoSenha){
            return res.json({cadastro: "err_senha"})
        }
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
        return res.json({cadastro: "cadastrado"});
    }
};
