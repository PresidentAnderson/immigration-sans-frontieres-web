import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const serviceCategories = [
    {
      title: t('visa.title'),
      icon: '🛂',
      items: [
        t('visa.work'),
        t('visa.study'),
        t('visa.family'),
        t('visa.tourist'),
        t('visa.business'),
      ],
    },
    {
      title: t('residency.title'),
      icon: '🏠',
      items: [
        t('residency.permanent'),
        t('residency.citizenship'),
        t('residency.naturalization'),
        t('residency.renewal'),
      ],
    },
    {
      title: t('business.title'),
      icon: '💼',
      items: [
        t('business.entrepreneur'),
        t('business.investor'),
        t('business.corporate'),
        t('business.startup'),
      ],
    },
    {
      title: t('support.title'),
      icon: '🤝',
      items: [
        t('support.consultation'),
        t('support.assessment'),
        t('support.documentation'),
        t('support.translation'),
        t('support.representation'),
        t('support.followup'),
      ],
    },
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('support.consultation')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('support.assessment')}
          </p>
        </div>
      </section>
    </div>
  );
}
