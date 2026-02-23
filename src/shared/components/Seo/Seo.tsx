import { useEffect } from "react";
import faviconPng from "@/assets/me.png";

type SeoProps = {
  title: string;
  description?: string;
};

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, type?: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  if (type) el.setAttribute("type", type);
  el.setAttribute("href", href);
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    if (description && description.trim().length > 0) {
      upsertMetaByName("description", description);
    }

    upsertLink("icon", faviconPng, "image/png");
    upsertLink("shortcut icon", faviconPng);
  }, [title, description]);

  return null;
}