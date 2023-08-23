import Navbar from "@/components/navbar";
import { Roboto } from "next/font/google";
import "./globals.css"

export const metadata = {
  title: 'First Practic whit Next.js',
  description: 'Generate by Next.js',
  keywords: "tienda, online, ecomerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />

        {children}
      </body>
    </html>
  );
}
