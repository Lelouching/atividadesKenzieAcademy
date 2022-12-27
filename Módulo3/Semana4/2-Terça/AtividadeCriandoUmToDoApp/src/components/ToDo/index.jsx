import { useContext } from "react"
import { ContextProvider } from "../../contexts"

export const ToDos = () => {
    const { todos, deleteTodo, completeTask } = useContext(ContextProvider)

    return (
        <div className="todos-list">
        <h1>Lista de tarefas</h1>
        <ul>
            {
                !todos.length ? (
                    <p>Lista vazia</p>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id}>
                            <input 
                                type="checkbox" 
                                onClick={() => completeTask(todo.id)} 
                            />

                            <span 
                                style={{ 
                                    textDecoration: 
                                        todo.completed && "line-through" 
                                }}>
                                { todo.task }
                            </span>
                            
                            <button 
                                onClick={() => deleteTodo(todo.id)} 
                                type="button"
                            >excluir</button>
                        </li>
                    ))
                )
            }
        </ul>
    </div>
    )
}