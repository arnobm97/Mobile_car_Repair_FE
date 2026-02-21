import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/footer/footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
})


export const metadata: Metadata = {
  title: "Mobile Car Repairs Service Dubai",
  description: "Your trusted partner for all your car repair and maintenance needs in Dubai. 24/7 service, certified experts, free inspection.",
  icons: {
    icon: "/fav.jpeg",
  },
};

import { RecaptchaProvider } from "@/components/shared/RecaptchaProvider";
import { SmoothScrolling } from "@/components/shared/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScrolling>
          <RecaptchaProvider>
            <Navbar />
            <div className="pt-[93px] md:pt-[116px]">
              {children}
            </div>
            <WhatsAppButton />
            <Footer />
          </RecaptchaProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
