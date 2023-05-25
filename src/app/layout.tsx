import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Paper Pilot",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}
