import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "./components/NavMenu";
import ClientDataForm from "./components/ClientDataForm";

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
    <html lang="es">
      <body className="bg-slate-200">
        <NavMenu />
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
