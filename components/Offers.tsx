import { Gift } from "lucide-react";
import { offers } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function Offers() {
  return (
    <section id="offers" className="bg-gradient-to-l from-royal-900 via-royal-700 to-royal-600 py-16 text-white sm:py-20">
      <div className="section-shell">
        <SectionHeading title="عروض د. هيلث كلينك" description="عروض موسمية قابلة للتحديث حسب توفرها داخل العيادة." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <article key={offer} className="rounded-3xl border border-white/18 bg-white/12 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/18">
              <Gift className="mb-5 h-8 w-8 text-clinic-cyan" />
              <h3 className="text-xl font-extrabold">{offer}</h3>
              <p className="mt-3 text-sm leading-7 text-blue-50">تفاصيل العرض تحدد عند التواصل مع فريق العيادة.</p>
              <a href="#booking" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-extrabold text-royal-700">
                استفسر عن العرض
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-bold text-blue-50">العروض قابلة للتحديث حسب توفرها في العيادة.</p>
      </div>
    </section>
  );
}
