import { FC } from "react";

interface StructuredDataProps {
  type: "organization" | "service" | "localBusiness";
  data: any;
}

export const StructuredData: FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "КонсалтЦентр",
          alternateName: "ConsultCenter",
          description:
            "Профессиональные консалтинговые и бухгалтерские услуги для бизнеса",
          url: "https://consultcenter.ru",
          logo: "https://consultcenter.ru/images/Logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Карасунская, 60",
            addressLocality: "Краснодар",
            addressRegion: "Краснодарский край",
            addressCountry: "RU",
            postalCode: "350000",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7-915-939-18-13",
            contactType: "customer service",
            availableLanguage: "Russian",
          },
          email: "info.consultcenter@yandex.ru",
          sameAs: [
            "https://vk.com/consultcenter",
            "https://t.me/consultcenter",
          ],
          foundingDate: "2014",
          numberOfEmployees: "5-10",
          areaServed: {
            "@type": "City",
            name: "Симферополь",
          },
          serviceType: [
            "Бухгалтерские услуги",
            "Консалтинговые услуги",
            "Налоговое планирование",
            "Ведение учета ИП",
            "Ведение учета ООО",
          ],
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "КонсалтЦентр",
            url: "https://consultcenter.ru",
          },
          areaServed: {
            "@type": "City",
            name: "Краснодар",
          },
          serviceType: data.serviceType,
          offers: data.offers
            ? {
                "@type": "Offer",
                price: data.offers.price,
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
              }
            : undefined,
        };

      case "localBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "КонсалтЦентр",
          description: "Бухгалтерские и консалтинговые услуги в Краснодаре",
          url: "https://consultcenter.ru",
          telephone: "+7-915-939-18-13",
          email: "info.consultcenter@yandex.ru",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Карасунская, 60",
            addressLocality: "Краснодар",
            addressRegion: "Краснодарский край",
            addressCountry: "RU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "45.0448",
            longitude: "38.976",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$",
          serviceArea: {
            "@type": "City",
            name: "Краснодар",
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
};
