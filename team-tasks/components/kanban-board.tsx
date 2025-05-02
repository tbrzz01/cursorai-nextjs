"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TaskCard from "@/components/task-card";
import { TaskDialog } from "@/components/task-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: string;
};

const initialTasks = [
  { id: 1, title: "Design homepage", description: "Create the main landing page.", assignee: "Alice", status: "Todo" },
  { id: 2, title: "Set up database", description: "Initialize PostgreSQL instance.", assignee: "Bob", status: "In Progress" },
  { id: 3, title: "Write documentation", description: "Document API endpoints.", assignee: "Charlie", status: "Done" },
  { id: 4, title: "Implement login", description: "OAuth2 with Google.", assignee: "Alice", status: "Todo" },
  { id: 5, title: "API integration", description: "Connect frontend to backend.", assignee: "Bob", status: "In Progress" },
  { id: 6, title: "Deploy to Vercel", description: "Production deployment.", assignee: "Charlie", status: "Done" },
];

const columns = [
  { key: "Todo", label: "Todo" },
  { key: "In Progress", label: "In Progress" },
  { key: "Done", label: "Done" },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleCreateTask(newTask: Task) {
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now(), status: "Todo" },
    ]);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Kanban Board</h2>
        <TaskDialog
          trigger={<Button variant="default">+ New Task</Button>}
          onSubmit={handleCreateTask}
        />
      </div>
      <div className="flex gap-6 w-full">
        {columns.map((column) => (
          <div key={column.key} className="flex-1 min-w-[250px]">
            <Card className="bg-neutral-50 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-lg">{column.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {tasks.filter((task) => task.status === column.key).map((task) => (
                  <TaskCard key={task.id} task={task} onEdit={(updated) => setTasks(tasks.map(t => t.id === updated.id ? { ...t, ...updated } : t))} />
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
} 