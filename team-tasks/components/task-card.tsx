"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";

const assignees = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
];

export default function TaskCard({ task }: { task: { id: number; title: string; description: string; assignee: string } }) {
  const [assignee, setAssignee] = useState(task.assignee);
  const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <Card className="border-primary/30 bg-white dark:bg-neutral-950 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-base font-semibold text-neutral-900 dark:text-neutral-50">{task.title}</span>
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarFallback>{initials(assignee)}</AvatarFallback>
            </Avatar>
            <Select value={assignee} onValueChange={setAssignee}>
              <SelectTrigger className="w-[100px] h-7 text-xs">
                <SelectValue placeholder="Assignee" />
              </SelectTrigger>
              <SelectContent>
                {assignees.map((a) => (
                  <SelectItem key={a.name} value={a.name} className="text-xs">
                    {a.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">
          {task.description}
        </div>
      </CardContent>
    </Card>
  );
} 