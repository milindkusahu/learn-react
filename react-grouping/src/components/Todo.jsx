import { useState } from "react";

function groupBy(array, key) {
  return array.reduce((result, item) => {
    // Get the group key value
    const groupKey = typeof key === "function" ? key(item) : item[key];

    // If this key doesn't exist yet, create it
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Add the item to its group
    result[groupKey].push(item);

    return result;
  }, {});
}

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("High");

  const groupedTasks = groupBy(tasks, "priority");

  console.log(groupedTasks);

  const handleAddTask = () => {
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      priority: newTaskPriority,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  return (
    <>
      {/* Task input form */}
      <div className="task-form">
        <input
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          type="text"
          placeholder="Enter new task"
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div>
          <button onClick={handleAddTask} className="btn">
            Add Task
          </button>
        </div>
      </div>

      <div className="task-groups">
        {["High", "Medium", "Low"].map((priority) => (
          <div key={priority}>
            <h4>
              {priority === "High" && "🔴"}
              {priority === "Medium" && "🟠"}
              {priority === "Low" && "🟢"}
              {`${priority} Priority (${groupedTasks[priority]?.length || 0})`}
            </h4>

            <div className="tasks">
              {groupedTasks[priority]?.map((task) => (
                <div key={task.id} className="task-item">
                  {task.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
