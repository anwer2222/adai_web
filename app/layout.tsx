import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ADAI — الذاكرة المؤسسية الذكية",
  description:
    "ADAI منصة SaaS لإدارة المعرفة بالذكاء الاصطناعي: تستخلص خبرات موظفيك، وتحفظها كذاكرة مؤسسية معتمدة، وتضمن استمرارية المعرفة.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={plex.className}>{children}</body>
    </html>
  );
}
