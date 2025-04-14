import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Try from "./components/try";

function App() {
  const [tasks, setTasks] = useState([]);  //for set task in list
  const [input, setInput] = useState("");  //for taking input (newtaks addtask)
  const [editId, setEditId] = useState(null); //when edit task- take edit id
  const [editInput, setEditInput] = useState(""); //for edited input

  const fetchTasks = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {  //add task
    if (input.trim()==="") return;
    const newTask = {
      id: Date.now(), //for unique id
      title: input
    };
    setTasks([newTask, ...tasks]);         
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (id, currentTitle) => {
    setEditId(id);
    setEditInput(currentTitle);
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editInput } : task
      )
    );
    setEditId(null);
    setEditInput("");
  };

  return (
    <div className="app-container">
      <h2>Todo List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TodoItem
        tasks={tasks}
        editId={editId}
        editInput={editInput}
        setEditInput={setEditInput}
        startEdit={startEdit}
        saveEdit={saveEdit}
        deleteTask={deleteTask}
      />

      <Try/>
      
    </div>
  );
}

export default App;
