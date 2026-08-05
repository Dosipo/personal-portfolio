"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="hover:bg-transparent hover:text-link"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
