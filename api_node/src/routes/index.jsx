const express = require('express')
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
} );

module.exports = router;

//o código acima serve para
//passar a versão que está a nossa API 
//ou para que possamos passar para um balanceador (Load Balancer)
// verificar se a nossa API está no ar