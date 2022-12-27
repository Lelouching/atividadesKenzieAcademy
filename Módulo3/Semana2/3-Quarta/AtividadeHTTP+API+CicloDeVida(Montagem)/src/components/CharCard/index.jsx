import style from "./index.module.css"

export const CharCard = ({ name, status, image }) => {
    const statusColor = () => {
        if(status == "Alive") {
            return <span className={style.alive}>Vivo</span>
        } else if (status == "Dead") {
            return <span className={style.dead}>Morto</span>
        } else {
            return <span className={style.unknown}>Desconhecido</span>
        }
    }
    return (
        <li className={style.card}>
            <img className={style.imageChar} src={image} alt={name} />
            <div className={style.divContent}>
                <span className={style.nameChar}>{name}</span>
                <span className={style.statusChar}>Status: {statusColor()}</span>
            </div>
        </li>
    )
}