import { MarkdownContent } from "@/components/markdown-content"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { getSite } from "@/lib/site"

export default function Page() {
  const site = getSite()

  return (
    <section>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">
        {site.title}
      </h1>
      <div className="mb-4 text-sm">
        <MarkdownContent content={site.content} />
      </div>
      <Projects />
      <TechStack />
    </section>
  )
}
