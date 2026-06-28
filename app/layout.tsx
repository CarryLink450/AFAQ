import type { Metadata } from "next";
import "./globals.css";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "بيت الأسرة الطبي كلينك | أسنان، جلدية، ليزر وتجميل في الرياض",
  description:
    "بيت الأسرة الطبي كلينك في الرياض تقدم خدمات الأسنان، الجلدية، الليزر والتجميل ضمن تجربة طبية حديثة ومريحة.",
  keywords: [
    "عيادة أسنان الرياض",
    "عيادة جلدية الرياض",
    "ليزر الرياض",
    "تجميل الرياض",
    "بيت الأسرة الطبي كلينك",
    "عيادات الرياض",
    "ابتسامة هوليود الرياض",
    "إزالة الشعر بالليزر الرياض"
  ],
  openGraph: {
    title: "بيت الأسرة الطبي كلينك | أسنان، جلدية، ليزر وتجميل في الرياض",
    description:
      "رعاية طبية حديثة وتجربة مريحة في الأسنان، الجلدية، الليزر والتجميل في الرياض.",
    locale: "ar_SA",
    type: "website",
    siteName: clinic.nameAr
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
