import { MarkdownContent } from "@/components/markdown-content"
import { Projects } from "@/components/projects"
import { getSite } from "@/lib/site"

export default function Page() {
  const site = getSite()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {site.title}
      </h1>
      <div className="mb-4 flex flex-col gap-4">
        <MarkdownContent content={site.content} />
      </div>
      <Projects />
    </section>
  )
}
