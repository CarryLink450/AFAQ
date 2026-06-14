import { faqs } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="section-shell max-w-5xl">
        <SectionHeading title="الأسئلة الشائعة" />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="premium-card group rounded-3xl p-6">
              <summary className="cursor-pointer list-none text-xl font-extrabold text-clinic-ink">
                {faq.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
