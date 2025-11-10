import React from 'react';
import Header from './components/Header';
import "./App.css";
import AddTaskInput from './components/AddTaskInput';
import TaskList from './components/TaskList';
import type { Todos } from './module';
import { v4 as uuidv4 } from 'uuid';
import { useTodos } from './contexts/TodoContext';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {

  const { setTodos } = useTodos();
  const { isDarkTheme } = useTheme();

  const handleAddTodo = (task: string) => {
    setTodos((todos) => [...todos, { id: uuidv4(), task: task, isDone: false }]);
  }

  const handleUpdateTodo = (item: Todos) => {
    setTodos((todos) => {
      return (
        todos.map((todo) => {
          return todo.id === item.id ? item : todo;
        })
      )
    })
  }

  const handleDeleteTodo = (todoId: string) => {
    setTodos((todos) => {
      return (
        todos.filter((todo) => todo.id !== todoId)
      )
    })
  }

  return (
    <div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Header />
      <AddTaskInput handleAddTodo={handleAddTodo} />
      <TaskList handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default App
