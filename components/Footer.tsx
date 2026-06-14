import { clinic, navigation, services } from "@/lib/clinic-data";

export function Footer() {
  return (
    <footer className="bg-clinic-ink pb-24 pt-14 text-white md:pb-10">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl font-extrabold text-royal-700">آ</span>
            <span>
              <span className="block text-2xl font-extrabold">{clinic.nameAr}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">{clinic.nameEn}</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-8 text-slate-300">
            عيادات متخصصة في الأسنان، الجلدية، الليزر والتجميل في الرياض، بتجربة حديثة ومريحة من الحجز حتى المتابعة.
          </p>
          <div className="mt-5 flex gap-2">
            {clinic.socials.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-cyan-100 transition hover:bg-white hover:text-royal-700">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-extrabold">روابط سريعة</h3>
          <div className="grid gap-3">
            {navigation.slice(0, 6).map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white">{item.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-extrabold">الخدمات</h3>
          <div className="grid gap-3">
            {services.map((service) => (
              <a key={service.title} href="#services" className="text-slate-300 hover:text-white">{service.title}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-extrabold">تواصل معنا</h3>
          <div className="space-y-3 leading-8 text-slate-300">
            <p>{clinic.phoneDisplay}</p>
            <p>{clinic.mobileDisplay}</p>
            <p>{clinic.address}</p>
            <p>{clinic.workingHours}</p>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {clinic.nameAr}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
