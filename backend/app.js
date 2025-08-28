const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


const alunosRoutes = require('./AlunosRoutes.js');
app.use(alunosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});