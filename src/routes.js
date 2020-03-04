const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multerConfig');

const router = express.Router();
const BoxController = require('./controller/BoxController');

const FileController = require('./controller/FileController');


router.post('/boxes', BoxController.store);
router.get('/boxes/:id',BoxController.show)



//informa  que nesta rota o documento receberar somente um arquivo por vez, 
//em vez de  single pode ser array pra receber varios
router.post('/boxes/:id/files',multer(multerConfig).single('file'), 
FileController.store);//file e o nome do campo do front


module.exports = router;