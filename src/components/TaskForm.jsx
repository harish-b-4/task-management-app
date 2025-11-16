import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm({ defaultValues = {}, onSubmit }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: defaultValues.title || "",
        description: defaultValues.description || "",
        priority: defaultValues.priority || "Medium",
        status: defaultValues.status || "Pending",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.title.trim()) return alert("Title is required");
        onSubmit(form);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-lg space-y-4">
            
            <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter task title" />
            </div>

            
            <div>
                <label className="block font-medium mb-1">Description</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 h-24"
                    placeholder="Enter task description" />
            </div>

            
            <div>
                <label className="block font-medium mb-1">Priority</label>
                <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            
            <div>
                <label className="block font-medium mb-1">Status</label>
                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2">
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
            </div>

            
            <div className="flex gap-3">
                <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">Save Task
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700">Cancel
                </button>
            </div>
        </form>
    );
}
