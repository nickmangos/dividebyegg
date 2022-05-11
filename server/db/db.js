const conn = require('./connection')

function getAllUsers (db = conn) {
  return db('users')
  // .select() Don't need this, select is a default. Knex(?) infers.
}

function addUser (user, db = conn) {
  return db('users')
  .insert(user)
}

function getRecipe (id, db = conn) {
  return db('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    //.select('movies.title', 'reviews.review', 'movies.id')
    .where('recipes.id', id)
    .first()
}

function getReview (id, db = conn) {
  return db('movies')
    .join('reviews', 'movies.review_id', 'reviews.id')
    .select('movies.title', 'reviews.review', 'movies.id')
    .where('movies.id', id)
    .first()
}

module.exports = {
  getAllUsers,
  addUser,
  getRecipe
}
