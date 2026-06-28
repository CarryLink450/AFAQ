import {
  BadgeCheck,
  CalendarCheck,
  HeartPulse,
  Instagram,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  WandSparkles,
  X
} from "lucide-react";

export const clinic = {
  nameAr: "بيت الأسرة الطبي كلينك",
  nameEn: "",
  city: "الرياض",
  area: "حي شبرا / الطريق الدائري الجنوبي",
  address: "الرياض، حي شبرا، الطريق الدائري الجنوبي",
  phone: "+966114268777",
  phoneDisplay: "+966 11 426 8777",
  mobile: "+966504268777",
  mobileDisplay: "+966 50 426 8777",
  whatsappUrl: "https://wa.me/966504268777",
  workingHours: "السبت – الخميس، 9:00 صباحاً – 10:00 مساءً",
  mapPlaceholder: "موقع العيادة على الخريطة - الرياض، حي شبرا",
  socials: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Snapchat", href: "#", icon: Sparkles },
    { name: "TikTok", href: "#", icon: WandSparkles },
    { name: "X", href: "#", icon: X }
  ]
};

export const navigation = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخدمات", href: "#services" },
  { label: "الأطباء", href: "#doctors" },
  { label: "العروض", href: "#offers" },
  { label: "لماذا بيت الأسرة الطبي", href: "#why" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#booking" }
];

export const services = [
  {
    title: "طب الأسنان",
    description: "رعاية شاملة لصحة الفم وابتسامة متوازنة بخطط علاجية مخصصة لكل حالة.",
    icon: Stethoscope,
    treatments: [
      "ابتسامة هوليود",
      "زراعة الأسنان",
      "تقويم الأسنان",
      "تبييض الأسنان",
      "علاج العصب",
      "تركيبات الأسنان",
      "علاج اللثة"
    ]
  },
  {
    title: "الجلدية",
    description: "استشارات وعلاجات جلدية تركز على صحة البشرة ونضارتها وفق تقييم طبي.",
    icon: HeartPulse,
    treatments: [
      "علاج حب الشباب",
      "علاج التصبغات",
      "علاج الندبات",
      "نضارة البشرة",
      "علاج تساقط الشعر",
      "العناية بالبشرة الجافة والحساسة"
    ]
  },
  {
    title: "الليزر",
    description: "جلسات ليزر مدروسة بعناية مع مراعاة نوع البشرة واحتياجاتها.",
    icon: Sparkles,
    treatments: [
      "إزالة الشعر بالليزر",
      "ليزر التصبغات",
      "ليزر آثار الحبوب",
      "ليزر النمش",
      "جلسات آمنة ومناسبة لأنواع البشرة المختلفة"
    ]
  },
  {
    title: "التجميل",
    description: "إجراءات تجميلية غير جراحية ومتابعة شخصية لنتائج طبيعية حسب الحالة.",
    icon: Syringe,
    treatments: [
      "البوتوكس",
      "الفيلر",
      "البلازما PRP",
      "الميزوثيرابي",
      "شد ونضارة البشرة",
      "استشارات تجميلية مخصصة"
    ]
  }
];

export const offers = [
  "عرض تنظيف وتبييض الأسنان",
  "عرض إزالة الشعر بالليزر",
  "عرض نضارة البشرة",
  "عرض ابتسامة هوليود"
];

export const whyChooseUs = [
  { title: "رعاية متكاملة تحت سقف واحد", icon: HeartPulse },
  { title: "أطباء متخصصون", icon: Stethoscope },
  { title: "أحدث التقنيات الطبية", icon: Sparkles },
  { title: "خصوصية وراحة للمرضى", icon: ShieldCheck },
  { title: "خطط علاجية مخصصة", icon: BadgeCheck },
  { title: "حجز سريع عبر واتساب", icon: MessageCircle }
];

export const patientSteps = [
  "احجز موعدك",
  "استشارة وتشخيص",
  "خطة علاج مناسبة",
  "متابعة ونتائج"
];

export const doctors = [
  {
    name: "د. اسم الطبيب",
    specialty: "أخصائي/استشاري طب الأسنان",
    expertise: "خبرة في العلاجات التجميلية والترميمية وخطط الابتسامة."
  },
  {
    name: "د. اسم الطبيبة",
    specialty: "أخصائية الجلدية والتجميل",
    expertise: "استشارات مخصصة للبشرة والإجراءات التجميلية غير الجراحية."
  },
  {
    name: "د. اسم الطبيب",
    specialty: "أخصائي الليزر والتجميل",
    expertise: "تقييم مناسب لنوع البشرة واختيار خطة جلسات آمنة."
  }
];

export const technologies = [
  { title: "أجهزة ليزر متقدمة", icon: Sparkles },
  { title: "تقنيات العناية بالبشرة", icon: WandSparkles },
  { title: "تجهيزات طب الأسنان", icon: Stethoscope },
  { title: "تعقيم ومعايير سلامة", icon: ShieldCheck }
];

export const testimonials = [
  "تجربة مريحة من الحجز حتى المتابعة.",
  "الطاقم محترف والنتيجة كانت ممتازة.",
  "المكان نظيف والتعامل راقٍ."
];

export const faqs = [
  {
    question: "ما هي خدمات بيت الأسرة الطبي كلينك؟",
    answer: "تقدم بيت الأسرة الطبي كلينك خدمات الأسنان، الجلدية، الليزر والتجميل ضمن تجربة طبية حديثة في الرياض."
  },
  {
    question: "هل يوجد حجز عبر واتساب؟",
    answer: `نعم، يمكن حجز موعد أو الاستفسار عبر واتساب على الرقم ${clinic.mobileDisplay}.`
  },
  {
    question: "أين تقع بيت الأسرة الطبي كلينك في الرياض؟",
    answer: `تقع العيادة في ${clinic.address}.`
  },
  {
    question: "هل تقدم العيادة خدمات الأسنان والتجميل في مكان واحد؟",
    answer: "نعم، توفر العيادة تخصصات متعددة تشمل الأسنان والجلدية والليزر والتجميل في موقع واحد."
  },
  {
    question: "هل جلسات الليزر مناسبة لجميع أنواع البشرة؟",
    answer: "يتم تقييم نوع البشرة والحالة قبل الجلسة لتحديد الخطة المناسبة واختيار الإجراء الأكثر ملاءمة."
  },
  {
    question: "كيف يتم تحديد العلاج المناسب؟",
    answer: "يتم تحديد العلاج بعد الاستشارة الطبية والتشخيص ومناقشة الأهداف والتوقعات الواقعية."
  }
];

export const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.nameEn ? `${clinic.nameAr} - ${clinic.nameEn}` : clinic.nameAr,
  medicalSpecialty: ["Dentistry", "Dermatology", "Cosmetic", "Laser"],
  address: {
    "@type": "PostalAddress",
    addressLocality: clinic.city,
    streetAddress: clinic.area,
    addressCountry: "SA"
  },
  telephone: clinic.phoneDisplay,
  openingHours: "Sa-Th 09:00-22:00",
  areaServed: clinic.city,
  url: "https://example.com",
  sameAs: clinic.socials.map((social) => social.href).filter((href) => href !== "#")
};

export const trustBadges = [
  { label: "نخبة من الأطباء", icon: Stethoscope },
  { label: "أحدث الأجهزة", icon: Sparkles },
  { label: "خصوصية وراحة", icon: ShieldCheck },
  { label: "موقعنا في الرياض", icon: CalendarCheck }
];
