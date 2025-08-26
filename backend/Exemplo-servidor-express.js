const PORT = 3000;
//INICIO - Configuracao inicial
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//FIM - Configuracao inicial

//INICIO - Configuracao das Rotas
app.get("/", (request, response) => {
    response.json({ mensagem: 'Servidor Node.js rodando com sucesso!' });
});

app.get("/produtos", (request, response) => {
    const produtos = [
        { id: 1, nome: 'Produto 1', preco: 100 },
        { id: 2, nome: 'Produto 2', preco: 200 }
    ];
    response.json(produtos);
});
//FIM - Configuracao das Rotas

// INICIALIZACAO DO SERVIDOR
app.listen(PORT, () => {
    console.log("Servidor executando na porta: " + PORT);
})
