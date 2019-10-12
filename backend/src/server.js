const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();
var port = 3333;

mongoose.connect('mongodb://encontreprofissionais:encontreprofissionais@cluster0-shard-00-00-vochj.mongodb.net:27017,cluster0-shard-00-01-vochj.mongodb.net:27017,cluster0-shard-00-02-vochj.mongodb.net:27017/encontreprofissionais?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

server.use(express.json());
server.use(routes);
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});