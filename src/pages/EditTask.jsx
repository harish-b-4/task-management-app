import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function EditTask({ tasks, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => String(t.id) === String(id));

  if (!task) return <div>Task not found</div>;

  function handleSubmit(form) {
    onUpdate({ ...task, ...form });
    navigate("/");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      <TaskForm defaultValues={task} onSubmit={handleSubmit} />
    </div>
  );
}
