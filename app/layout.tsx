import "./globals.css";


export const metadata = {
  title: "Alain Farms",
  description: "Alain Farms July 2023 campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body>
        {children}
      </body>
    </html>
  );
}
