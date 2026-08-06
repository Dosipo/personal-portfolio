import { readMarkdownFile } from "@/lib/content"

export type SiteLabels = {
  back: string
  description: string
  role: string
  result: string
  stack: string
  site: string
  code: string
  email: string
  telegram: string
}

export type Site = {
  name: string
  title: string
  description: string
  links: {
    email: string
    telegram: string
  }
  labels: SiteLabels
  content: string
}

export function getSite(): Site {
  const { data, content } = readMarkdownFile("site.md")

  return {
    name: data.name,
    title: data.title,
    description: data.description,
    links: {
      email: data.email,
      telegram: data.telegram,
    },
    labels: data.labels,
    content: content.trim(),
  }
}
