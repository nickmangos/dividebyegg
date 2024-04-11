exports.up = (knex) => {
  return knex.schema
    .createTable('ingredients', (table) => {
      table.increments('id')
      table.string('name')
      table.int('calories')
      table.int('density')
      table.string('default_measurement')
      table.string('origin')
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('ingredients')
}

