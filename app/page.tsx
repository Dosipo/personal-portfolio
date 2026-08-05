import { Projects } from "@/components/projects"
import { site } from "@/lib/site"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {site.title}
      </h1>
      <p className="mb-4">{site.pitch}</p>
      <Projects />
    </section>
  )
}
