import type { ReactNode } from "react";
import { Eyebrow } from "./ui";
import { AccentTitle } from "./Hero";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  /** One phrase of the title in the serif italic. */
  accent?: string;
  body?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const Tag = as;
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className={`${eyebrow ? "mt-3" : ""} ${as === "h2" ? "text-[28px] sm:text-[36px]" : "text-xl sm:text-[22px]"}`}>
        <AccentTitle title={title} accent={accent} />
      </Tag>
      {body ? <div className="mt-4 max-w-[40em] text-base text-graphite sm:text-lg">{body}</div> : null}
    </div>
  );
}
