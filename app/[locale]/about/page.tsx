import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const values = [
    t('values.integrity'),
    t('values.excellence'),
    t('values.compassion'),
    t('values.advocacy'),
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">{t('title')}</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('story.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('story.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600"
                >
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
