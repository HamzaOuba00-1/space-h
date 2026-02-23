import { Link } from "react-router-dom";
import { Seo } from "@/shared/components/Seo/Seo";

export function NotFoundPage() {
  return (
    <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
      <Seo title="Hamza Space — 404" description="Page introuvable." />
      <h1>404 — Page introuvable</h1>
      <p>Cette route n’existe pas (ou plus).</p>
      <Link to="/">← Retour à l’accueil</Link>
    </main>
  );
}