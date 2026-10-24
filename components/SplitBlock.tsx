import type { ReactNode } from "react";
import { Placeholder } from "./Placeholder";
import { SectionHeading } from "./SectionHeading";
import { Section } from "./ui";

/** Text on one side, labelled placeholder on the other. `flip` alternates sides. */
export function SplitBlock({
  id,
  eyebrow,
  title,
  body,
  placeholder,
  flip = false,
  fill = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  placeholder: string;
  flip?: boolean;
  fill?: boolean;
  children?: ReactNode;
}) {
  return (
    <Section id={id} fill={fill} label={eyebrow ?? title}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <Placeholder label={placeholder} ratio="aspect-[4/3]" />
        </div>
      </div>
    </Section>
  );
}

/** Small H3 blocks used inside a split block. */
export function SubPoints({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="space-y-6">
      {items.map((it) => (
        <div key={it.title}>
          <h3 className="text-lg font-semibold sm:text-xl">{it.title}</h3>
          <p className="mt-1 text-graphite">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
