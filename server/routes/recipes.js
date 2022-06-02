const express = require('express')
const router = express.Router()

const { getRecipe, getIngredients } = require('../db/db')

router.get('/:id', (req, res) => {
  const id = req.params.id
  getRecipe(id)
    .then(recipe => {
      res.json(recipe)
    })
})

router.get('/ingredients/:id', (req, res) => {
  const id = req.params.id
  getIngredients(id)
    .then(ingredients => {
      res.json(ingredients)
    })
})

module.exports = router
