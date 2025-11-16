import React from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ tasks, onDelete }) {
    return (
        <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full bg-white shadow text-center min-w-[700px]">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3 border">Title</th>
                        <th className="p-3 border">Description</th>
                        <th className="p-3 border">Priority</th>
                        <th className="p-3 border">Status</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className="border-b">
                            <td className="p-3 font-medium border">{task.title}</td>
                            <td className="p-3 text-gray-700 border">{task.description || "—"}</td>

                            <td className="p-3 border">
                                <span
                                    className={task.priority === "High" ? "text-red-600 font-semibold" : task.priority === "Medium" ?
                                        "text-yellow-600 font-semibold" : "text-green-600 font-semibold"}>{task.priority}
                                </span>
                            </td>

                            <td className="p-3 border">
                                <span
                                    className={task.status === "Completed" ? "text-green-700 font-medium" : "text-blue-700 font-medium"}>{task.status}
                                </span>
                            </td>

                            <td className="p-3 space-x-3 border">
                                <Link to={`/edit/${task.id}`} className="text-blue-600 hover:underline">
                                    Edit
                                </Link>

                                <button onClick={() => onDelete(task.id)} className="text-red-600 hover:underline"> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
