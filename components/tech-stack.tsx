import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { getSite } from "@/lib/site"

const stack = [
  {
    name: "shadcn/ui",
    src: "/stack/shadcn.png",
    fallback: "UI",
    description: "Библиотека UI-компонентов для React",
  },
  {
    name: "Langfuse",
    src: "/stack/langfuse.png",
    fallback: "LF",
    description: "Observability и трейсинг LLM-приложений",
  },
  {
    name: "LangGraph",
    src: "/stack/langgraph.svg",
    fallback: "LG",
    description: "Оркестрация агентов и AI-воркфлоу",
  },
  {
    name: "Grafana",
    src: "/stack/grafana.svg",
    fallback: "GF",
    description: "Мониторинг и дашборды метрик",
  },
  {
    name: "n8n",
    src: "/stack/n8n.svg",
    fallback: "n8",
    description: "Автоматизация процессов и интеграции",
  },
  {
    name: "Vercel",
    src: "/stack/vercel.svg",
    fallback: "▲",
    description: "Хостинг и деплой веб-приложений",
  },
] as const

export function TechStack() {
  const site = getSite()

  return (
    <div className="mt-12 flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">{site.labels.stack}</p>
      <ul className="flex flex-col gap-4">
        {stack.map((item) => (
          <li key={item.name} className="flex items-start gap-3">
            <Avatar size="sm" className="mt-0.5">
              <AvatarImage
                src={item.src}
                alt=""
                className="bg-white object-contain p-1 dark:bg-zinc-100"
              />
              <AvatarFallback>{item.fallback}</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-sm font-medium tracking-tight text-foreground">
                {item.name}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
