import { PokemonContext } from "../../providers/PokemonContext"
import { useContext, useState } from "react"
import style from "./style.module.css"

export const SearchPokemons = () => {

    const [pokemonInput, setPokemonInput] = useState()

    const { searchPokemon, searchingPokemon } = useContext(PokemonContext)

    const handleSearchPokemon = () => {
        searchingPokemon(pokemonInput.toLowerCase().trim())
    }

    return (
        <div className={style.div}>
            <h2 className={style.title}>Buscar pokemon</h2>
            <form onSubmit={(e) => handleSearchPokemon(e.preventDefault())} className={style.divSearch}>
                <label className={style.label} htmlFor="search-pokemon">Nome do pokemon</label>
                <input value={pokemonInput} onChange={(e) => setPokemonInput(e.target.value)} placeholder="Nome do pokemon" className={style.input} type="text" id="search-pokemon" required />
                <button className={style.search} type="submit">Pesquisar</button>
                {
                    searchPokemon !== "" ? 
                        (
                            <div className={style.divPokemon}>
                                <img className={style.pokemonImage} src={searchPokemon.sprites.front_default} alt={searchPokemon.name} />
                                <span className={style.pokemon}>{searchPokemon.name}</span>
                            </div>
                        ) : (
                            <div className={style.divPokemon}>
                                <span className={style.pokemon}>Ainda não pesquisou</span>
                            </div>
                        )
                }
            </form>
        </div>
    )
}