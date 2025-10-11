import "./globals.css";

export const metadata = {
  title: "Dompet.in",
  description: "Atur dan kelola keuanganmu dengan mudah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
