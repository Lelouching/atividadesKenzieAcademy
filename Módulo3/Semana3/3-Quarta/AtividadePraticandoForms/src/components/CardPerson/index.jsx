export const CardPerson = ({ data }) => {
    return (
        <li>
            <span>Seu nome de usuário: {data.userName}</span>
            <span>Seu nome completo: {data.nameComplete}</span>
            <span>Seu email: {data.email}</span>
            <span>Sua senha: {data.password}</span>
            <img src={data.avatar} alt={data.userName} />
        </li>
    )
}