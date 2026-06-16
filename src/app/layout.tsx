import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tabuny Schweiz",
  description: "Premium Fladenbrot aus der Schweiz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}