"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import { TaskDialog } from "@/components/task-dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { assignees } from "@/lib/assignees";

type Task = { id: number; title: string; description: string; assignee: string; status: string };

type TaskCardProps = {
  task: Task;
  onEdit?: (updated: Task) => void;
};

export default function TaskCard({ task, onEdit }: TaskCardProps) {
  const [assignee, setAssignee] = useState(task.assignee);
  const [editOpen, setEditOpen] = useState(false);
  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <Card className="border-primary/30 bg-white dark:bg-neutral-950 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50">{task.title}</span>
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7">
              {(() => {
                const found = assignees.find(a => a.name === assignee);
                if (found) {
                  return <img src={found.avatar} alt={found.name} className="h-7 w-7 rounded-full object-cover" />;
                }
                return <AvatarFallback>{initials(assignee)}</AvatarFallback>;
              })()}
            </Avatar>
            <Select value={assignee} onValueChange={setAssignee}>
              <SelectTrigger className="w-[100px] h-7 text-xs">
                <SelectValue placeholder="Assignee" />
              </SelectTrigger>
              <SelectContent>
                {assignees.map((a) => (
                  <SelectItem key={a.name} value={a.name} className="text-xs flex items-center gap-2">
                    <img src={a.avatar} alt={a.name} className="h-5 w-5 rounded-full inline-block mr-2" />
                    {a.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setEditOpen(true)}>
                  Edit
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <TaskDialog
              trigger={<span />}
              initialValues={{
                title: task.title,
                description: task.description,
                assignee: task.assignee,
              }}
              onSubmit={(values) => {
                if (onEdit) onEdit({ ...task, ...values });
                setEditOpen(false);
              }}
              open={editOpen}
              onOpenChange={setEditOpen}
            />
          </div>
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">
          {task.description}
        </div>
      </CardContent>
    </Card>
  );
} 