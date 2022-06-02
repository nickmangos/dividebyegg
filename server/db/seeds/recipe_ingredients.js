exports.seed = async function(knex) {
  await knex('recipe_ingredients').del()
  await knex('recipe_ingredients').insert([
    {recipe_id: 3, ingredient_id: null, user_defined: 'Gunness stout', note: null, quantity: 1, measurement: 'cup', list_order: 1 },
    {recipe_id: 3, ingredient_id: 1, user_defined: null, note: 'or margarine', quantity: 10, measurement: 'tbsp', list_order: 2 },
    {recipe_id: 3, ingredient_id: 2, user_defined: null, note: 'unsweetened', quantity: 0.75, measurement: 'cup', list_order: 3 },
    {recipe_id: 3, ingredient_id: 3, user_defined: null, note: 'room temperature', quantity: 2, measurement: 'cup', list_order: 4 },
    {recipe_id: 3, ingredient_id: 4, user_defined: null, note: 'room temperature', quantity: 0.75, measurement: 'cup', list_order: 5 },
    {recipe_id: 3, ingredient_id: 5, user_defined: null, note: null, quantity: 2, measurement: null, list_order: 6 },
    {recipe_id: 3, ingredient_id: 6, user_defined: null, note: null, quantity: 1, measurement: 'tsp', list_order: 7 },
    {recipe_id: 3, ingredient_id: 7, user_defined: null, note: null, quantity: 2, measurement: 'cup', list_order: 8 },
    {recipe_id: 3, ingredient_id: 8, user_defined: null, note: null, quantity: 2.5, measurement: 'tsp', list_order: 9 },
    {recipe_id: 3, ingredient_id: 9, user_defined: null, note: null, quantity: 0.5, measurement: 'tsp', list_order: 10 }
  ])
}
