import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type SectionProps = {
  id: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  labelledBy,
  className = "",
  children,
}: SectionProps) {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby={labelledBy}
      className={["section", "reveal", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section__inner">{children}</div>
    </section>
  );
}