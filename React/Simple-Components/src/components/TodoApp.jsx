import React, { useState } from "react";
import { Trash2, Edit2, Check, X } from "lucide-react";

const TodoApp = () => {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleClick = () => {
    if (input.trim()) {
      setItem([...item, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setItem(item.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(item[index]);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      const newItems = [...item];
      newItems[editIndex] = editText;
      setItem(newItems);
      setEditIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (editIndex !== null) {
        handleSaveEdit();
      } else {
        handleClick();
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {item.map((todoList, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <div className="flex gap-1">
                  <button
                    onClick={handleSaveEdit}
                    className="p-2 text-green-500 hover:text-green-700 rounded-full hover:bg-gray-100"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  >
                    <X size={18} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="break-all">{todoList}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(index)}
                    className="p-2 text-blue-500 hover:text-blue-700 rounded-full hover:bg-gray-100"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-gray-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
