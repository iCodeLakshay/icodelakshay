import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bricolage_Grotesque } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toaster } from "react-hot-toast";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // select weights you need
  variable: '--font-bricolage', // custom CSS variable
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "iCodeLakshay - Portfolio",
  description: "Portfolio website by Lakshay",
    icons: {
    icon: "/logo-dark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
        <Toaster />
      </body>
    </html>
  );
}