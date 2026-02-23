import { Outlet } from "react-router-dom";
import { Navbar } from "@/shared/layout/Navbar";
import { Container } from "@/shared/layout/Container";
import { Footer } from "@/shared/layout/Footer";

export function AppShell() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="py-10">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
  );
}