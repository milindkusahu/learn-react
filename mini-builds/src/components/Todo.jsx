import { useState } from "react";

const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodoItem([...todoItem, { text: input, completed: false }]);
    }
    setInput("");
  };

  const deleteTodo = (index) => {
    const filteredTodo = todoItem.filter((_, idx) => index !== idx);
    setTodoItem(filteredTodo);
  };

  const toggleComplete = (id) => {
    setTodoItem(
      todoItem.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={addTodo}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Add Todo...."
          />
          <button type="submit">Add</button>
        </form>
      </div>
      {todoItem.map((item, index) => {
        return (
          <ul key={index}>
            <li
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => toggleComplete(index)}>Completed</button>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;
