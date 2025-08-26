import NavBar from "@/components/NavBar";
import "./globals.css";
import { Poppins, Fira_Code } from "next/font/google";
import { bg } from "@/data/constants";
import Footer from "@/components/Fotter";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roopesh Kumar",
  description: "portfolio of fullstack developer roopesh kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased bg-[#19191B] text-white overflow-x-hidden  `}
      >
        <main className="w-full">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
