import { Button } from "@/components/ui/button";

// Pill link that drifts slightly toward the pointer.
export function MagnetButton({
  href,
  ghost,
  children,
}: {
  href: string;
  ghost?: boolean;
  children: React.ReactNode;
}) {
  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--bx", `${((e.clientX - (r.left + r.width / 2)) * 0.2).toFixed(1)}px`);
    el.style.setProperty("--by", `${((e.clientY - (r.top + r.height / 2)) * 0.25).toFixed(1)}px`);
  };
  const leave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--bx", "0px");
    e.currentTarget.style.setProperty("--by", "0px");
  };
  return (
    <Button asChild variant={ghost ? "pillOutline" : "pill"} size="pill">
      <a href={href} onPointerMove={move} onPointerLeave={leave}>
        {children}
      </a>
    </Button>
  );
}
