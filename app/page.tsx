import { BeforeAfter } from "@/components/BeforeAfter";
import { Contact } from "@/components/Contact";
import { Doctors } from "@/components/Doctors";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Offers } from "@/components/Offers";
import { PatientJourney } from "@/components/PatientJourney";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Technology } from "@/components/Technology";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { clinic, medicalClinicJsonLd } from "@/lib/clinic-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
        <WhyChooseUs />
        <PatientJourney />
        <Doctors />
        <Technology />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/92 px-3 py-2 shadow-[0_-10px_30px_rgba(7,49,93,0.12)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a href={`tel:${clinic.phone}`} className="rounded-xl bg-royal-50 px-3 py-2 text-center text-sm font-bold text-royal-700">
            اتصال
          </a>
          <a href={clinic.whatsappUrl} className="rounded-xl bg-emerald-500 px-3 py-2 text-center text-sm font-bold text-white">
            واتساب
          </a>
          <a href="#booking" className="rounded-xl bg-royal-700 px-3 py-2 text-center text-sm font-bold text-white">
            احجز الآن
          </a>
        </div>
      </div>
    </>
  );
}
