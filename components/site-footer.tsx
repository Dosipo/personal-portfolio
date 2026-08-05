import { site } from "@/lib/site"

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

const footerLinks = [
  { href: `mailto:${site.links.email}`, label: "почта", external: false },
  { href: site.links.telegram, label: "телеграм", external: true },
  { href: site.links.github, label: "github", external: true },
] as const

export function SiteFooter() {
  return (
    <footer id="contact" className="mb-16 scroll-mt-8">
      <ul className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-4">
        {footerLinks.map((item) => (
          <li key={item.label}>
            <a
              className="flex items-center gap-2 transition-colors hover:text-link"
              href={item.href}
              rel={item.external ? "noopener noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              <ArrowIcon />
              <span className="h-7 leading-7">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-muted-foreground">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
