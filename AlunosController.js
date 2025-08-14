const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

exports.criarAluno = (req, res) => {
    const {nome, matricula, turma} = req.body
    let msg = `O aluno ${nome} criado com sucesso!`
    console.log(msg)
    res.status(201).json(msg);
};

exports.listarAlunos = async (req, res) => {
    //let msg = "Todos alunos listados com sucesso!"
    //console.log(msg)

    const alunosDoBancoDeDados = await prisma.Aluno.findMany();
    console.log(alunosDoBancoDeDados);
    res.status(200).json(alunosDoBancoDeDados);
};

exports.buscarAlunoPorId = (req, res) => {
    const {id} = req.params;
    let msg = `Aluno com id ${id} buscado com sucesso!`
    console.log(msg)
    res.status(200).send(msg);
};

exports.atualizarAluno = (req, res) => {
    const {id} = req.params;
    let msg = `Aluno com id ${id} atualizado com sucesso!`
    console.log(msg)
    res.status(200).send(msg);
};

exports.deletarAluno = (req, res) => {
    const {id} = req.params;
    let msg = `Aluno com id ${id} deletado com sucesso!`
    console.log(msg)
    res.status(200).send(msg);
};