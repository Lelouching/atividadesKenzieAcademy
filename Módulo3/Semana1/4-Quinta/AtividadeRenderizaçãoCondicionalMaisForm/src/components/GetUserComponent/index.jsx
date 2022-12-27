import { useState } from "react"

export const GetUserComponent = ({ setUser, setIsLoggedIn }) => {

    const [userInput, setUserInput] = useState("")

    const handleLogin = () => {
        setUser(userInput)
        setIsLoggedIn(true)
    }

    return(
        <form onSubmit={(event) => handleLogin(event.preventDefault())}>
            <input 
            type="text" 
            value={userInput} 
            placeholder="Insira seu nome" 
            onChange={(event) => setUserInput(event.target.value)}
            />
            <button type="submit">Acessar com o nome</button>
        </form>
    )

}