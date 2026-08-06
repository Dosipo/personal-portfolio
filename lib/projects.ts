import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  slug: string
  year: string
  title: string
  description: string
  role: string
  result: string
  href?: string
  repo?: string
  content: string
}

export type ProjectMeta = Omit<Project, "content">

function parseProjectFile(slug: string): Project {
  const filePath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    year: String(data.year),
    title: data.title,
    description: data.description,
    role: data.role,
    result: data.result,
    href: data.href,
    repo: data.repo,
    content: content.trim(),
  }
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getProjects(): ProjectMeta[] {
  return getProjectSlugs()
    .map((slug) => {
      const { content: _, ...meta } = parseProjectFile(slug)
      return meta
    })
    .sort((a, b) => Number(b.year) - Number(a.year))
}

export function getProject(slug: string): Project | undefined {
  const filePath = path.join(projectsDirectory, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  return parseProjectFile(slug)
}
