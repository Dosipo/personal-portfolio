import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

export function readMarkdownFile(relativePath: string) {
  const filePath = path.join(contentDirectory, relativePath)
  const fileContents = fs.readFileSync(filePath, "utf8")

  return matter(fileContents)
}

export function readMarkdownDirectory(relativeDirectory: string) {
  const directoryPath = path.join(contentDirectory, relativeDirectory)

  return fs
    .readdirSync(directoryPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function parseProjectDate(raw: string): Date {
  const value = raw.trim()

  if (/^\d{4}$/.test(value)) {
    return new Date(`${value}-12-31T12:00:00.000Z`)
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(`${value}T12:00:00.000Z`)
  }

  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid project date: "${raw}"`)
  }

  return parsed
}
