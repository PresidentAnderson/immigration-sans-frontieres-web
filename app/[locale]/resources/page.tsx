import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('resources');

  const guides = [
    {
      title: t('guides.visa101.title'),
      description: t('guides.visa101.description'),
      icon: '📘',
    },
    {
      title: t('guides.documents.title'),
      description: t('guides.documents.description'),
      icon: '📋',
    },
    {
      title: t('guides.timeline.title'),
      description: t('guides.timeline.description'),
      icon: '⏱️',
    },
    {
      title: t('guides.preparation.title'),
      description: t('guides.preparation.description'),
      icon: '💬',
    },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  const downloads = [
    { name: t('downloads.checklist'), icon: '📄' },
    { name: t('downloads.timeline'), icon: '📅' },
    { name: t('downloads.forms'), icon: '📝' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-primary-100">{t('description')}</p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">{t('guides.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                <p className="text-gray-600">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-primary-600">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('downloads.title')}
          </h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{download.icon}</div>
                <p className="font-medium text-gray-800">{download.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
