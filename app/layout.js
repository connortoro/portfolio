import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connor Toro ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' w-full h-full bg-gradient-to-l from-stone-900 to-stone-950 relative'}>
      {/* <div className="h-[30rem] w-[30rem] sm:h-[60rem] sm:w-[60rem] sm:right-[20rem] right-[2rem] bg-[#030b12] absolute blur-[10rem] rounded-full -z-10"></div>
      <div className="h-[30rem] w-[30rem] sm:h-[60rem] sm:w-[60rem] sm:right-[-20rem] right-[-2rem] bg-[#0a0712] absolute blur-[10rem] rounded-full -z-10"></div> */}
        {children}
      </body>
    </html>
  );
}
