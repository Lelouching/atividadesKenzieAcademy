import { Children } from "react"
import style from "./index.module.css"

export const Characters = ({ CharCard, listCharacters, children }) => {
    return (
        <div>
            <h1 className={style.title}>Meus personagens de Rick e Morty</h1>
            <div className={style.divButtons}>{children}</div>
            <ul className={style.list}>
                {
                    listCharacters.map((character) => 
                        <CharCard key={character.id} name={character.name} status={character.status} image={character.image}/>
                    )
                }
            </ul>
        </div>
    )
}