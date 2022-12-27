import { Routes, Route } from "react-router-dom"
import { Company } from "../pages/Company"
import { Customer } from "../pages/Customer"
import { Home } from "../pages/Home"
import { members } from "../services/data"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/customer/:id" element={<Customer arrayMembers={members}/>}/>
            <Route path="/company/:id" element={<Company arrayMembers={members}/>}/>
            <Route path="/" element={<Home arrayMembers={members}/>}/>
        </Routes>
    )
}