import localFont from 'next/font/local'

import "@/styles/global.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CopyRight from "@/components/copyRight";
import NewsLetter from "@/components/newsLetter";


// import font from "@/public/font/avenir.ttf"
// const avenirFont = localFont({ src: font })

// className={avenirFont.className}


import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NextTopLoader  height={3} crawl={true} showSpinner={false}  color="#50d71e"/>
        <Navbar />
        {children}
        <NewsLetter/>
        <Footer/>
        <CopyRight/>
      </body>
    </html>
  );
}
