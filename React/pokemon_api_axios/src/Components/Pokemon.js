import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [Pokemons, setPokemon] = useState([]);

    const handelresponde = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response => {
            setPokemon(response.data.results);
        })
    }
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={handelresponde}>Fetch Pokemon</button>
            <ul className="list-group">
                {
                    Pokemons ?
                        Pokemons.map((pokemon, i) =>
                            <li className="list-group-item" key={i}>{pokemon.name}</li>
                        ) : ""
                }
            </ul>

        </div>
    )
}

export default Pokemon;
