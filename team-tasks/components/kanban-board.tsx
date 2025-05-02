import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TaskCard from "@/components/task-card";

const mockTasks = [
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
  return (
    <div className="flex gap-6 w-full">
      {columns.map((column) => (
        <div key={column.key} className="flex-1 min-w-[250px]">
          <Card className="bg-neutral-50 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg">{column.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {mockTasks.filter((task) => task.status === column.key).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
} 