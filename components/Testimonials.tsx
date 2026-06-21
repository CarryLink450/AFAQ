import { Star } from "lucide-react";
import { testimonials } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="ماذا يقول عملاؤنا؟" />
        <div className="grid gap-5 md:grid-cols-3">
          {/* Replace placeholder reviews with real verified reviews. */}
          {testimonials.map((review) => (
            <article key={review} className="premium-card rounded-3xl p-6">
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-xl font-bold leading-9 text-clinic-ink">"{review}"</p>
              <p className="mt-5 text-sm font-bold text-slate-500">عميل د. هيلث كلينك</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
