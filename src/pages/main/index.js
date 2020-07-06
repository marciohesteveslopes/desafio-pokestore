import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        pokemons: []
    };

    componentDidMount() {
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const response = await api.get('/pokemon')
        //console.log({pokemons: response.data.results})

        this.setState({pokemons: response.data.results})
    }

    render() {
        const {pokemons} = this.state;
        
        return (
            <div className="pokemon-list">
                {pokemons.map(pokemon => (
                    <article key={pokemon.id}>
                        <strong>{pokemon.name}</strong>
                        <p>{pokemon.url}</p>

                        
                        
                    </article>
                ))}
            </div>
        );
    }
}
