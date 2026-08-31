import { siteConfig, ServiceItem, BlogPost } from './config/site';

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": siteConfig.name,
    "description": siteConfig.defaultMetaDescription,
    "url": siteConfig.SITE_URL,
    "telephone": siteConfig.isPhoneConfigured() ? siteConfig.PHONE_NUMBER : undefined,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.city,
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "الرياض",
        "sameAs": "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
      },
      { "@type": "AdministrativeArea", "name": "شمال الرياض" },
      { "@type": "AdministrativeArea", "name": "شرق الرياض" },
      { "@type": "AdministrativeArea", "name": "غرب الرياض" },
      { "@type": "AdministrativeArea", "name": "جنوب الرياض" },
      { "@type": "AdministrativeArea", "name": "وسط الرياض" }
    ],
    "serviceType": [
      "كهربائي منازل بالرياض",
      "صيانة كهرباء بالرياض",
      "سباك منازل بالرياض",
      "كشف وإصلاح تسربات المياه",
      "تسليك مجاري بالرياض",
      "تركيب الأدوات الصحية",
      "صيانة السخانات والمضخات"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };
}

export function getServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.shortTitle,
    "description": service.shortDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": siteConfig.name,
      "url": siteConfig.SITE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": "الرياض"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": siteConfig.currency,
      "availability": "https://schema.org/InStock"
    }
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.SITE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteConfig.getCanonicalUrl(`/blog/${post.slug}`)
    }
  };
}
