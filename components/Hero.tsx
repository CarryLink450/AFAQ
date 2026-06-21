import { ArrowLeft, MessageCircle, Star } from "lucide-react";
import { clinic, services, trustBadges } from "@/lib/clinic-data";
import { MotionDiv, MotionSection } from "./Motion";

export function Hero() {
  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pb-24"
    >
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-royal-100 bg-white/78 px-4 py-2 text-sm font-extrabold text-royal-700 shadow-sm">
            <Star className="h-4 w-4 fill-clinic-cyan text-clinic-cyan" />
            عيادات متخصصة في الرياض
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-clinic-ink sm:text-5xl lg:text-6xl">
            د. هيلث جديدة لصحتك وجمالك في الرياض
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
            عيادات متخصصة في الأسنان، الجلدية، الليزر والتجميل — رعاية طبية حديثة وتجربة مريحة من أول زيارة.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-royal-700 px-7 py-4 text-base font-extrabold text-white shadow-glow transition hover:bg-royal-600">
              احجز موعدك الآن
              <ArrowLeft className="h-5 w-5" />
            </a>
            <a href={clinic.whatsappUrl} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-4 text-base font-extrabold text-emerald-700 shadow-sm transition hover:bg-emerald-50">
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="premium-card rounded-2xl p-3">
                <badge.icon className="mb-2 h-5 w-5 text-royal-600" />
                <p className="text-sm font-extrabold text-slate-700">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="premium-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7"
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-l from-royal-600 via-royal-500 to-clinic-cyan opacity-90" />
          <div className="relative rounded-[1.55rem] bg-white p-5 shadow-xl">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-royal-50 via-white to-cyan-50">
              <div className="grid h-full place-items-center p-8">
                <div className="relative h-full w-full max-w-sm">
                  <div className="absolute bottom-4 left-8 right-8 top-8 rounded-t-[5rem] bg-gradient-to-b from-royal-100 to-white shadow-inner" />
                  <div className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-royal-600 to-royal-400 shadow-glow" />
                  <div className="absolute bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-[12px] border-white bg-cyan-100" />
                  <div className="absolute bottom-5 left-10 right-10 h-8 rounded-full bg-slate-200/70" />
                  <div className="absolute right-5 top-7 rounded-2xl bg-white px-4 py-3 shadow-premium">
                    <p className="text-xs font-bold text-slate-500">رعاية حديثة</p>
                    <p className="font-extrabold text-royal-700">D. Health</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service.title} className="rounded-full bg-royal-50 px-4 py-2 text-sm font-extrabold text-royal-700">
                  {service.title.replace("طب ", "")}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3">
              <div>
                <p className="text-sm font-bold text-slate-500">تقييم العملاء</p>
                <p className="text-2xl font-extrabold text-clinic-ink">4.9</p>
              </div>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
