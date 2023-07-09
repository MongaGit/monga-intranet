const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const ExampleController = require('../controllers/exampleController');

router.get('/example', ExampleController.exampleRoute);

router.use(express.json());
router.post('/server/project-zomboid/up', (req, res) => {
    const imagePath = '/home/monga/data-container/project-zomboid/';
    const ADMINPASSWORD = req.body.ADMINPASSWORD;
    const PORT = req.body.PORT;
    const SERVERNAME = req.body.SERVERNAME;
    const STEAMVAC = req.body.STEAMVAC;
    const NOSTEAM = req.body.NOSTEAM;
    const MOD_IDS = req.body.PORT;
    const WORKSHOP_IDS = req.body.PORT
    const SERVER = '/home/monga/data-container/' + GAME

    const envContent = `SERVER_PASSWORD=${ADMINPASSWORD}\nPORT=${PORT}\nSERVERNAME=${SERVERNAME}\nSTEAMVAC=${STEAMVAC}\nNOSTEAM=${NOSTEAM}\nMOD_IDS=${MOD_IDS}\nWORKSHOP_IDS=${WORKSHOP_IDS}`;

    fs.writeFileSync(path.join(imagePath, '.env'), envContent);
    
    const dockerComposeProcess = spawn('docker-compose', ['up'], {
        cwd: '/home/monga/data-container/' + GAME
    });

    dockerComposeProcess.stdout.on('data', (data) => {
        console.log(`Saída Compose : ${data}`);
    });

    dockerComposeProcess.stderr.on('data', (data) => {
        console.error(`Erro Compose: ${data}`);
    });

    dockerComposeProcess.on('close', (code) => {
        console.log(`Compose Encerrado: ${code}`);
        res.sendStatus(200);
    });
});

router.use(express.json());
router.post('/server/csgo/up', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    const imagePath = '/home/monga/data-container/csgo';
    const composeContent = `version: '3'
    services:
    csgo:
        image: theobrown/csgo-get5-docker:latest
        network_mode: host
        environment:
        - PASSWORD=${password}
        - RCON_PASSWORD=${rconPassword}
        - GOTV_PASSWORD=${gotvPassword}
        - SERVER_TOKEN=${serverToken}
        - MATCH_CONFIG=${JSON.stringify(matchConfig)}`;

    fs.writeFileSync(path.join(imagePath, 'docker-compose.yml'), composeContent);

});

module.exports = router;