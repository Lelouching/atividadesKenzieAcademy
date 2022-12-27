import "./index.css"

export const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
    return(
        <div>
            {
            isLoggedIn ? (
                <div>
                    <span>Bem-vindo {user}</span>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <span>Você não pode acessar essa página</span>
                    <button onClick={Login}>Login</button>
                </div>
            )
        }
        </div>
    )
}