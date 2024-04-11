const conn = require('./connection')

function getAllUsers (db = conn) {
  return db('users')
  // .select() Don't need this, select is a default. Knex(?) infers.
}

function addUser (user, db = conn) {
  return db('users')
  .insert(user)
}

function deleteUser (id, db = conn) {
  return db('users')
  .where('users.id', id)
  .del()
}

function getRecipe (id, db = conn) {
  return db('recipes')
    .where('recipes.id', id)
    .first()
} 

function getIngredients (id, db = conn) {
  return db('recipe_ingredients')
    .leftJoin('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .where('recipe_ingredients.recipe_id', id)
} 

// function getRecipe (id, db = conn) {
//   return db('recipes')
//     .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
//     .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
//     //.select('movies.title', 'reviews.review', 'movies.id')
//     .where('recipes.id', id)
//     .first()
// }

// function getRecipe (id, db = conn) {
//   return db('recipes')
//     .where('recipes.id', id)
//     .first()
//     .then((x) => {
//       var temp = {...x}
//       temp.test = db('ingredients')
//       return temp
//     })
// } 

// knex("mytable")
// .where({
//   id: 32423
// })
// .del()
// .then( ->
//   knex("mytable")
//   .insert()
//  ..... 

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  getRecipe,
  getIngredients
}
