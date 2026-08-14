import { getProjects } from "@/lib/projects"
import { getSite } from "@/lib/site"
import { getSiteUrl } from "@/lib/url"

export function buildLlmsTxt() {
  const site = getSite()
  const projects = getProjects()
  const baseUrl = getSiteUrl()

  const projectLinks = projects
    .map(
      (project) =>
        `- [${project.title}](${baseUrl}/projects/${project.slug}): ${project.description}`
    )
    .join("\n")

  return `# ${site.name}

> ${site.description}

${site.content}

## Pages

- [Home](${baseUrl}): ${site.title}
- [llms.txt](${baseUrl}/llms.txt): This file

## Projects

${projectLinks}

## Contact

- Email: ${site.links.email}
- Telegram: ${site.links.telegram}

## ${site.labels.proBono}

${site.labels.proBonoText}
`
}
