const express = require('express');

const app = express();

app.post("/users", (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11.0',
        alunos: 'Danillo'
    });
});

app.listen(3333);