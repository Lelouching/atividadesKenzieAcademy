interface iCard{
    name: string | null,
    age: number | null,
    hobby: string | null
}

export const Card = ({ name, age, hobby }: iCard) => {
    return (
        <div className="div-card">
            <h3>{name}</h3>
            <span>Idade: {age}</span>
            <span>Hobby: {hobby}</span>
        </div>
    )
}