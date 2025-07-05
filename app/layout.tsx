import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css"
// import "global.css";
import localFont from 'next/font/local';
import { AuthProvider } from "@/providers/AuthProvider";
import StreamClientProvider from "@/providers/StreamClientProvider";
import StreamErrorBoundary from "@/components/StreamErrorBoundary";

export const metadata: Metadata = {
  title: "Daryab",
  description: "تماس تصویری آسان",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const myFont = localFont({
  src: '../public/fonts/Lalezar-Regular.ttf',
  variable: '--font-myfont',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className={myFont.className}>
      <body className={`antialiased bg-[#161925]`}>
        <AuthProvider>
          <StreamErrorBoundary>
            <StreamClientProvider>
              {children}
              <Toaster expand={true} closeButton richColors position="top-center" />
            </StreamClientProvider>
          </StreamErrorBoundary>
        </AuthProvider>
      </body>
    </html>
  );
}
