import NextHead from "next/head";
import Script from "next/script";
import React from "react";

export const PageHead = () => (
  <>
    <NextHead>
      <title>Access denied?</title>
      <meta
        name="description"
        content="This project focuses on highlighting the importance of web accessibility through interactive experiences. It educates about the online challenges faced by people with diverse abilities, emphasizing that websites should be inherently accessible."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="keywords" content="accessibility UI UX web" />
      <meta property="og:title" content="Access denied?" />
      <meta property="og:url" content="https://access-denied.vercel.app/" />
      <meta property="og:image" content="/share.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="672" />
      <meta property="og:type" content="website" />
      <meta
        name="og:description"
        content="This project focuses on highlighting the importance of web accessibility through interactive experiences. It educates about the online challenges faced by people with diverse abilities, emphasizing that websites should be inherently accessible."
      />
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
