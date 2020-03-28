/**
 * Esse método ira crias a tabela
 */
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); // Esse campo criado com string.. pq no projeto vamos criar uma identificação na app msm
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();   
        
        table.timestamps(); // campos de controles.. gerados automáticos.. inserção e alteração..
      })  
};

/**
 * Para deletar a tabela se necessário
 */
exports.down = function(knex) {
    return knex.schema.droppTable('ongs') ;
};
