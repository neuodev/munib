import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Munib",
  description: "اجعل القرآن ربيع قلبك",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={rubik.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
