const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();
const cors = require('cors');

require('dotenv').config()

server.use(cors());
server.use(express.static('assets'));
var port = 3333;

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true}
);





server.use(express.json());
server.use(routes);
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
