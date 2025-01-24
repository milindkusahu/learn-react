import { useState } from "react";

const ToDoApp = () => {
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleTodo = () => {
    if (input.trim()) {
      setTodoItems([...todoItems, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const filteredTodo = todoItems.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setTodoItems(filteredTodo);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold mt-8">To Do Board</h1>
      <div className="flex gap-2 items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add a Task"
          type="text"
          className="border-2 border-amber-300 rounded-lg mt-10 px-4 py-2"
        />
        <button
          onClick={handleTodo}
          className="mt-10 px-5 py-4 bg-amber-300 rounded-lg hover:bg-amber-400 transition-colors text-gray-600 cursor-pointer"
        >
          Add
        </button>
      </div>
      <div className="flex gap-10 justify-center items-center flex-wrap w-full mt-18">
        {todoItems.map((item, index) => (
          <div
            key={index}
            className="min-h-16 border-2 border-amber-400 rounded-lg p-8 mb-4"
          >
            {item} <br />
            <br />
            <button
              onClick={() => handleDelete(index)}
              className="mt-10 px-5 py-4 bg-red-300 rounded-lg hover:bg-red-400 transition-colors text-gray-600 text-2xl cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;
