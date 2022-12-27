import { createContext, useEffect, useState } from "react"
import { api } from "../service/api"

export const PokemonContext = createContext({})

export const PokemonProvider = ({ children }) => {

    const [pokemonsList, setPokemonsList] = useState([])

    const [myPokemons, setMyPokemons] = useState([])

    const [searchPokemon, setSearchPokemon] = useState("")

    const addMyPokemon = (pokemon) => {
        setMyPokemons([...myPokemons, { name: pokemon, id: myPokemons.length + 1}])
    }

    const removeMyPokemon = (id) => {
        const filter = myPokemons.filter(pokemon => pokemon.id !== id)
        setMyPokemons(filter)
    }

    const searchingPokemon = async (pokemon) => {
        const response = await api.get(`pokemon/${pokemon}`)
        setSearchPokemon(response.data)
    }

    const getPokemonsList = async () => {
        const response = await api.get("pokemon", {
            params: {
                limit: 151
            }
        })

        setPokemonsList(response.data.results)
    }


    return (
        <PokemonContext.Provider value={{ getPokemonsList, pokemonsList, addMyPokemon, myPokemons, removeMyPokemon, searchPokemon, searchingPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}