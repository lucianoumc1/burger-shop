import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "./components/NavMenu";

export const metadata: Metadata = {
  title: "Burger shop",
  description: "buy the most delicious burgers now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
