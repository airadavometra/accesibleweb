import NextHead from "next/head";
import Script from "next/script";
import React from "react";

// TODO description and share image

const description = `A non-commercial project focused on web accessibility that creates an engaging, interactive experience that allows to face the challenges that people with different abilities have in the web. It is an educational tool for both people involved in web development and the broader public.`;

export const PageHead = () => (
  <>
    <NextHead>
      <title>Access denied?</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="keywords" content="accessibility UI UX web" />
      <meta property="og:title" content="Access denied?" />
      <meta property="og:image" content="/share.png" />
    </NextHead>
    {process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && <GoogleAnalytics />}
    <Script id="select-color">
      {`const colors = [ '#DCF179', '#A2DAE9', '#ADBCF1', '#EAB7EC' ]; 
      const randomColor = colors[Math.floor( Math.random() * colors.length)]; 
      const r = document.querySelector(':root'); 
      r.style.setProperty('--color', randomColor); 
      r.style.setProperty('--color-transparent', randomColor + "cc");`}
    </Script>
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
