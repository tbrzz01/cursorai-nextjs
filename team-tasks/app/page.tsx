import { ThemeToggle } from "@/components/theme-toggle"
import { Welcome } from "@/components/welcome"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181b]">
      <ThemeToggle />
      <div className="pt-16">
        <Welcome />
      </div>
    </div>
  )
}
