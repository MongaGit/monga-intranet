const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Configurações
const port = process.env.PORT || 3000;
const mongodbURI = process.env.MONGODB_URI;

// Inicialização do servidor
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Conexão com o banco de dados
mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados');
        app.listen(port, () => {
            console.log(`Servidor iniciado na porta ${port}`);
        });
    })
    .catch((error) => {
        console.error('Erro na conexão com o banco de dados', error);
    });
