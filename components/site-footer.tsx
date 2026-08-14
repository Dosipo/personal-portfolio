import { getSite } from "@/lib/site"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SiteFooter() {
  const site = getSite()

  const footerLinks = [
    {
      href: `mailto:${site.links.email}`,
      label: site.labels.email,
      external: false,
    },
    {
      href: site.links.telegram,
      label: site.labels.telegram,
      external: true,
    },
  ] as const

  return (
    <footer
      id="contact"
      className="mt-16 scroll-mt-8 border-t border-border pt-6 pb-16"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">{site.labels.proBono}</p>
          <p className="text-[15px] leading-7 text-muted-foreground">
            {site.labels.proBonoText}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="shrink-0">
            {new Date().getFullYear()} {site.name}
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-link"
                  href={item.href}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  <ArrowIcon />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
