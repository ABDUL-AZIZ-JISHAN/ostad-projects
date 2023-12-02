
import "@/styles/global.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CopyRight from "@/components/copyRight";
import NewsLetter from "@/components/newsLetter";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <NewsLetter/>
        <Footer/>
        <CopyRight/>
      </body>
    </html>
  );
}
