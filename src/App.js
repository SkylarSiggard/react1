import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonCaught: []
    }
    this.catchPokemon = this.catchPokemon.bind(this)
    this.saveName = this.saveName.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({pokemonCaught: res.data})
    })
  }
  catchPokemon(body) {
    axios.post('/api/pokemon', body).then(res => {
      this.setState({pokemonCaught: res.data})
    })
  }
  saveName(id, body) {
    axios.put(`/api/pokemon/${id}`, body).then(res => {
      this.setState({pokemonCaught: res.data})
    })
  }
  releasePokemon(id) {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({pokemonCaught: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Finder catchFn={this.catchPokemon}/>
        <Pokedex 
          pokemonList={this.state.pokemonCaught}
          saveFn={this.saveName}
          releaseFn={this.releasePokemon}
        />        
      </div>
    );
  }
}

export default App;
