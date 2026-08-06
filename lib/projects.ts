import fs from "fs"
import path from "path"

import { parseProjectDate, readMarkdownDirectory, readMarkdownFile } from "@/lib/content"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  slug: string
  date: string
  year: string
  title: string
  description: string
  stack: string[]
  href?: string
  repo?: string
  content: string
}

export type ProjectMeta = Omit<Project, "content">

function parseStack(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).map((item) => item.trim()).filter(Boolean)
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return []
}

function parseProjectFile(slug: string): Project {
  const { data, content } = readMarkdownFile(`projects/${slug}.md`)

  const dateRaw = data.date ?? data.year

  if (!dateRaw) {
    throw new Error(`Project "${slug}" is missing frontmatter date or year`)
  }

  const parsedDate = parseProjectDate(String(dateRaw))

  return {
    slug,
    date: String(dateRaw),
    year: String(parsedDate.getUTCFullYear()),
    title: data.title,
    description: data.description,
    stack: parseStack(data.stack),
    href: data.href,
    repo: data.repo,
    content: content.trim(),
  }
}

function compareProjects(a: ProjectMeta, b: ProjectMeta): number {
  const dateDiff =
    parseProjectDate(b.date).getTime() - parseProjectDate(a.date).getTime()

  if (dateDiff !== 0) {
    return dateDiff
  }

  return a.title.localeCompare(b.title, "ru")
}

export function getProjectSlugs(): string[] {
  return readMarkdownDirectory("projects")
}

export function getProjects(): ProjectMeta[] {
  return getProjectSlugs()
    .map((slug) => {
      const { content: _, ...meta } = parseProjectFile(slug)
      return meta
    })
    .sort(compareProjects)
}

export function getProject(slug: string): Project | undefined {
  const filePath = path.join(projectsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  return parseProjectFile(slug)
}
