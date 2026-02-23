import { useMemo } from "react";
import { marked } from "marked";
import { sanitizeHtml } from "@/shared/lib/sanitizeHtml";

type MarkdownProps = {
  markdown: string;
};

export function Markdown({ markdown }: MarkdownProps) {
  const safeHtml = useMemo(() => {
    const rawHtml = marked.parse(markdown, {
      gfm: true,
      breaks: false,
    }) as string;

    return sanitizeHtml(rawHtml);
  }, [markdown]);

  return <div className="prose-space" dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}