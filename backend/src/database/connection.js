/**
 * Arquivo de conexão com o banco dados
 */

/**
 * Primeiro importamos o Knex
 */
const knex = require(knex);

/**
 * Depois precisamos usar as configurações
 */
const configuratinon = require('../../knexfile'); // Aqui temos q buscar arquivo de configuração..que esta fora da pasta.. que tem as configuraçoes

/**
 * Aqui definimos para a cofiguraçoes... qual config usar na conexão
 * VALE RESSALTAR QUE NESSE CASO VAMOS PEGAR A DE DEVENVOLVIMENTO.. Que estamos usando..
 * Lá tem também as conguguraçoes de produção.. basta fazer elas...similar a de desenvolvimento
 */
const connection = knex(configuratinon.development);

/**
 * Exportando o arquivo de conexao para usar onde precisar.. nesse caso onde for conectar no banco
 */
module.exports = connection;