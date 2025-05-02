'use client'

import { Button } from "@/components/ui/button"

export function Welcome() {
  return (
    <div className="bg-[#111110] border border-[#232323] rounded-lg p-6 w-full max-w-md mx-auto">
      <h1 className="text-white font-bold text-xl mb-2">Welcome</h1>
      <Button
        className="bg-white text-black rounded px-3 py-1 text-sm shadow-none hover:bg-gray-200 mt-2"
        variant="ghost"
      >
        Click me
      </Button>
    </div>
  )
} 