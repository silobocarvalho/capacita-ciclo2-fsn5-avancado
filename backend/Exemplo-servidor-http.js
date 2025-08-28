// Exemplo de codigo para criacao de um servidor HTTP usando NodeJS e a biblioteca HTTP. 
// O servidor irá executar no localhost e ser acessado atraves da porta 3000.
const http = require('http');

const portServer = 3000;
const hostname = "localhost";

const server = http.createServer( (request, response) => {
    response.statusCode = 200;
    response.end("Requisicao feita com sucesso!");
})

server.listen(portServer, hostname, () => {
    console.log("Servidor executando na porta: " + portServer);
} )