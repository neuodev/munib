import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function NotFound() {
  const t = useTranslations('nav');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-main">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">الصفحة غير موجودة</p>
        <p className="text-gray-500 mt-2">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link 
          href="/" 
          className="mt-6 inline-block bg-main text-white px-6 py-3 rounded-lg hover:bg-second transition-colors"
        >
          {t('home')}
        </Link>
      </div>
    </div>
  );
}
