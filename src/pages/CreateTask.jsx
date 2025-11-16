import React from "react";
import TaskForm from "../components/TaskForm";

export default function CreateTask({ onAdd }) {
    function handleSubmit(form) {
        onAdd({
            id: Date.now(),
            ...form,
        });
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Create Task</h2>
            <TaskForm onSubmit={handleSubmit} />
        </div>
    );
}
