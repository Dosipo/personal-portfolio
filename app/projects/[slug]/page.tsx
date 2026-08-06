import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRightIcon, CodeIcon } from "lucide-react"

import { ProjectMarkdown } from "@/components/project-markdown"
import { buttonVariants } from "@/components/ui/button"
import { getProject, getProjectSlugs } from "@/lib/projects"
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

function MetaRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <p className="w-28 shrink-0 text-sm text-muted-foreground">{label}</p>
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
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
        ← назад
      </Link>

      <h1 className="title mb-2 text-2xl font-semibold tracking-tighter">
        {project.title}
      </h1>
      <p className="mb-8 text-sm tabular-nums text-muted-foreground">
        {project.year}
      </p>

      <div className="mb-10 flex flex-col gap-4 border-b border-border pb-8">
        <MetaRow label="Описание">{project.description}</MetaRow>
        <MetaRow label="Роль">{project.role}</MetaRow>
        <MetaRow label="Результат">{project.result}</MetaRow>
      </div>

      <div className="flex flex-col gap-4">
        <ProjectMarkdown content={project.content} />
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
            Сайт
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
            Код
          </a>
        ) : null}
      </div>
    </section>
  )
}
