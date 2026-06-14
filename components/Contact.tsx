"use client";

import { useState } from "react";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, services } from "@/lib/clinic-data";
import { SectionHeading } from "./SectionHeading";

const serviceOptions = ["طب الأسنان", "الجلدية", "الليزر", "التجميل", "عروض العيادة", "أخرى"];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="booking" className="bg-gradient-to-br from-royal-900 via-royal-700 to-royal-600 py-16 text-white sm:py-20">
      <div className="section-shell">
        <SectionHeading title="احجز موعدك الآن" description="املأ بياناتك وسيتواصل معك فريق آفاق كلينك لتأكيد الموعد." />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <form
            className="rounded-3xl border border-white/16 bg-white/12 p-5 backdrop-blur-xl sm:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-bold">الاسم الكامل</span>
                <input required minLength={3} className="focus-ring rounded-2xl border border-white/20 bg-white px-4 py-3 text-clinic-ink" placeholder="اكتب اسمك" />
              </label>
              <label className="grid gap-2">
                <span className="font-bold">رقم الجوال</span>
                <input required inputMode="tel" pattern="^[0-9+ ]{8,}$" className="focus-ring rounded-2xl border border-white/20 bg-white px-4 py-3 text-clinic-ink" placeholder="05xxxxxxxx" />
              </label>
            </div>
            <label className="mt-4 grid gap-2">
              <span className="font-bold">الخدمة المطلوبة</span>
              <select required className="focus-ring rounded-2xl border border-white/20 bg-white px-4 py-3 text-clinic-ink">
                <option value="">اختر الخدمة</option>
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 grid gap-2">
              <span className="font-bold">الرسالة</span>
              <textarea className="focus-ring min-h-32 rounded-2xl border border-white/20 bg-white px-4 py-3 text-clinic-ink" placeholder="اكتب رسالتك أو الوقت المناسب للتواصل" />
            </label>
            <button type="submit" className="mt-5 w-full rounded-full bg-white px-6 py-4 text-lg font-extrabold text-royal-700 transition hover:bg-royal-50">
              إرسال الطلب
            </button>
            {sent ? (
              <p className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-500/18 p-3 font-bold text-emerald-50">
                <CheckCircle2 className="h-5 w-5" />
                تم تسجيل الطلب في الواجهة. يمكن ربطه لاحقاً بنظام حجز أو بريد إلكتروني.
              </p>
            ) : null}
          </form>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/16 bg-white/12 p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-extrabold">تواصل مباشر</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={clinic.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-extrabold text-white">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
                <a href={`tel:${clinic.phone}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-extrabold text-royal-700">
                  <Phone className="h-5 w-5" />
                  اتصال
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/16 bg-white/12 p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-extrabold">معلومات العيادة</h3>
              <div className="mt-5 space-y-4 leading-8 text-blue-50">
                <p><strong className="text-white">الهاتف:</strong> {clinic.phoneDisplay}</p>
                <p><strong className="text-white">الجوال / واتساب:</strong> {clinic.mobileDisplay}</p>
                <p><strong className="text-white">العنوان:</strong> {clinic.address}</p>
                <p><strong className="text-white">ساعات العمل:</strong> {clinic.workingHours}</p>
              </div>
            </div>
            <div className="grid min-h-56 place-items-center rounded-3xl border border-white/16 bg-white/12 p-6 text-center backdrop-blur-xl">
              <div>
                <MapPin className="mx-auto mb-3 h-10 w-10 text-clinic-cyan" />
                <p className="text-xl font-extrabold">{clinic.mapPlaceholder}</p>
                <p className="mt-2 text-sm text-blue-50">يمكن استبدال هذا العنصر بخريطة Google Maps عند توفر رابط التضمين.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
