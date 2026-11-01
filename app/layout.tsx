import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masooma Outreach Agent",
  description: "Research-led professor outreach management"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
