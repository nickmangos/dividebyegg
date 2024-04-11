exports.seed = async function(knex) {
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, title: 'Cheese Scones', servings: 8, preperation_time: 20, cooking_time: 40, user_id: 1, instructions: 'No Instructions', public: true },
    {id: 2, title: 'Macaroni Cheese', servings: 4, preperation_time: 40, cooking_time: 40, user_id: 2, instructions: 'No Instructions', public: false },
    {id: 3, title: 'One pot chocolate Guinness cake with chocolate & cream cheese frosting', servings: 10, preperation_time: 40, cooking_time: 80, instructions: 'Add all ingredients in a large bowl and mix', user_id: 1, public: true }  ])
}