import { createContext, useContext, useEffect, useState } from "react";
import type { Todos } from "../module";

type TodosProviderProps = {
    children: React.ReactNode;
}

type TodosContextType = {
    todos: Todos[],
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const useTodos = () => {
    const context = useContext(TodosContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodosProvider");
    }
    return context;
};

const fetchStoredTodo = () => {
    let data = localStorage.getItem("taskify-todos");
    return data ? JSON.parse(data) : [];
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {

    const [todos, setTodos] = useState<Todos[]>(fetchStoredTodo);

    useEffect(() => {
        localStorage.setItem("taskify-todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}