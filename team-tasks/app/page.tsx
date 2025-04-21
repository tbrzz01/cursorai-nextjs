import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute right-3 top-3">
        <ThemeToggle />
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-semibold mb-2">Welcome</h1>
        <Button 
          className="h-7 rounded px-3 text-xs font-medium bg-accent hover:bg-accent/90"
          variant="secondary"
        >
          Click me
        </Button>
      </div>
    </div>
  )
}
