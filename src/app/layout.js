import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahmonjon Olimjonov | Frontend Developer",
  description: "Frontend development, intelligent engineering systems and IoT projects by Rahmonjon Olimjonov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
