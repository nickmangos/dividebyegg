exports.up = (knex) => {
  return knex.schema
    .createTable('recipe_ingredients', (table) => {
      table.integer('recipe_id')
      table.integer('ingredient_id')
      table.string('user_defined')
      table.string('note')
      table.float('quantity')
      table.string('measurement')
      table.int('list_order')
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('recipe_ingredients')
}

