import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cases = ["ابتسامة", "بشرة", "ليزر"];

export function BeforeAfter() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="نتائج واقعية وتجارب ملهمة" description="مساحات مخصصة لإضافة صور قبل وبعد بعد الحصول على الموافقات اللازمة." />
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item} className="premium-card rounded-3xl p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200 p-4">
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-slate-600">قبل</span>
                </div>
                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-b from-royal-100 to-cyan-100 p-4">
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-royal-700">بعد</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-clinic-ink">{item}</h3>
                <div className="flex gap-2 text-royal-600">
                  <button aria-label="السابق" className="grid h-10 w-10 place-items-center rounded-full bg-royal-50">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button aria-label="التالي" className="grid h-10 w-10 place-items-center rounded-full bg-royal-50">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-4 text-center font-bold leading-8 text-amber-800">
          النتائج تختلف من شخص لآخر، ويتم تحديد الخطة المناسبة بعد الاستشارة الطبية.
        </p>
      </div>
    </section>
  );
}
