/**
 * Esse método ira crias a tabela
 */
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // Esse caso criamos como autoincremento e inteiro como habiyualmente conhecemos

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('values').notNullable();
        
        //Aqui criamos o campo para ser a FK com a ongs
        table.string('ong_id').notNullable();  //Nesse casotbm string conforme campo da tabela ongs
        //Aqui definimos a FK
        table.foreign('ong_id').references('id').inTable('ongs');

        table.timestamps(); // campos de controles.. gerados automáticos.. inserção e alteração..
      }) 
  
};

/**
 * Para deletar a tabela se necessário
 */
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
