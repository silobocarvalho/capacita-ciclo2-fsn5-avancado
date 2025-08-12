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
        { id: 2, nome: 'Produto 2', preco: 200 },
        { id: 3, nome: 'Produto 3', preco: 1000 }
    ];
    response.json(produtos);
});

app.post("/produtos", (request, response) => {
    const { nomeProduto, quantidade, valor, urlImagem } = request.body;
    console.log(`Os dados do produto a ser cadastrado sao: Nome: ${nomeProduto}, quantidade: ${quantidade}, valor: ${valor} e Imagem: ${urlImagem}`);

    const meuProduto = {
        "nomeProduto" : nomeProduto, 
        "quantidade" : quantidade, 
        "valor" : valor, 
        "urlImagem" : urlImagem
    };
    return response.status(201).json(meuProduto);
});

app.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    console.log(`O produto que está sendo editado é o de ID: ${id}`);

    return response.status(200).send("Produto editado com sucesso!");
});

app.delete("/produtos/:id", (request, response) => {
    const {id} = request.params;
    console.log(`O produto que está sendo DELETADO é o de ID: ${id}`);

    return response.status(200).send("Produto DELETADO com sucesso!");

});
//FIM - Configuracao das Rotas

// INICIALIZACAO DO SERVIDOR
app.listen(PORT, () => {
    console.log("Servidor executando na porta: " + PORT);
})
