import { Link, useParams } from "react-router-dom"

export const Company = ({ arrayMembers }) => {

    const { id } = useParams()

    const findCompany = arrayMembers.find((member) => member.id == id)

    return (
        <div>
            <h1>Detalhes da Empresa</h1>

            <p>
                Nome da empresa: {findCompany && findCompany.name}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}