import React from 'react';

export default function Schema({ seo }) {
  const { title, description, canonical, modifiedDate } = seo || {};

  const productSchema = {
    "@context": "http://schema.org",
    "@type": "Product",
    "brand": "https://wordlegame.co.uk",
    "name": "Wordle Game UK - Guess Word of the Day",
    "description": "Play today's Wordle game! Solve a new word every day, test your vocabulary, and improve your guessing skills. Start playing Wordle now!",
    "category": "Productivity",
    "image": "https://wordlegame.co.uk/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "worstRating": "1",
      "bestRating": "5",
      "ratingValue": "4.8",
      "ratingCount": "2512"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wordlegame.co.uk/#organization",
        "name": "Wordle Game UK",
        "url": "https://wordlegame.co.uk/",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://wordlegame.co.uk/#website",
        "url": "https://wordlegame.co.uk/",
        "name": "Wordle Game UK",
        "publisher": {
          "@id": "https://wordlegame.co.uk/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonical || 'https://wordlegame.co.uk/'}#webpage`,
        "url": canonical || 'https://wordlegame.co.uk/',
        "inLanguage": "en",
        "name": title || "Wordle Game UK",
        "isPartOf": {
          "@id": "https://wordlegame.co.uk/#website"
        },
        "image": {
          "@type": "ImageObject",
          "@id": `${canonical || 'https://wordlegame.co.uk/'}#primaryimage`,
          "url": "https://wordlegame.co.uk/og-image.png",
          "width": 1200,
          "height": 630
        },
        "primaryImageOfPage": {
          "@id": `${canonical || 'https://wordlegame.co.uk/'}#primaryimage`
        },
        "datePublished": "2021-04-12T19:42:27-12:00",
        "dateModified": modifiedDate || new Date().toISOString(),
        "description": description || "Play Wordle UK daily."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Wordle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wordle is a daily word guessing game where players have six attempts to guess a hidden five-letter word."
        }
      },
      {
        "@type": "Question",
        "name": "How do you play Wordle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guess any valid five-letter word. After each guess, the color of the tiles will change to show how close your guess was to the word. Green means the letter is in the correct spot, yellow means the letter is in the word but wrong spot, and gray means the letter is not in the word."
        }
      },
      {
        "@type": "Question",
        "name": "Is Wordle free to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Wordle is completely free to play online."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
