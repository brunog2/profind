const Profissional = require('../models/Profissional');
const Usuario = require('../models/Usuario');
module.exports = {
    async store (req, res){
        const {user} = req.headers;
        const {profissionalId} = req.params;

        const usuarioLogado = await Usuario.findById(user);
        const profissionalAlvo = await Profissional.findById(profissionalId);

        if (!profissionalAlvo){
            console.log(`Profissional de id ${profissionalAlvo} não encontrado`);
            return res.status(400).json({erro:"Profissional não encontrado"});
        };

        if (usuarioLogado.avaliacoes_positivas.includes(profissionalAlvo._id)){
            console.log('Avaliação positiva já cadastrada!');
            return res.json({message:"Avaliação positiva já cadastrada!"});
        };
        
        if (usuarioLogado.avaliacoes_negativas.includes(profissionalAlvo._id)){
            console.log("Tem uma avaliação negativa cadastrada")
            profissionalAlvo.avaliacoes_negativas = profissionalAlvo.avaliacoes_negativas-1;
            await profissionalAlvo.save();    
        };
        
        profissionalAlvo.avaliacoes_positivas = profissionalAlvo.avaliacoes_positivas+1;
        await profissionalAlvo.save();

        usuarioLogado.avaliacoes_negativas.pull(profissionalAlvo._id);
        await usuarioLogado.save();
        usuarioLogado.avaliacoes_positivas.push(profissionalAlvo._id);
        await usuarioLogado.save();

        console.log("Avaliações negativas do profissional:", profissionalAlvo.avaliacoes_negativas);
        console.log("Avaliações positivas do profissional:", profissionalAlvo.avaliacoes_positivas);

        return res.json(usuarioLogado);

    }
};