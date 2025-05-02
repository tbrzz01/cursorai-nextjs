import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TaskCard from "@/components/task-card";
import { TaskDialog } from "@/components/task-dialog";
import { Button } from "@/components/ui/button";
import { getColumns, getTasks } from "@/lib/data";

export default async function KanbanBoard() {
  const columns = await getColumns();
  const tasks = await getTasks();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Kanban Board</h2>
        <TaskDialog
          trigger={<Button variant="default">+ New Task</Button>}
        />
      </div>
      <div className="flex gap-6 w-full">
        {columns.map((column) => (
          <div key={column.id} className="flex-1 min-w-[250px]">
            <Card className="bg-neutral-50 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle className="text-lg">{column.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {tasks.filter((task) => task.columnId === column.id).map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
} 