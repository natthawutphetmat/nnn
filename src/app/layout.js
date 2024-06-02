"use client";
import "./styles/styles.css"
import "./styles/app.css"
import Header from './Home/header';
import Footer from './Home/footer';
import Head from 'next/head';
import { useEffect } from 'react';



export const metadata = () => {
 
  return {
    title: "PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย",
    description: " ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย",
    icon: "https://www.chaiyoloan.com/img/logo.jpg",
    ogtitle: "PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย",
    ogdescription: " ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย",
    image: "https://www.chaiyoloan.com/img/logo.jpg"
  };
};



export default function RootLayout({ children }) {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MRPG83NT`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
     
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <html lang="en">
      
      <body>
       
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRPG83NT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
