"use client";

import { CalendarCheck, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { clinic, navigation } from "@/lib/clinic-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/86 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-700 to-royal-500 text-xl font-extrabold text-white shadow-glow">
            آ
          </span>
          <span>
            <span className="block text-xl font-extrabold text-royal-900">{clinic.nameAr}</span>
            {clinic.nameEn ? (
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{clinic.nameEn}</span>
            ) : null}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-royal-50 hover:text-royal-700">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#booking" className="focus-ring inline-flex items-center gap-2 rounded-full bg-royal-700 px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:bg-royal-600">
            <CalendarCheck className="h-4 w-4" />
            احجز موعدك
          </a>
          <a href={clinic.whatsappUrl} className="focus-ring inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-extrabold text-emerald-700 transition hover:bg-emerald-100">
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>
        </div>

        <button
          type="button"
          aria-label="فتح القائمة"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-royal-50 text-royal-700 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-royal-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-royal-50">
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href={`tel:${clinic.phone}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-royal-50 px-4 py-3 font-extrabold text-royal-700">
                <Phone className="h-4 w-4" />
                اتصال
              </a>
              <a href={clinic.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 font-extrabold text-white">
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
