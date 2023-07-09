require('dotenv').config();
const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/apiRoutes');

app.use('/api/v1', apiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});
