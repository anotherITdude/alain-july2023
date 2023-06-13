import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al Ain Farms | Admin Section",
  description: "Alain Farms July 2023 campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className=''>
        this is admin section
        {children}</body>
    </html>
  );
}
