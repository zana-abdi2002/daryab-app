import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { faIR } from "@/constants/clerk-localization";
import { toast } from "sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
// import "global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daryab",
  description: "video call easily",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "icons/logo.svg",
            socialButtonsVariant: "iconButton",
            unsafe_disableDevelopmentModeWarnings: true,
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#2f2a41",
            colorInputText: "#fff",
          },
          elements: {
            userButtonPopoverActionButton: {
              color: "#fff",
              "&:hover": {
                color: "#FFFFFF75",
              },
            },
            // modalBackdrop: {
            //   maxHeight: "100vh",
            //   height: "100vh",
            // },
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            cardBox: {
              maxHeight: "87vh",
              height: "87vh",
            },
            modalCloseButton: {
              padding: "0 0 0 0",
            },
            navbarButton: {
              color: "#FFFFFFFF",
              backgroundColor: "#000B39D1",
              "&:hover": {
                color: "#FFFFFFAB",
                backgroundColor: "#000B39B3",
              },
            },
            badge: {
              color: "#FFFFFFFF",
              backgroundColor: "#000B39FF",
            },
          },
        }}
        localization={faIR}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#161925]`}
        >
          {children}
          <Toaster expand={true} closeButton richColors position="top-center" />
        </body>
      </ClerkProvider>
    </html>
  );
}
