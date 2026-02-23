import { Helmet } from "react-helmet-async";
import faviconPng from "@/assets/me.png";

type SeoProps = {
  title: string;
  description?: string;
};

export function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <link key="favicon" rel="icon" type="image/png" href={faviconPng} />
      <link key="shortcut" rel="shortcut icon" href={faviconPng} />
    </Helmet>
  );
}