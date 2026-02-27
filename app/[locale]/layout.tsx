import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
});

// 1. دالة توليد البيانات الوصفية (Metadata)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages() as Record<string, Record<string, string>>;

  const title = messages.hero?.title ? `${messages.hero.title} | Munib` : locale === 'ar' ? 'مُنيب' : 'Munib';
  const description = messages.hero?.description || (locale === 'ar' ? 'اجعل القرآن ربيع قلبك' : 'Make the Quran the spring of your heart');
  const imageUrl = "https://i.suar.me/e94YG/l";

  return {
    title,
    description,
    keywords: ['Quran', 'تعليم القرآن', 'Munib', 'online Quran classes', 'قراءة القرآن','مُنيب'],
    openGraph: {
      title: "منصة مُنيب",
      description: "في منصة منيب، نؤمن أن رحلة تعلّم القرآن الكريم هي أسمى رحلات العمر. لذلك، سخرنا أحدث التقنيات التعليمية لنضع بين أيديكم بيئة تفاعلية متكاملة تجمع بين الحفظ المتقن والتجويد العلمي والقراءات الصحيحة، تحت إشراف نخبة من المحفظين المجازين.",
      url: `https://munib.net/${locale}`,
      siteName: 'Munib',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'منصة منيب لتحفيظ القرآن',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://munib.net/${locale}`,
      languages: {
        ar: 'https://munib.net/ar',
        en: 'https://munib.net/en',
      },
    },
  };
}

// 2. الدالة الأساسية (المفقودة التي تسببت في الخطأ)
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
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