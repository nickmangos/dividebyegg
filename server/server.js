const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const recipeRoutes = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/recipes', recipeRoutes)

server.get('*', (req, res) => { // If doesn't match exisiting routes, send this back. Stops sever request and redirects back to React
  res.sendFile(path.join(__dirname, 'public', 'index.html')) // __dirname is a variable that sets absolute path at runtime
})

module.exports = server
