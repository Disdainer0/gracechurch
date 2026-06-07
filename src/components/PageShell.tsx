import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  children,
  headerOverlay = false,
}: {
  children: ReactNode;
  headerOverlay?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header overlay={headerOverlay} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
