import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

// Importing CSS from installed NPM packages
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "magnific-popup/dist/magnific-popup.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("t11") + " | " + t("t9"), // Dr. Mohammed Abu Rahma | Bariatric and Laparoscopic...
    description: t("t10"),
    icons: {
      icon: "/images/favicon.png",
      shortcut: "/images/favicon.png",
      apple: "/images/favicon.png",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" />
        {locale === "ar" && <link rel="stylesheet" href="/css/ar-style.css" />}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.slicknav.js" strategy="lazyOnload" />
        <Script src="/js/function.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
