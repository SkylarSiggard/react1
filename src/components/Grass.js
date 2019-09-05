import React, {Component} from 'react'

export default class Grass extends Component{
    constructor() {
        super()
        this.state = {
            grassClicked: false,
            clicksToCatch: Math.ceil(Math.random() * 10)
        }
    }
    checkGrass() {
        if (!this.state.grassClicked) {
            // console.log('changed state')
            return this.setState({grassClicked: true})
        } else {
            // console.log('caught pokemon')
            this.catchPokemon()
        }
    }

    catchPokemon(){
        this.props.catchFn({
            name: this.props.pokemonData.name,
            img: this.props.pokemonData.sprites.front_shiny
        })
    }

    render() {
        const {pokemonData} = this.props
        const grass = 'https://studio.code.org/media?u=http%3A%2F%2Fi.imgur.com%2FyaxYGuT.png'

        return(
            <div className='grass'>
                <img onClick={() => this.checkGrass()}
                src={this.state.grassClicked ? pokemonData.sprites.front_shiny : grass} 
                alt={pokemonData.name}/>
            </div>
        )
    }
}
