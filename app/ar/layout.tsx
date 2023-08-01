import { ToasterProvider } from "@/providers/toast-provider";
import "../globals.css";

export const metadata = {
  title: "Alain Farms | Back to school, 2023",
  description: "Alain Farms, back to school campaign, 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="">
      <link rel="icon" href="./../favicon.ico" />
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
