const express = require('express');

const routes = express.Router();

routes.post("/users", (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11.0',
        alunos: 'Danillo'
    });
});

module.exports = routes;