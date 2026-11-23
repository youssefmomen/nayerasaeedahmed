import { achievementPhotos, awards, facts, person, screenWork, services } from "@/content/site";
import { cn } from "@/lib/utils";
import { PhotoFrame } from "./PhotoFrame";

function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("relative z-[2] border-t border-border py-[88px] min-[901px]:py-[120px]", className)}>
      {children}
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[26px] inline-flex items-center gap-2.5 text-[0.9rem] text-muted-foreground">
      <span className="size-2.5 rounded-full bg-rec" />
      {children}
    </div>
  );
}

const h2 = "text-[clamp(3.2rem,8vw,7rem)]";

function Reel({ item, tall }: { item: (typeof screenWork)[number]; tall?: boolean }) {
  return (
    <article>
      <PhotoFrame photo={item.photo} className={tall ? "aspect-[4/5]" : "aspect-video"} />
      <div className="mt-[18px] flex items-baseline justify-between gap-5">
        <div>
          <h3 className="text-[1.9rem]">{item.title}</h3>
          <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{item.text}</p>
        </div>
        <span className="whitespace-nowrap text-[0.85rem] text-muted-foreground">{item.tag}</span>
      </div>
    </article>
  );
}

export function ScreenWork() {
  const [a, b, c, d] = screenWork;
  return (
    <Section id="screen">
      <div className="wrap">
        <Kicker>Screen work</Kicker>
        <h2 className={h2}>On camera.</h2>
        <div className="mt-[70px] grid gap-6 md:grid-cols-[1.5fr_1fr]">
          {a && <Reel item={a} />}
          {b && <Reel item={b} tall />}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {c && <Reel item={c} tall />}
          {d && <Reel item={d} tall />}
        </div>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="wrap grid items-start gap-12 min-[901px]:grid-cols-2 min-[901px]:gap-20">
        <div>
          <Kicker>About</Kicker>
          <h2 className={h2}>Presence, precision.</h2>
        </div>
        <div>
          <p className="text-[1.4rem] font-normal leading-[1.45]">
            Nayera works across broadcast and live media: on-air presenting, field reporting,
            cultural hosting, and voice-over for narration and advertising.
          </p>
          <p className="mt-[26px] text-muted-foreground">
            Her command of Standard Arabic and clear elocution keep every piece polished. She also
            brings an editorial eye to scripts, reviewing and coaching language so every word lands
            as intended.
          </p>
          <dl className="mt-12 border-t border-border">
            {facts.map((f) => (
              <div key={f.dt} className="flex justify-between gap-5 border-b border-border py-[18px]">
                <dt className="text-muted-foreground">{f.dt}</dt>
                <dd className="text-right font-medium">{f.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <div className="wrap">
        <Kicker>Achievements</Kicker>
        <h2 className={h2}>Selected wins.</h2>
        <div className="mt-[70px] grid grid-cols-2 gap-4 min-[901px]:grid-cols-[1.4fr_1fr_1fr]">
          {achievementPhotos.map((p, i) => (
            <figure
              key={i}
              className={cn("group", i === 0 ? "col-span-2 aspect-[4/5] min-[901px]:col-span-1 min-[901px]:aspect-auto" : "aspect-[4/5]")}
            >
              <PhotoFrame photo={p} className="h-full" imgClassName="gallery-tone" />
            </figure>
          ))}
        </div>
        <div className="mt-[70px] border-t border-border">
          {awards.map((a) => (
            <article
              key={a.title}
              className="grid gap-3 border-b border-border py-10 min-[901px]:grid-cols-[220px_1fr] min-[901px]:gap-10"
            >
              <div className="font-display text-[1.3rem] font-bold text-rec">{a.year}</div>
              <div>
                <h3 className={cn("mb-3", a.feature ? "text-[3rem]" : "text-[2.2rem]")}>{a.title}</h3>
                <p className="text-muted-foreground">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <div className="wrap">
        <Kicker>Services</Kicker>
        <h2 className={h2}>What I do.</h2>
        <div className="mt-[70px] grid border-t border-border min-[901px]:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="border-b border-border py-11 pr-9 transition-[padding] duration-300 hover:pl-3.5"
            >
              <h3 className="mb-3.5 text-[2rem]">{s.title}</h3>
              <p className="text-[0.97rem] text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Quote() {
  return (
    <Section>
      <div className="wrap">
        <blockquote className="font-display max-w-[18ch] text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.02em]">
          A good voice does not only speak. It makes people{" "}
          <span className="text-muted-foreground">stay.</span>
        </blockquote>
      </div>
    </Section>
  );
}

export function Contact() {
  const channels = [
    { label: "Email", value: person.email, href: `mailto:${person.email}` },
    { label: "Phone", value: person.phone, href: `tel:${person.phoneHref}` },
  ];
  return (
    <Section id="contact">
      <div className="wrap grid items-end gap-12 min-[901px]:grid-cols-[1.2fr_1fr] min-[901px]:gap-20">
        <div>
          <Kicker>Contact</Kicker>
          <h2 className={h2}>Let's record.</h2>
          <p className="mt-[26px] max-w-[40ch] text-muted-foreground">
            For presenting, voice-over, language editing, or hosting, reach out and I will reply
            within a few days.
          </p>
        </div>
        <div>
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className={cn(
                "flex items-center justify-between gap-5 break-all border-b border-border py-[26px] text-[1.3rem] font-medium no-underline transition-[color,padding] duration-300 hover:pl-2.5 hover:text-rec",
                i === 0 && "border-t",
              )}
            >
              <small className="text-[0.85rem] font-normal text-muted-foreground">{c.label}</small>
              {c.value}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-border py-9 text-[0.9rem] text-muted-foreground">
      <div className="wrap">© 2026 {person.name} · Cairo, Egypt</div>
    </footer>
  );
}
