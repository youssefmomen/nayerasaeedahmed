import { useEffect, useRef } from "react";
import { heroPhoto, person } from "@/content/site";
import { MagnetButton } from "./MagnetButton";
import { PhotoFrame } from "./PhotoFrame";

const BARS = 64;

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  // Decorative waveform that swells under the cursor (visual only, no audio).
  useEffect(() => {
    const hero = heroRef.current;
    const wave = waveRef.current;
    const photo = photoRef.current;
    if (!hero || !wave || !photo) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bars = Array.from(wave.children) as HTMLElement[];
    let mouseX = -1;
    let inHero = false;
    let t = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = wave.getBoundingClientRect();
      mouseX = (e.clientX - r.left) / r.width;
      inHero = true;
      const pr = photo.getBoundingClientRect();
      photo.style.setProperty("--ty", `${(((e.clientX - pr.left) / pr.width - 0.5) * 8).toFixed(2)}deg`);
      photo.style.setProperty("--tx", `${(-((e.clientY - pr.top) / pr.height - 0.5) * 8).toFixed(2)}deg`);
    };
    const onLeave = () => {
      inHero = false;
      photo.style.setProperty("--tx", "0deg");
      photo.style.setProperty("--ty", "0deg");
    };

    const frame = () => {
      t += 0.03;
      bars.forEach((bar, i) => {
        const p = i / (BARS - 1);
        const idle = 0.25 + 0.2 * Math.sin(t + i * 0.45) * Math.sin(t * 0.5 + i * 0.2) ** 2;
        let boost = 0;
        if (inHero && mouseX >= 0) {
          const d = p - mouseX;
          boost = 0.7 * Math.exp(-(d * d) / 0.004);
        }
        bar.style.setProperty("--h", `${(Math.min(1, idle + boost) * 100).toFixed(1)}%`);
        bar.classList.toggle("bg-rec", boost > 0.35);
        bar.classList.toggle("bg-foreground", boost <= 0.35);
      });
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={heroRef} id="hero" className="wrap relative pb-[110px] pt-20">
      <div className="mb-9 flex items-center gap-3 text-[0.9rem] text-muted-foreground">
        <span className="rec-pulse size-2.5 shrink-0 rounded-full bg-rec" />
        Available for voice-over and on-air work
      </div>
      <h1 className="text-[clamp(4.5rem,14vw,12rem)]">
        {person.first}
        <br />
        <span className="text-muted-foreground">{person.rest}</span>
      </h1>

      <div ref={waveRef} aria-hidden className="mt-11 flex h-[110px] items-center gap-1">
        {Array.from({ length: BARS }, (_, i) => (
          <span key={i} className="wave-span min-h-1 flex-1 rounded-[3px] bg-foreground" />
        ))}
      </div>

      <div className="mt-[60px] grid items-end gap-12 min-[901px]:grid-cols-[1.1fr_0.9fr] min-[901px]:gap-14">
        <div>
          <p className="max-w-[34ch] text-xl">
            TV presenter, professional voice-over artist and language editor. Clear on screen,
            precise on the mic, careful with every word.
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <MagnetButton href="#screen">See my work</MagnetButton>
            <MagnetButton href="#contact" ghost>
              Book a session
            </MagnetButton>
          </div>
        </div>
        <div ref={photoRef} className="tilt">
          <PhotoFrame photo={heroPhoto} className="aspect-[4/5] rounded-sm" />
        </div>
      </div>
    </div>
  );
}
