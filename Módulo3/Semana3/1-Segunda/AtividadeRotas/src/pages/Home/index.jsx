import { Link } from "react-router-dom"
import style from "./style.module.css"

export const Home = ({ arrayMembers }) => {
    return (
        arrayMembers.map((member, index) => 
            <Link className={style.list} key={index} to={
                member.type == "pj" ?
                `/company/${member.id}` :
                `/customer/${member.id}`
            }>
                <span className={style.name}>{member.name}</span>
            </Link>
        )
    )
}