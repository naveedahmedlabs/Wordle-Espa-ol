import React from 'react';

export default function Schema({ seo }) {
  const { title, description, canonical, modifiedDate } = seo || {};
  const isDailyHints = canonical && (canonical.includes('/wordle-respuesta-hoy/') || canonical.includes('/pistas-de-hoy/'));
  const isDailyPlay = canonical && (canonical.includes('/palabra-del-dia/') || canonical.includes('/wordle-today/'));
  const effectiveDate = modifiedDate || new Date().toISOString();

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    "name": "La Palabra del Día - Wordle Español",
    "alternateName": "Wordle en Español Ilimitado",
    "description": "Juega gratis a Wordle en español. Adivina la palabra del día en 6 intentos o juega partidas ilimitadas sin esperas.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "image": "https://lapalabradeldia.co/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "La Palabra del Día",
      "url": "https://lapalabradeldia.co/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "worstRating": "1",
      "bestRating": "5",
      "ratingValue": "4.9",
      "ratingCount": "4820"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lapalabradeldia.co/#organization",
        "name": "La Palabra del Día",
        "url": "https://lapalabradeldia.co/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lapalabradeldia.co/favicon.svg"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://lapalabradeldia.co/#website",
        "url": "https://lapalabradeldia.co/",
        "name": "La Palabra del Día",
        "alternateName": "Wordle en Español",
        "publisher": {
          "@id": "https://lapalabradeldia.co/#organization"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "WebPage",
        "@id": `${canonical || 'https://lapalabradeldia.co/'}#webpage`,
        "url": canonical || 'https://lapalabradeldia.co/',
        "inLanguage": "es-ES",
        "name": title || "Wordle Español - La Palabra del Día",
        "isPartOf": {
          "@id": "https://lapalabradeldia.co/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": `${canonical || 'https://lapalabradeldia.co/'}#primaryimage`,
          "url": "https://lapalabradeldia.co/og-image.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": effectiveDate,
        "description": description || "Juega a Wordle en español a diario con pistas y soluciones paso a paso."
      }
    ]
  };

  let articleSchema = null;
  if (isDailyHints || isDailyPlay) {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      },
      "headline": title || "Pistas y Solución de Wordle en Español Hoy",
      "image": [
        "https://lapalabradeldia.co/og-image.png"
      ],
      "datePublished": effectiveDate,
      "dateModified": effectiveDate,
      "author": {
        "@type": "Organization",
        "name": "Equipo Editorial Wordle Español",
        "url": "https://lapalabradeldia.co/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "La Palabra del Día",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lapalabradeldia.co/favicon.svg"
        }
      },
      "description": description || "Solución diaria, pistas progresivas, significado y análisis etimológico para la Palabra del Día de Wordle en español."
    };
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Jugar y Resolver Wordle en Español",
    "description": "Guía paso a paso para jugar y adivinar la palabra secreta de 5 letras en español en 6 intentos.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Escribe una palabra inicial de 5 letras",
        "text": "Introduce una palabra con alta frecuencia de vocales (como PLANO, AIRES o GATOS) y pulsa ENTER."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Revisa los colores de las casillas",
        "text": "Verde indica posición exacta, amarillo indica letra presente en otra posición y gris letra ausente."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Deduce y envía tu siguiente intento",
        "text": "Usa las letras descubiertas para formular tu siguiente palabra hasta acertar la solución final en 6 intentos o menos."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es la respuesta de Wordle en Español hoy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En esta página puedes ver pistas progresivas sin spoilers (letra inicial, conteo de vocales, significado RAE) y desplegar la solución oficial del día si te quedas atascado."
        }
      },
      {
        "@type": "Question",
        "name": "¿A qué hora se publica la nueva Palabra del Día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El reto de Wordle en español se renueva automáticamente cada día a las 00:00 (medianoche) en tu huso horario local."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las mejores palabras para empezar Wordle en español?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las palabras más efectivas son aquellas con 3 o 4 vocales distintas y consonantes comunes, tales como AIRES, OREAS, TENIA, PLANO o CASOS."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se pueden jugar partidas anteriores en el archivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "¡Sí! Nuestro archivo completo recopila todos los retos pasados para que puedas jugar cualquier fecha anterior sin perder tu racha diaria."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://lapalabradeldia.co/"
      },
      ...(canonical && canonical !== 'https://lapalabradeldia.co/' ? [
        {
          "@type": "ListItem",
          "position": 2,
          "name": title || (isDailyHints ? "Pistas y Respuesta Hoy" : isDailyPlay ? "Palabra del Día" : "Archivo"),
          "item": canonical
        }
      ] : [])
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
