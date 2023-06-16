export const ToDoItem = (
  { id, title, description, onDeleteTask, setFields } ///...rest is fro spreading the lefts props into a new object
) => (
  <div className="container">
    <div className="flex">
      <div className="w-2/4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {title}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {description}
        </label>
      </div>
      <div className="w-2/4">
        <button className="btn bg-yellow-500 text-white px-4 py-2 rounded my-2">
          Start Task
        </button>
      </div>
    </div>
    <button
      className="btn bg-blue-500 text-white px-4 py-2 rounded my-2"
      onClick={() => setFields(id)}
    >
      Edit
    </button>
    <button
      className="btn bg-red-500 text-white px-4 py-2 rounded my-2"
      onClick={() => onDeleteTask(id)}
    >
      Delete
    </button>
  </div>
);
