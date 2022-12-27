import { useState } from "react";
import { createContext } from "react";

export const ContextProvider = createContext({})

export const ContextToDo = ({ children }) => {

    const [todos, setTodos] = useState([])

    const saveNewTodo = (task) => {
        if (!task) return

        const newTodo = {
            id: todos.length + 1,
            task: task,
            completed: false
        }

        setTodos(oldTodos => [...oldTodos, newTodo])
    }

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id)

        setTodos(filteredTodos)
    }

    const completeTask = (id) => {
        const filteredTodos = todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))

        setTodos(filteredTodos)
    }

    return (
        <ContextProvider.Provider value={{ todos, saveNewTodo, deleteTodo, completeTask }}>
            {children}
        </ContextProvider.Provider>
    )
}