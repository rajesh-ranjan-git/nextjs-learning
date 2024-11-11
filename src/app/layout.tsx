import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next JS Learning",
    template: "%s | Next JS",
  },
  description: "This package is for learning Next JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="h-20 bg-cyan-600 text-white">This is header.</header>
        {children}
        <footer className="h-20 bg-orange-600 text-white">
          This is footer.
        </footer>
      </body>
    </html>
  );
}
