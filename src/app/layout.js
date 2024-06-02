"use client";
import "./styles/styles.css"
import "./styles/app.css"
import Header from './Home/header';
import Footer from './Home/footer';
import Head from 'next/head';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Insert your GTM script here
    // Example:
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MRPG83NT`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <html lang="en">
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add additional meta tags or link elements as needed */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRPG83NT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
