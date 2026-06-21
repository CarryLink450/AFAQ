import { CalendarCheck } from "lucide-react";
import { doctors } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function Doctors() {
  return (
    <section id="doctors" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="نخبة من الأطباء والمتخصصين" description="بطاقات مؤقتة إلى حين اعتماد أسماء الفريق الطبي الرسمي." />
        <div className="grid gap-5 md:grid-cols-3">
          {/* Replace placeholder doctors with real D. Health clinic doctors. */}
          {doctors.map((doctor, index) => (
            <article key={`${doctor.name}-${index}`} className="premium-card overflow-hidden rounded-3xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-royal-100 via-white to-cyan-50 p-6">
                <div className="mx-auto flex h-full max-w-52 items-end justify-center rounded-t-full bg-gradient-to-b from-white to-royal-100 shadow-inner">
                  <div className="mb-5 h-28 w-28 rounded-full border-[10px] border-white bg-gradient-to-br from-royal-500 to-royal-700 shadow-glow" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-clinic-ink">{doctor.name}</h3>
                <p className="mt-2 font-bold text-royal-600">{doctor.specialty}</p>
                <p className="mt-4 leading-7 text-slate-600">{doctor.expertise}</p>
                <a href="#booking" className="mt-6 inline-flex items-center gap-2 rounded-full bg-royal-700 px-5 py-3 text-sm font-extrabold text-white">
                  <CalendarCheck className="h-4 w-4" />
                  احجز مع الطبيب
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
