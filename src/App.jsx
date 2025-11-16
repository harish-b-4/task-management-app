import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import { getTasks, saveTasks } from "./utils/storage";

export default function App() {
  const [tasks, setTasks] = useState(() => getTasks());
  const navigate = useNavigate();

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function addTask(task) {
    setTasks((prev) => [task, ...prev]);
  }

  function updateTask(updated) {
    setTasks((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <header className="md:flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>

        <nav className="mt-8 md:mt-0">
          <Link to="/create" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> + Create Task </Link>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<Home tasks={tasks} onDelete={deleteTask} />} />

        <Route path="/create" element={<CreateTask onAdd={(task) => {
          addTask(task);
          navigate("/");
        }} />} />

        <Route path="/edit/:id" element={<EditTask tasks={tasks} onUpdate={updateTask} />} />
      </Routes>

    </div>
  );
}
