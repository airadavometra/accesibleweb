import NextHead from "next/head";
import Script from "next/script";
import React from "react";

// TODO description and share image

const description = `Accessibility project`;

export const PageHead = () => (
  <>
    <NextHead>
      <title>Accessibility project</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="keywords" content="Accessibility project" />
      <meta property="og:title" content="Accessibility project" />
      <meta property="og:image" content="/share.png" />
    </NextHead>
    {process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && <GoogleAnalytics />}
  </>
);

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
    />
    <Script id="ga" strategy="lazyOnload">
      {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
   `}
    </Script>
  </>
);
