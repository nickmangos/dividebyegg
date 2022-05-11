exports.seed = async function(knex) {
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {id: 1, name: 'butter', calories: null, default_measurement: 'g'},
    {id: 2, name: 'cocoa powder', calories: null, default_measurement: 'tbsp' },
    {id: 3, name: 'white sugar', calories: null, default_measurement: 'tbsp' },
    {id: 4, name: 'plain Greek yogurt', calories: null, default_measurement: 'cup' },
    {id: 5, name: 'eggs', calories: null, default_measurement: null },
    {id: 6, name: 'vanilla extract', calories: null, default_measurement: 'tsp' },
    {id: 7, name: 'all-purpose flour', calories: null, default_measurement: 'cup' },
    {id: 8, name: 'baking soda', calories: null, default_measurement: 'tsp' },
    {id: 9, name: 'salt', calories: null, default_measurement: 'tsp' },
    {id: 10, name: 'honey', calories: null, default_measurement: 'tsp' }
  ])
}

