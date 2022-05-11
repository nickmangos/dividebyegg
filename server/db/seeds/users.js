
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {id: 1, full_name: 'Nick Mangos', email: 'nick.mangos@gmail.com'},
    {id: 2, full_name: 'Louise Harris', email: 'getlouise@gmail.com'},
    {id: 3, full_name: 'Sam Harris', email: 'samsteals@geocities.com'},
    {id: 4, full_name: 'Domo-kun', email: 'thankyou@friend.com'}
  ])
}