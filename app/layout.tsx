import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Ecommerce App",
  description: "Created by Jordan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
