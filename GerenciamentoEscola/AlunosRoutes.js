const express = require('express');
const router = express.Router();
const alunosController = require('./AlunosController');

router.get('/alunos', alunosController.listarAlunos);
router.get('/alunos/:id', alunosController.buscarAlunoPorId);
router.post('/alunos', alunosController.criarAluno);
router.put('/alunos/:id', alunosController.atualizarAluno);
router.delete('/alunos/:id', alunosController.deletarAluno);

module.exports = router;