const express = require('express');
const app = express();

let usuarios = [
    {nome: "Giovanna", sobrenome: "Cinoca"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send('Olá mundo!');
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})