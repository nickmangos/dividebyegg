exports.up = (knex) => {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.integer('servings')
      table.integer('preperation_time')
      table.integer('cooking_time')
      table.integer('user_id')
      table.boolean('public')
      table.timestamps(false, true)
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('recipes')
}

