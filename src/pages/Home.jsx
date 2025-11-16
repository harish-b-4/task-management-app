import React, { useState } from "react";
import TaskTable from "../components/TaskTable";

export default function Home({ tasks, onDelete }) {
    const [search, setSearch] = useState("");

    const filtered = tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                placeholder="Search tasks..."
                className="w-full p-2 mb-4 border rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TaskTable tasks={filtered} onDelete={onDelete} />
        </div>
    );
}
