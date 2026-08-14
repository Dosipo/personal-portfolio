import { Children, isValidElement } from "react"
import Markdown from "react-markdown"

import { CaseMedia } from "@/components/case-media"

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              {children}
            </h1>
          ),
          p: ({ children }) => {
            const items = Children.toArray(children)
            const onlyMedia =
              items.length === 1 &&
              isValidElement(items[0]) &&
              items[0].type === CaseMedia

            if (onlyMedia) {
              return items[0]
            }

            return <p className="leading-relaxed text-foreground">{children}</p>
          },
          img: ({ src, alt, title }) => {
            if (!src || typeof src !== "string") {
              return null
            }

            return (
              <CaseMedia
                src={src}
                alt={alt ?? ""}
                caption={title}
                className="my-3"
              />
            )
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
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
            <h2 className="mt-3 text-sm font-semibold tracking-tight text-foreground first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground first:mt-0">
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
    </div>
  )
}
