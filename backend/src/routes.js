const express = require('express');
const ProfissionalController = require('./controllers/ProfissionalController');

//const AvaliacaoPositivaController = require('./controllers/AvaliacaoPositivaController');
//const AvaliacaoNegativaController = require('./controllers/AvaliacaoNegativaController');
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('Recebendo requisição de índice')
    return res.json({message: `Olá, ${req.query.name}`})
});

routes.post('/cadastrarProfissional', ProfissionalController.store);
routes.post('/verificacaoDeConta', function(req, res){
    ProfissionalController.encontrar
});
routes.post('/test', ProfissionalController.test);



//routes.post('/profissional/:profissionalId/avaliacoesPositivas', AvaliacaoPositivaController.store);

//routes.post('/profissional/:profissionalId/avaliacoesNegativas', AvaliacaoNegativaController.store);

routes.get('/profissionais', ProfissionalController.index);

module.exports = routes;