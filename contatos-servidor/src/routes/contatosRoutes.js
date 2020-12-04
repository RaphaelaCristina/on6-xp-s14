const express = require('express');
const router = express.Router();
const controller = require('../controllers/contatosController');
const contatosCollection = require('../models/contatosSchema');

router.get('/', controller.getAll)
router.get('/contatos',controller.getContatos)
router.get('/nome/:nome', controller.getNome)
router.get('/id/:id', controller.getById)
router.post("/criar",controller.addContato)
router.delete("/deletar/:id",controller.deleteID)
router.put('/atualizar/:id',controller.atualizaTudo)
router.patch('/atualizar/telefone/:id',controller.atualizaTel)


module.exports = router