import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const mockTasks = [
  { id: 1, title: "Design homepage", status: "Todo" },
  { id: 2, title: "Set up database", status: "In Progress" },
  { id: 3, title: "Write documentation", status: "Done" },
  { id: 4, title: "Implement login", status: "Todo" },
  { id: 5, title: "API integration", status: "In Progress" },
  { id: 6, title: "Deploy to Vercel", status: "Done" },
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
                <Card key={task.id} className="border-primary/30 bg-white dark:bg-neutral-950">
                  <CardContent className="p-4 text-base font-medium">{task.title}</CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
} 