import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – CSS side-effect import, resolved by Next.js
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/modules/shared/theme/ThemeProvider";
import { SmoothScrollProvider } from "@/modules/shared/scroll/SmoothScrollProvider";
import { AmbientScene } from "@/modules/shared/background/AmbientScene";
import { SocialBar } from "@/modules/shared/components/SocialBar";
import { ClickRipple } from "@/modules/shared/effects/ClickRipple";
import { DynamicFavicon } from "@/modules/shared/components/DynamicFavicon";
import { Toaster } from "sonner";
import { content } from "@/config/content";

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
  title: content.site.metaTitle,
  description: content.site.metaDescription,
};

type Props = { children: React.ReactNode };

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
          <DynamicFavicon />
          <SmoothScrollProvider>
            <AmbientScene />
            <SocialBar />
            <ClickRipple />
            <div className="relative z-10">{children}</div>
            <Toaster position="bottom-right" theme="system" />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
