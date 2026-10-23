import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const Tag = as;
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className={`${eyebrow ? "mt-3" : ""} ${as === "h2" ? "text-[26px] sm:text-[32px]" : "text-xl sm:text-[22px]"}`}>{title}</Tag>
      {body ? <div className="mt-4 text-base text-wf-muted sm:text-[17px]">{body}</div> : null}
    </div>
  );
}
