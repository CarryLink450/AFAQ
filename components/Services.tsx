import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/clinic-data";
import { MotionDiv } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="خدماتنا الطبية والتجميلية" description="تخصصات متكاملة بتجربة مريحة وخطط يتم تحديدها بعد الاستشارة الطبية." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="premium-card flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal-700 to-royal-500 text-white shadow-glow">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-clinic-ink">{service.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-5 flex-1 space-y-3">
                {service.treatments.map((treatment) => (
                  <li key={treatment} className="flex gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 rounded-full bg-royal-50 px-5 py-3 text-center font-extrabold text-royal-700 transition hover:bg-royal-700 hover:text-white">
                احجز استشارة
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
