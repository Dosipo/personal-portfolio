import type { MetadataRoute } from "next"

import { parseProjectDate } from "@/lib/content"
import { getProjects } from "@/lib/projects"
import { getSiteUrl } from "@/lib/url"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const projects = getProjects()

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: parseProjectDate(project.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
