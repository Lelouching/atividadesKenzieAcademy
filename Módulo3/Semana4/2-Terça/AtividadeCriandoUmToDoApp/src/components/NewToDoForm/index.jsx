import { useContext } from "react"
import { useState } from "react"
import { ContextProvider } from "../../contexts"

export const SaveNewTodo = () => {

    const [task, setTask] = useState("")
    const { saveNewTodo } = useContext(ContextProvider)

    const handleSaveNewTask = (e) => {
        e.preventDefault()

        saveNewTodo(task)
    }

    return (
        <form onSubmit={handleSaveNewTask}>
            <input 
                type="text"
                placeholder="Exemplo: Estudar"
                value={task} 
                onChange={(event) => setTask(event.target.value)} 
            />

            <button type="submit">Criar nova tarefa</button>
        </form>
    )
}