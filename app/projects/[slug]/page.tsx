import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRightIcon, CodeIcon } from "lucide-react"

import { MarkdownContent } from "@/components/markdown-content"
import { buttonVariants } from "@/components/ui/button"
import { getProject, getProjectSlugs } from "@/lib/projects"
import { getSite } from "@/lib/site"
import { cn } from "@/lib/utils"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const site = getSite()
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <Link
        href="/#projects"
        className="mb-8 inline-block text-muted-foreground transition-colors hover:text-link"
      >
        {site.labels.back}
      </Link>

      <h1 className="title mb-2 text-2xl font-semibold tracking-tighter">
        {project.title}
      </h1>
      <p className="mb-8 text-sm tabular-nums text-muted-foreground">
        {project.year}
      </p>

      <div className="flex flex-col gap-4">
        <MarkdownContent content={project.content} />
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hover:border-link hover:text-link"
            )}
          >
            {site.labels.site}
            <ArrowUpRightIcon data-icon="inline-end" />
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hover:bg-transparent hover:text-link"
            )}
          >
            <CodeIcon data-icon="inline-start" />
            {site.labels.code}
          </a>
        ) : null}
      </div>
    </section>
  )
}
