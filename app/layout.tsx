import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MuvMi Chat",
  description: "MuvMi Chat - Inbox",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-gray-100 antialiased">
        <div className="mx-auto max-w-[430px] min-h-screen bg-white shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
