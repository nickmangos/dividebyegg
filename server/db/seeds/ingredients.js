exports.seed = async function(knex) {
  await knex('ingredients').del()
  await knex('ingredients').insert([
    { id: 1, name: 'butter', calories: 324, density: 0.911, default_measurement: 'stick', origin: 'AI 0.1' },
    { id: 2, name: 'cocoa powder', calories: 229, density: 0.448, default_measurement: 'cup', origin: 'AI 0.1' },
    { id: 3, name: 'white sugar', calories: 387, density: 0.849, default_measurement: 'cup', origin: 'AI 0.1' },
    { id: 4, name: 'plain Greek yogurt', calories: 59, density: 1.03, default_measurement: 'cup', origin: 'AI 0.1' },
    { id: 5, name: 'eggs', calories: 143, density: null, default_measurement: null, origin: 'AI 0.1' },
    { id: 6, name: 'vanilla extract', calories: 288, density: 1.06, default_measurement: 'tsp', origin: 'AI 0.1' },
    { id: 7, name: 'all-purpose flour', calories: 364, density: 0.594, default_measurement: 'cup', origin: 'AI 0.1' },
    { id: 8, name: 'baking soda', calories: 0, density: 2.13, default_measurement: 'tsp', origin: 'AI 0.1' },
    { id: 9, name: 'salt', calories: 0, density: 2.16, default_measurement: 'tsp', origin: 'AI 0.1' },
    { id: 10, name: 'honey', calories: 304, density: 1.42, default_measurement: 'cup', origin: 'AI 0.1' }
  ])
}

