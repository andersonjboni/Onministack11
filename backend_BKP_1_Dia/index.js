/**
 * Uma constante (não poderá sofrer alterações)
 *Cria-se a constante para armazenar/importar as dependenciase funcionalidades requerida
 */
const express = require('express');

/**
 * Nova constante para armazenar a aplicação.. normalmente a app. 
 *Nela estarão todas as funcinalidade, totas e etc
 */
const app = express();

/**
 * Criando a primeira rota.
 * Por padrão temos como parametro a rota e uma função (nesse caso anonima...sem nome)
 * Essa função anonima sempre recebe dois parâmentros.. q requisição e a respostas
 * 
 * Obs: Essa linha funciona assim: app.get('/', (request, response) => { 
 *                    e assim tbm: app.get('/', function(request, response) {
 */
app.get('/', (request, response) => {
    
    //return response.send('Hello Word!'); // Forma de retornar um texto por exemplo.. com o send

    /**
     * Nessa outra forma vamos retornar um json.. um objeto nesse caso...que é representado por {}
     */
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Boni'

    });
});

/**
 * Aqui vamos indicar em qual porta deverá escrutar/rodar
 */
app.listen(3333);


