import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – CSS side-effect import, resolved by Next.js
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/modules/shared/theme/ThemeProvider";
import { SmoothScrollProvider } from "@/modules/shared/scroll/SmoothScrollProvider";
import { AmbientScene } from "@/modules/shared/background/AmbientScene";
import { SocialBar } from "@/modules/shared/components/SocialBar";
import { ProfileSidebar } from "@/modules/shared/components/ProfileSidebar";
import { AmbientMusicToggle } from "@/modules/shared/components/AmbientMusicToggle";
import { PageCurtain } from "@/modules/shared/effects/PageCurtain";
import { ClickRipple } from "@/modules/shared/effects/ClickRipple";
import { Toaster } from "sonner";

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
  title: "Shakil Ahmmed — Web Developer",
  description:
    "Full-stack developer with 4+ years experience building scalable, performant web applications.",
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
          <SmoothScrollProvider>
            <PageCurtain />
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
