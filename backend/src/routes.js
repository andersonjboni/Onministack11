/**
 * Uma constante (não poderá sofrer alterações)
 *Cria-se a constante para armazenar/importar as dependenciase funcionalidades requerida
 */
const express = require('express');

/**
 * Aqui vamos importar um pacote que já tem no node para ajudar a criar o id
 * REcurso de criptografia
 */
const crypto = require('crypto');

/**
 * Nova constatente para aramezar a parte de rotas do pacote express
 */
const routes = express.Router();


/**
 * Criando a primeira rota.
 * Por padrão temos como parametro a rota e uma função (nesse caso anonima...sem nome)
 * Essa função anonima sempre recebe dois parâmentros.. q requisição e a respostas
 * 
 * Obs: Essa linha funciona assim: app.get('/', (request, response) => { 
 *                    e assim tbm: app.get('/', function(request, response) {
 */


/**
 * Rota - Recursos
 */


/**
 * Orientações de métodos HTTP utilizados nas rotas
 * 
 * GET - Buscar/listar uma informação no Back-End
 * POST - Criar uma informação no Back-End
 * PUT - Alterar uma informação no Back-End
 * DELETE - Deletar uma informação no Back-End
 */


/**
 * Com um user específico por exemplo
 * Tipos de Parâmetros
 * Query Param: Parametros nomeados enviados na rota após o "?" (Filtros, Paginação)
 * Route Param: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição. Utilizado para criar ou alterar recusros (como json)
 */ 
routes.get('/', (request, response) => {
    
    //return response.send('Hello Word!'); // Forma de retornar um texto por exemplo.. com o send

    /**
     * Nessa outra forma vamos retornar um json.. um objeto nesse caso...que é representado por {}
     */
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Boni',
        rota: 'Rota do tipo GET'
    });
});

routes.post('/ongs', (request, response) => {
    //Uma forma de receber os dados pelo corpo 
    //const data = request.body;
    //uam forma de vefificar...aqui pra ver o que esta chegando..
    //console.log(data);

    /**
     * Mas segundo o Diego.. ele prefere colher os dados cada um na sua variavel
     */
    const { name, email, whatsapp, city, ud} = request.body;

    //como vamos gerar o id (que é uma string... lembra ?)
    const id = crypto.randomBytes(4).toString('HEX');
    /**
     * Estamos critografando randomicamente o id (com 4 bits) e convetendo em
     * string.. em hexadecimal
     */

     




    return response.json({ });
});

/**
 * Como a rota agora esta em arquivo separado.. é preciso exportar elas para usar 
 * nesse caso a constante route que armazena a parte de rotas do express
 * e importar lá nas paginas que precisam.. exemplo a index.js
 */
module.exports = routes;


