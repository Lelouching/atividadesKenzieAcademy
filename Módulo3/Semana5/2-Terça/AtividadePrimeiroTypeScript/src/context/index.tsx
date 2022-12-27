import { createContext, useState } from "react";

interface iChildren{
    children: JSX.Element
}

interface iUser{
    name: string,
    age: number,
    hobby: string
}

interface iValueContext{
    userTest: iUser | null,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
}

export const UserContext = createContext({} as iValueContext)

export const UserProvider = ({ children }: iChildren) => {

    const [userTest, setUser] = useState<iUser | null>(null)

    return (
        <UserContext.Provider value={{ userTest, setUser }}>
            {children}
        </UserContext.Provider>
    )
}