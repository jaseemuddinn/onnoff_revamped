import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OnnOff",
  description: "Awesome World!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
