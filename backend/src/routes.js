const express = require('express');
const ProfissionalController = require('./controllers/ProfissionalController');
const UploadImageController = require('./controllers/UploadImageController');

//const AvaliacaoPositivaController = require('./controllers/AvaliacaoPositivaController');
//const AvaliacaoNegativaController = require('./controllers/AvaliacaoNegativaController');
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('Recebendo requisição de índice')
    return res.json({ message: `Olá, ${req.query.name}` })
});

routes.post('/cadastrarProfissional', ProfissionalController.store);
routes.post('/verificacaoDeConta', ProfissionalController.autenticar);
routes.get('/pesquisarProfissional', ProfissionalController.encontrar);
routes.get('/pesquisarPorId', ProfissionalController.encontrarPorId);

routes.post('/uploadImage', UploadImageController)


//routes.post('/profissional/:profissionalId/avaliacoesPositivas', AvaliacaoPositivaController.store);

//routes.post('/profissional/:profissionalId/avaliacoesNegativas', AvaliacaoNegativaController.store);

routes.get('/profissionais', ProfissionalController.index);

module.exports = routes;