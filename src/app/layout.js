import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dompet.in",
  description: "website andalan untuk mengatur dan mengelola keuangan anda",
};

export default function RootLayout({ children }) {
  return (
    // Terapkan latar belakang ke elemen body
    <html lang="id">
      <body className={`${inter.className} bg-[#22C55E]`}>
        {children}
      </body>
    </html>
  );
}