export const Display = ({ authentication }) => {

    const message = () => {
        if(authentication == "") {
            return ""
        } else if (authentication) {
            return <span className="positive">Você foi logado com sucesso.</span>
        } else {
            return <span className="negative">Você não conseguiu ser logado.</span>
        }
    }

    return (
        message()
    )
}