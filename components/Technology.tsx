import { technologies } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function Technology() {
  return (
    <section className="bg-gradient-to-b from-white to-royal-50 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="تقنيات حديثة لنتائج آمنة وطبيعية" description="لا نذكر علامات تجارية أو أجهزة محددة إلا بعد اعتمادها من العيادة." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <article key={tech.title} className="premium-card rounded-3xl p-6">
              <div className="mb-8 flex h-36 items-center justify-center rounded-3xl bg-gradient-to-br from-royal-700 to-cyan-400">
                <tech.icon className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-clinic-ink">{tech.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">اختيار التقنية يتم وفق التشخيص واحتياج كل حالة.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
