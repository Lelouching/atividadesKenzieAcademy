export const WelcomePage = ({ user, setIsLoggedIn }) => {

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <span>Boas vindas, {user}</span>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}