import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atul Singh | Portfolio",
  description: "Atul is a fullstack data science developer with 1.5 years exp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[65.75rem] -z-10 dark:bg-[#946263]">

        </div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[65.75rem] md:left-[-33rem] lg:left-[-28rem] xl:[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-[#676394]" >

        </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
          <Header/>
          <ToastContainer/>
          <ThemeSwitch/>
          {children}
          <Footer/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  );
}
