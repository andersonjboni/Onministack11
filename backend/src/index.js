//Página princial que será sempre chamada na rota - -- "/"

/**
 * Uma constante (não poderá sofrer alterações)
 *Cria-se a constante para armazenar/importar as dependenciase funcionalidades requerida
 */
const express = require('express');

/**
 * Importando agora as rotas.. lembrando que trata-se de um arquivo e não um pacote como é o express
 * por isso deve-se passar certinho o caminho
 * IMPORTANTE.. tbm deve-se utilisar o use como no caso o express.. para poder usar..
 */
const routes = require('./routes');

/**
 * Nova constante para armazenar a aplicação.. normalmente a app. 
 *Nela estarão todas as funcinalidade, totas e etc
 */
const app = express();

/**
 * Aqui estamos informando que os json serão convertidos em objetos... 
 * por isso deve ficar sempre antes rotas (route)
 */
app.use(express.json());

/**
 * Esse use de rotas deve esta abaixo o use do express.json.. vide acima
 */
app.use(routes);

/**
 * Bancos de Dados
 * SQL: MySql - SqlLite - PostgreSQL - Oracle - Sql Server (Relacionais)
 * noSql: MongoDB - CouchDB (Não relacionais)
 */

/**
 * Formas de Acesso ao banco
 * Drive: Será intalado o drive e as consultas deverão ser em SQL 
 * exemplo de consulta: select * from users
 * ou
 * Query Builder: Utiliza o JS e poderá ser usado depois com outros banco se precisar modificar
 * exemplo de consulta: table('users').select('*').where('...')
 */ 

/**
 * Aqui vamos indicar em qual porta deverá escrutar/rodar
 */
app.listen(3333);


