import Link from "next/link"

import { getProjects } from "@/lib/projects"

export function Projects() {
  const projects = getProjects()

  return (
    <div id="projects" className="my-8 flex flex-col gap-4">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group flex flex-col transition-colors"
        >
          <div className="flex w-full gap-4">
            <p className="w-14 shrink-0 text-sm tabular-nums text-muted-foreground transition-colors group-hover:text-link sm:w-[100px]">
              {project.year}
            </p>
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-link">
                {project.title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-link">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
