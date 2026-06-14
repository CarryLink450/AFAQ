import { whyChooseUs } from "@/lib/clinic-data";
import { MotionDiv } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="لماذا تختار آفاق كلينك؟" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="premium-card rounded-3xl p-6"
            >
              <item.icon className="mb-5 h-8 w-8 text-royal-600" />
              <h3 className="text-xl font-extrabold text-clinic-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">تجربة منظمة من الحجز إلى المتابعة مع اهتمام بالتفاصيل والراحة.</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
