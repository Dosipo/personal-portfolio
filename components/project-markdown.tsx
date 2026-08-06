import Markdown from "react-markdown"

export function ProjectMarkdown({ content }: { content: string }) {
  return (
    <Markdown
      components={{
        p: ({ children }) => (
          <p className="leading-relaxed text-foreground">{children}</p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline-offset-4 hover:underline"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc space-y-1 pl-5 leading-relaxed text-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal space-y-1 pl-5 leading-relaxed text-foreground">
            {children}
          </ol>
        ),
        li: ({ children }) => <li>{children}</li>,
        h2: ({ children }) => (
          <h2 className="mt-8 text-lg font-semibold tracking-tight text-foreground">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground">
            {children}
          </h3>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-border pl-4 text-muted-foreground">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </Markdown>
  )
}
