import React from "react";

const TodoItem = ({
  tasks,
  editId,
  editInput,
  setEditInput,
  startEdit,
  saveEdit,
  deleteTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="todo-item">
          {editId === task.id ? (
            <>
              <input
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => saveEdit(task.id)}>✅ </button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <div className="btn-group">
                <button onClick={() => startEdit(task.id, task.title)}>
                  ✏️
                </button>
                <button onClick={() => deleteTask(task.id)}>❌</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
