import "./index.css"

export const Person = ({name, age, country}) => {
    return (
        <div>
            <h3>Dev: {name}</h3>
            <span>Idade: {age}</span>
            <span>País: {country}</span>
        </div>
    )
}