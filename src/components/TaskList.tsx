import React from 'react';
import type { Todos } from '../module';
import Task from './Task';
import { useTodos } from '../contexts/TodoContext';

type TaskListProps = {
  handleUpdateTodo: (item: Todos) => void;
  handleDeleteTodo: (todoId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ handleUpdateTodo, handleDeleteTodo }) => {

  const { todos } = useTodos();

  return (
    <div className="task-list">
      {todos.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one above.</p>
      ) : (
        todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </div>
  )
}

export default TaskList
