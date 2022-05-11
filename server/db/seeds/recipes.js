exports.seed = async function(knex) {
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, title: 'Cheese Scones', servings: 8, preperation_time: 20, cooking_time: 40, user_id: 1, public: true },
    {id: 2, title: 'Macaroni Cheese', servings: 4, preperation_time: 40, cooking_time: 40, user_id: 2, public: false },
    {id: 3, title: 'One pot chocolate Guinness cake with chocolate & cream cheese frosting', servings: 10, preperation_time: 40, cooking_time: 80, user_id: 1, public: true }
  ])
}