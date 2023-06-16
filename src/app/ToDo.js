"use client";
import { useState, useRef } from "react";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import {
  hasValidateAdd,
  hasValidateEdit,
} from "../utils/validations/validations";
export default function ToDo() {
  // Hooks
  // For useState we have the const [value, setValue] = useState(initialValue)
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputTitleRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const onSaveTask = () => {
    if (hasValidateAdd(tasks, title, description)) {
      let newTasks = [...tasks];
      newTasks.push({
        id: tasks.length + 1,
        title,
        description,
      });
      setTasks(newTasks);
      clearFields();
    }
  };

  const onEditTask = () => {
    if (hasValidateEdit(tasks, title, description, id)) {
      let newTasks = [...tasks];
      newTasks.map((task) => {
        if (task.id === id) {
          task.title = title;
          task.description = description;
        }
      });
      setTasks(newTasks);
      clearFields();
    }
  };

  const onDeleteTask = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    clearFields();
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
    setIsEditing(false);
  };

  const setFields = (id) => {
    setIsEditing(true);
    let editingTask = tasks.find((task) => task.id === id);
    setTitle(editingTask.title);
    setDescription(editingTask.description);
    setId(id);
  };

  return (
    <div className="container mx-auto">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="title"
      >
        Title *
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="Title"
        value={title}
        ref={inputTitleRef}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        Description *
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        type="text"
        placeholder="Description"
        value={description}
        ref={inputDescriptionRef}
        onChange={(event) => setDescription(event.target.value)}
      />
      {!isEditing ? (
        <button
          className="btn bg-green-500 text-white px-4 py-2 rounded my-2"
          onClick={onSaveTask}
        >
          Add
        </button>
      ) : (
        <button
          className="btn bg-green-500 text-white px-4 py-2 rounded my-2"
          onClick={onEditTask}
        >
          Save Change
        </button>
      )}

      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          {...task}
          onDeleteTask={onDeleteTask}
          setFields={setFields}
        />
      ))}
    </div>
  );
}
