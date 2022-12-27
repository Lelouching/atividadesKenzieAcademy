import { useParams, Link } from "react-router-dom"

export const Customer = ({ arrayMembers }) => {

    const { id } = useParams()

    const findCustomer = arrayMembers.find((member) => member.id == id)

    return (
        <div>
            <h1>Detalhes do cliente</h1>

            <p>
                Nome: {findCustomer && findCustomer.name}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}