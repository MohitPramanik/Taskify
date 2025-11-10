import React, { useRef } from 'react'

type AddTaskInputProps = {
  handleAddTodo: (task: string) => void;
}

const AddTaskInput: React.FC<AddTaskInputProps> = ({ handleAddTodo }) => {
  const taskRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskRef.current && taskRef.current.value.trim() !== "") {
      handleAddTodo(taskRef.current.value.trim());
      taskRef.current.value = "";
      taskRef.current.focus();
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        ref={taskRef}
        className="add-task-input"
      />
      <button type="submit" className="add-task-btn">
        Add
      </button>
    </form>
  );
};

export default AddTaskInput;
