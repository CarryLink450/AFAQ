type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-extrabold text-royal-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-extrabold tracking-normal text-clinic-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
