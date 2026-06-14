import { patientSteps } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function PatientJourney() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="رحلتك معنا بخطوات بسيطة" />
        <div className="relative grid gap-5 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-l from-transparent via-royal-200 to-transparent md:block" />
          {patientSteps.map((step, index) => (
            <div key={step} className="relative flex gap-4 rounded-3xl border border-royal-100 bg-royal-50/50 p-5 md:block md:text-center">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-royal-700 text-xl font-extrabold text-white shadow-glow md:mx-auto md:mb-5">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-clinic-ink">{step}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">خطوة واضحة تساعدك على معرفة ما يحدث قبل وأثناء وبعد الزيارة.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
