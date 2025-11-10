import React, { useEffect, useRef, useState } from 'react'
import type { Todos } from '../module'
import { MdEdit, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

type TaskProps = {
    todo: Todos;
    handleUpdateTodo: (item: Todos) => void;
    handleDeleteTodo: (todoId: string) => void;
};

const Task: React.FC<TaskProps> = ({ todo, handleUpdateTodo, handleDeleteTodo }) => {
    const taskInputRef = useRef<HTMLTextAreaElement>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        if (taskInputRef.current) {
            taskInputRef.current.value = todo.task;
        }
    }, [isEditing]);

    const handleSave = () => {
        if (taskInputRef.current && taskInputRef.current.value.trim() !== "") {
            const updatedTodo: Todos = { ...todo, task: taskInputRef.current.value };
            setIsEditing(false);
            handleUpdateTodo(updatedTodo);
        }
    };

    const handleMarkDone = () => {
        const updatedTodo: Todos = { ...todo, isDone: !todo.isDone };
        setIsEditing(false);
        handleUpdateTodo(updatedTodo);
    };

    return (
        <div className="task">
            <div className="task-left">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={todo.isDone}
                    onChange={handleMarkDone}
                />
                {isEditing ? (
                    <textarea
                        ref={taskInputRef}
                        className="task-input"
                        maxLength={100}
                        rows={2}
                    ></textarea>
                ) : (
                    <p className={`task-text ${todo.isDone ? "done" : ""}`}>{todo.task}</p>
                )}
            </div>

            <div className="task-actions">
                {isEditing ? (
                    <button className="btn save-btn" onClick={handleSave}>
                        <FaSave />
                    </button>
                ) : (
                    <button className="btn edit-btn" onClick={() => setIsEditing(true)}>
                        <MdEdit />
                    </button>
                )}
                <button className="btn delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Task;
