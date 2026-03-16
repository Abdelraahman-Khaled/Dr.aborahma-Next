import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Script from "next/script";
import { getTranslations } from "next-intl/server";
import Providers from "./Providers";

// Importing CSS from installed NPM packages
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "magnific-popup/dist/magnific-popup.css";
import Footer from "./components/Footer";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("t11") + " | " + t("t9"), // Dr. Mohammed bin Abdulrahman Abu Rahma | Bariatric and Laparoscopic...
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

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NK6MKF79');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK6MKF79"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
          <Footer />
        </NextIntlClientProvider>

        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/validator.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery.waypoints.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/jquery.counterup.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/SmoothScroll.js" strategy="beforeInteractive" />
        <Script src="/js/parallaxie.js" strategy="beforeInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/magiccursor.js" strategy="beforeInteractive" />
        <Script src="/js/SplitText.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery.mb.YTPlayer.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="beforeInteractive" />
        <Script src="/js/function.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
