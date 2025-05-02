import { ThemeToggle } from "@/components/theme-toggle"
import KanbanBoard from "@/components/kanban-board"

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <KanbanBoard />
    </main>
  )
}
