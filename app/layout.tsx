import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { faIR } from "@/constants/clerk-localization";
// import { toast } from "sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
// import "global.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "دریاب",
    template: "%s | دریاب",
    // absolute: ''
  },
  description: "تماس تصویری آسان",
  icons: {
    icon: "/icons/logo.png",
  },
};

const myFont = localFont({
  src: "../public/fonts/Lalezar-Regular.ttf",
  variable: "--font-myfont",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={myFont.className}
      suppressHydrationWarning
    >
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "icons/logo.png",
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
        <body className={`antialiased bg-[#09a6f3] dark:bg-[#161925]`}>
          <Toaster expand={true} closeButton richColors position="top-center" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
