const express = require('express')
const router = express.Router()

const { getAllUsers, addUser, deleteUser } = require('../db/db')

router.get('/', (req, res) => {
  getAllUsers()
    .then(users => {
      res.json(users)
    })
})

router.post('/', (req, res) => {
  const user = req.body
  addUser(user)
    .then(idArr => {
      res.json( { newID: idArr[0] } )
    })
})

router.delete('/:id', (req, res) => {
  const user = req.params.id
  deleteUser(user)
    .then(response => {
      res.json( response )
    })
})

module.exports = router
