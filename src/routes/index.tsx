import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Achievements,
  Contact,
  Footer,
  Quote,
  ScreenWork,
  Services,
} from "@/components/site/Sections";

const title = "Nayera Saeed Ahmed | Presenter & Voice-Over Artist";
const description =
  "Nayera Saeed Ahmed, TV presenter, professional voice-over artist and language editor based in Cairo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // Cursor spotlight follows the pointer.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div className="spotlight" aria-hidden />
      <Header />
      <main id="top" className="relative z-[2]">
        <Hero />
        <ScreenWork />
        <About />
        <Services />
        <Achievements />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
