const axios = require('axios')

module.exports = {
    getGrassyPokemon: (req, res, next) => {
        const pokemonArr = []
        const rand1 = Math.ceil(Math.random() * 807)
        const rand2 = Math.ceil(Math.random() * 807)
        const rand3 = Math.ceil(Math.random() * 807)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`).then(result => {
            pokemonArr.push(result.data)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`).then(result => {
                pokemonArr.push(result.data)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`).then(result => {
                    pokemonArr.push(result.data)
                    res.status(200).send(pokemonArr)
                })
            })
        })
    }
}

