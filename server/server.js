require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const grassCtrl = require('./controllers/grassCtrl')
const pokeCtrl = require('./controllers/pokemonCtrl')

//top level middleware
app.use(express.json())

//End Points
app.get('/api/wild-pokemon', grassCtrl.getGrassyPokemon)

app.post('/api/pokemon', pokeCtrl.catch)
app.put('/api/pokemon/:id', pokeCtrl.rename)
app.delete('/api/pokemon/:id', pokeCtrl.release)
app.get('/api/pokemon', pokeCtrl.getAllPokemon)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Night Man cometh`))

