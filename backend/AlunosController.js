const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

exports.criarAluno = async (req, res) => {
    const {nome, matricula, turma} = req.body
    
    const novoAlunoCriado = await prisma.Aluno.create({
        data: {
            nome: nome,
            matricula: matricula,
            turma: turma
        }
    });
    
    let msg = `O aluno ${nome} criado com sucesso!`
    console.log(msg)
    res.status(201).json(novoAlunoCriado);
};

exports.listarAlunos = async (req, res) => {

    const alunosDoBancoDeDados = await prisma.Aluno.findMany();
    console.log(alunosDoBancoDeDados);
    res.status(200).json(alunosDoBancoDeDados);
};

exports.buscarAlunoPorId = async (req, res) => {
    const {id} = req.params;
    
    const alunoDoBanco = await prisma.Aluno.findFirst({
        where:{
            id: id
        }
    })
    
    let msg = `Aluno com id ${id} buscado com sucesso!`
    console.log(msg)
    res.status(200).send(alunoDoBanco);
};

exports.atualizarAluno = async (req, res) => {
    const {id} = req.params;
    const {nome, matricula, turma} = req.body

    const alunoAtualizado = await prisma.Aluno.update({
        where:{
            id: id
        },
        data:{
            nome: nome,
            matricula: matricula,
            turma: turma
        }
    })

    let msg = `Aluno com id ${id} atualizado com sucesso!`
    console.log(msg)
    res.status(200).send(alunoAtualizado);
};

exports.deletarAluno = async (req, res) => {
    const {id} = req.params;

    const alunoDeletado = await prisma.Aluno.delete({
        where:{
            id: id
        }
    })

    let msg = `Aluno com id ${id} deletado com sucesso!`
    console.log(msg)
    res.status(200).send(alunoDeletado);
};

exports.testePrisma = async (req, res) => {
    //const {id} = req.params;

    /*
    //Teste Prisma FindUnique - exige uma chave primaria no Where
    const alunoUnico = await prisma.Aluno.findUnique({
        where: {
            id: 2
        }
    })*/

    /* 
    //Teste Prisma FindFirst - Retorna o 1o a ser encontrado
    const aluno = await prisma.Aluno.findFirst({
        where: {
            nome: {
                contains: "Joao"
            }
        }
    })
        */
    
    /*
    // Contagem de alunos que estao na turma FSN5
    let numeroAlunos = await prisma.Aluno.count({
        where: {
            turma: "FSN5"
        }
    })
    */

    /*
    //uso do orderBy dentro do prisma
    const alunos = await prisma.Aluno.findMany({
        orderBy: {
            nome: 'asc'
        }
    })
        */

    // SQL Puro
    const alunos = await prisma.$queryRaw`SELECT * FROM "Aluno"`;
    //await prisma.$queryRaw`SELECT * FROM Aluno`;

    res.status(200).send(alunos);
};