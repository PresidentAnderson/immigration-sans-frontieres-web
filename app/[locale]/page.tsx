import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = useTranslations('home');

  const services = [
    {
      icon: '📋',
      title: t('services.visa.title'),
      description: t('services.visa.description'),
    },
    {
      icon: '🏛️',
      title: t('services.citizenship.title'),
      description: t('services.citizenship.description'),
    },
    {
      icon: '💼',
      title: t('services.consultation.title'),
      description: t('services.consultation.description'),
    },
    {
      icon: '📄',
      title: t('services.documentation.title'),
      description: t('services.documentation.description'),
    },
  ];

  const features = [
    {
      icon: '⭐',
      title: t('why.experience.title'),
      description: t('why.experience.description'),
    },
    {
      icon: '🎯',
      title: t('why.personalized.title'),
      description: t('why.personalized.description'),
    },
    {
      icon: '✅',
      title: t('why.success.title'),
      description: t('why.success.description'),
    },
    {
      icon: '🤝',
      title: t('why.support.title'),
      description: t('why.support.description'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg mb-8 text-primary-50">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors text-center border border-primary-500"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {locale === 'fr'
              ? 'Prêt à commencer votre parcours d\'immigration?'
              : 'Ready to start your immigration journey?'}
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            {locale === 'fr'
              ? 'Planifiez une consultation gratuite avec nos experts dès aujourd\'hui.'
              : 'Schedule a free consultation with our experts today.'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
