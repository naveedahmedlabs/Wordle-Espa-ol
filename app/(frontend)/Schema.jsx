import React from 'react';

export default function Schema({ seo }) {
  const { title, description, canonical, modifiedDate } = seo || {};

  const webAppSchema = {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "name": "La Palabra del Día - Wordle Español",
    "description": "¡Juega al Wordle en español! Resuelve una nueva palabra cada día, pon a prueba tu vocabulario y disfruta de partidas ilimitadas.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "image": "https://lapalabradeldia.co/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "worstRating": "1",
      "bestRating": "5",
      "ratingValue": "4.8",
      "ratingCount": "3690"
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
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://lapalabradeldia.co/#website",
        "url": "https://lapalabradeldia.co/",
        "name": "La Palabra del Día",
        "publisher": {
          "@id": "https://lapalabradeldia.co/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonical || 'https://lapalabradeldia.co/'}#webpage`,
        "url": canonical || 'https://lapalabradeldia.co/',
        "inLanguage": "es-ES",
        "name": title || "La Palabra del Día - Wordle Español",
        "isPartOf": {
          "@id": "https://lapalabradeldia.co/#website"
        },
        "image": {
          "@type": "ImageObject",
          "@id": `${canonical || 'https://lapalabradeldia.co/'}#primaryimage`,
          "url": "https://lapalabradeldia.co/og-image.png",
          "width": 1200,
          "height": 630
        },
        "primaryImageOfPage": {
          "@id": `${canonical || 'https://lapalabradeldia.co/'}#primaryimage`
        },
        "datePublished": "2022-01-01T00:00:00Z",
        "dateModified": modifiedDate || new Date().toISOString(),
        "description": description || "Juega a Wordle en español a diario."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Por qué mi intento fue rechazado como 'No está en la lista'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wordle en Español utiliza un diccionario verificado de palabras válidas de 5 letras en español. Si tu palabra no es aceptada, puede ser un nombre propio o no encontrarse en el diccionario estándar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se admiten acentos y tildes en el juego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para facilitar la jugabilidad, el juego procesa las palabras en mayúsculas sin distinguir tildes gráficas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué ocurre con mis estadísticas si borro los datos de navegación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tus estadísticas (partidas jugadas, victorias y rachas) se guardan localmente en tu navegador. Si limpias los datos, el historial se reiniciará."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo jugar más de una partida al día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "¡Sí! Puedes resolver la 'Palabra del Día' diaria o jugar tantas partidas consecutivas como desees en el modo 'Ilimitado'."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es necesario descargar alguna app para jugar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No se requiere ninguna descarga ni registro. Puedes jugar directamente en la web desde tu smartphone, tablet u ordenador."
        }
      }
    ]
  };

  let breadcrumbSchema = null;
  if (canonical && (canonical.includes('/wordle-today/') || canonical.includes('/wordle-hints-today/'))) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://lapalabradeldia.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": canonical.includes('/wordle-today/') ? "Palabra del Día" : "Pistas de Hoy",
          "item": canonical
        }
      ]
    };
  }

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}

