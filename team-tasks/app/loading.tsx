import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Kanban Board</h2>
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
      <div className="flex gap-6 w-full">
        {[1, 2, 3].map((col) => (
          <div key={col} className="flex-1 min-w-[250px]">
            <Card className="bg-neutral-50 dark:bg-neutral-900">
              <CardHeader>
                <Skeleton className="h-6 w-24 rounded" />
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {[1, 2, 3].map((task) => (
                  <Card key={task} className="border-primary/30 bg-white dark:bg-neutral-950">
                    <CardContent className="p-4 flex gap-4 items-center">
                      <Skeleton className="h-7 w-7 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-2 rounded" />
                        <Skeleton className="h-3 w-48 rounded" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
} 