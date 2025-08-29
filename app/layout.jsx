import NavBar from "@/components/NavBar";
import "./globals.css";
import { Poppins, Fira_Code } from "next/font/google";
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
  title: "Roopesh Kumar | Fullstack Developer",
  description:
    "Portfolio of Roopesh Kumar, a fullstack developer specializing in MERN, AI/ML, and building scalable web apps.",
  keywords: [
    "Roopesh Kumar",
    "Fullstack Developer",
    "MERN Stack",
    "AI/ML Developer",
    "Next.js Portfolio",
    "Software Engineer",
  ],
  authors: [
    { name: "Roopesh Kumar Jonnakuti", url: "https://roopeshkumar.vercel.app" },
  ],
  creator: "Roopesh Kumar",
  metadataBase: new URL("https://roopeshkumar.vercel.app"),

  openGraph: {
    title: "Roopesh Kumar | Fullstack Developer",
    description:
      "Explore the portfolio of Roopesh Kumar, a fullstack developer skilled in MERN,Next js, and AI technologies.",
    url: "https://roopeshkumar.vercel.app",
    siteName: "Roopesh Kumar Portfolio",
    images: [
      {
        url: "https://roopeshkumar.vercel.app/og-image.png", // 👈 put this in /public
        width: 1200,
        height: 630,
        alt: "Roopesh Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roopesh Kumar | Fullstack Developer",
    description:
      "Portfolio of Roopesh Kumar, fullstack developer specializing in MERN, AI/ML, and modern web technologies.",
    images: ["https://roopeshkumar.vercel.app/og-image.png"], // same as OG image
    creator: "@yourtwitterhandle", // 👈 optional
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased bg-white text-black dark:bg-[#19191B] dark:text-white overflow-x-hidden`}
      >
        <main className="w-full relative">
          {/* <GradientBoxes /> */}
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
