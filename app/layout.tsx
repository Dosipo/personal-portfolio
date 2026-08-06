import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { getSite } from "@/lib/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
})

const site = getSite()

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn(
        "bg-background text-foreground antialiased",
        inter.variable,
        fontMono.variable
      )}
    >
      <body className="mx-4 mt-8 max-w-xl lg:mx-auto">
        <ThemeProvider>
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            <div className="-ml-2 mb-16 flex justify-end tracking-tight">
              <ThemeToggle />
            </div>
            {children}
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
