import style from "./style.module.css"
import { useContext, useEffect } from "react"
import { PokemonContext } from "../../providers/PokemonContext"

export const ListPokemons = () => {

    const { getPokemonsList, pokemonsList, addMyPokemon } = useContext(PokemonContext)

    useEffect(() => {
        getPokemonsList()
    }, [])

    return (
        <div className={style.div}>
            <h2 className={style.title}>Lista de pokemons</h2>
            <span className={style.span}>({pokemonsList.length}) listados</span>
            <ul className={style.ul}>
                {
                    pokemonsList.map((pokemon, index) => (
                        <li key={index} className={style.li}>
                            <span className={style.pokemon}>{pokemon.name}</span>
                            <button onClick={() => addMyPokemon(pokemon.name)} className={style.add} type="button">Adicionar</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}