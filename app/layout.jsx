import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Sami Khan",
  description:
    "Explore my portfolio for a showcase of my expertise and passion across various projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextTopLoader color="#FE705A" showSpinner={false} />
          <AOSInit />
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
