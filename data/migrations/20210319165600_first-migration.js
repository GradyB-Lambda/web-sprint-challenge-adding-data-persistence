
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.text('project_description')
        tbl.interger('project_completed').defaultTo(0)
    })
    .createTable('')
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('projects')
};
