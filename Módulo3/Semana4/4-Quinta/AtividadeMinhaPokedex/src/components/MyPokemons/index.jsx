import { PokemonContext } from "../../providers/PokemonContext"
import { useContext } from "react"
import style from "./style.module.css"

export const MyPokemons = () => {

    const { myPokemons, removeMyPokemon } = useContext(PokemonContext)

    return (
       <div className={style.div}>
            <h2 className={style.title}>Meu time de pokemons</h2>
            {
                myPokemons.length == 0 ?
                <span className={style.empty}>Lista vazia</span> :
                <ul className={style.ul}>
                {
                    myPokemons.map((pokemon, index) => (
                        <li key={index} className={style.li}>
                            <span className={style.pokemon}>{pokemon.name}</span>
                            <button onClick={() => removeMyPokemon(pokemon.id)} className={style.remove}>Remover</button>
                        </li>
                    ))
                }
            </ul>
            }
       </div> 
    )
}