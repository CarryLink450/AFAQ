import { MessageCircle } from "lucide-react";
import { clinic } from "@/lib/clinic-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={clinic.whatsappUrl}
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-20 left-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
