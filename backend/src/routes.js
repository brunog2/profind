const express = require('express');
const ProfissionalController = require('./controllers/ProfissionalController');
const UsuarioController = require('./controllers/UsuarioController');
const AvaliacaoPositivaController = require('./controllers/AvaliacaoPositivaController');
const AvaliacaoNegativaController = require('./controllers/AvaliacaoNegativaController');
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('Recebendo requisição de índice')
    return res.json({message: `Olá, ${req.query.name}`})
});

routes.post('/cadastrarProfissional', ProfissionalController.store);

routes.post('/cadastrarUsuario', UsuarioController.store);

routes.post('/profissional/:profissionalId/avaliacoesPositivas', AvaliacaoPositivaController.store);

routes.post('/profissional/:profissionalId/avaliacoesNegativas', AvaliacaoNegativaController.store);

routes.get('/profissionais', ProfissionalController.index);

module.exports = routes;