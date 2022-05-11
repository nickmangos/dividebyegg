exports.up = (knex) => {
  return knex.schema
    .createTable('ingredients', (table) => {
      table.increments('id')
      table.string('name')
      table.int('calories')
      table.string('default_measurement')
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('ingredients')
}

