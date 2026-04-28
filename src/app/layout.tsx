import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/modules/shared/theme/ThemeProvider";
import { SmoothScrollProvider } from "@/modules/shared/scroll/SmoothScrollProvider";
import { BackgroundField } from "@/modules/shared/background/BackgroundField";
import { SocialBar } from "@/modules/shared/components/SocialBar";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shakil's Portfolio",
  description:
    "Full-stack developer with 4+ years experience building scalable, performant web applications.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <SmoothScrollProvider>
            <BackgroundField />
            <SocialBar />
            {children}
            <Toaster position="bottom-right" theme="system" />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
