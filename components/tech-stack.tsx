import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { getSite } from "@/lib/site"

type StackTool = {
  name: string
  src: string
  fallback: string
}

type StackItem = {
  tools: StackTool[]
  description: string
}

const stack: StackItem[] = [
  {
    tools: [
      {
        name: "Cursor",
        src: "/stack/cursor.svg",
        fallback: "Cu",
      },
      {
        name: "Claude",
        src: "/stack/claude.svg",
        fallback: "Cl",
      },
      {
        name: "Codex",
        src: "/stack/codex.svg",
        fallback: "Cx",
      },
    ],
    description: "AI-инструменты для разработки",
  },
  {
    tools: [
      {
        name: "Langfuse",
        src: "/stack/langfuse.png",
        fallback: "LF",
      },
      {
        name: "LangGraph",
        src: "/stack/langgraph.svg",
        fallback: "LG",
      },
    ],
    description: "Observability и оркестрация LLM-агентов",
  },
  {
    tools: [
      {
        name: "Vercel",
        src: "/stack/vercel.svg",
        fallback: "▲",
      },
      {
        name: "Grafana",
        src: "/stack/grafana.svg",
        fallback: "GF",
      },
    ],
    description: "Деплой и мониторинг продакшена",
  },
  {
    tools: [
      {
        name: "shadcn/ui",
        src: "/stack/shadcn.png",
        fallback: "UI",
      },
    ],
    description: "Библиотека UI-компонентов для React",
  },
  {
    tools: [
      {
        name: "n8n",
        src: "/stack/n8n.svg",
        fallback: "n8",
      },
    ],
    description: "Автоматизация процессов и интеграции",
  },
]

export function TechStack() {
  const site = getSite()

  return (
    <div className="mt-12 flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">{site.labels.stack}</p>
      <ul className="flex flex-col gap-4">
        {stack.map((item) => {
          const title = item.tools.map((tool) => tool.name).join(" / ")

          return (
            <li key={title} className="flex items-start gap-3">
              <AvatarGroup className="mt-0.5 shrink-0">
                {item.tools.map((tool) => (
                  <Avatar key={tool.name}>
                    <AvatarImage
                      src={tool.src}
                      alt=""
                      className="bg-white object-contain p-1 dark:bg-zinc-100"
                    />
                    <AvatarFallback>{tool.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-medium tracking-tight text-foreground">
                  {title}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
