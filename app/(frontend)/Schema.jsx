import React from 'react';

export default function Schema({ seo }) {
  const { title, description, canonical, modifiedDate } = seo || {};

  const webAppSchema = {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "name": "Wordle Game UK - Guess Word of the Day",
    "description": "Play today's Wordle game! Solve a new word every day, test your vocabulary, and improve your guessing skills. Start playing Wordle now!",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
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
        "name": "Why was my guess rejected as 'Not in word list'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wordle UK uses a strict British English dictionary. If your guess is rejected, it may be a proper noun, an invalid word, or spelled using US conventions instead of UK conventions (e.g., try 'COLOUR' instead of 'COLOR')."
        }
      },
      {
        "@type": "Question",
        "name": "Are British spellings supported in this version?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Unlike generic versions of the game, Wordle UK natively accepts and occasionally features words with British English spellings as the daily solution."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to my stats if I clear my browser cache?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your game statistics, including win rate and daily streaks, are saved locally in your browser's storage. If you clear your cache or use a private browsing window, your stats will be reset."
        }
      },
      {
        "@type": "Question",
        "name": "Can I transfer my stats to a new phone or computer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, all game data is stored locally on the device you are using. Because there is no central account system, transferring stats across different devices is not supported."
        }
      },
      {
        "@type": "Question",
        "name": "How do I turn on Hard Mode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can enable Hard Mode by clicking the gear icon (Settings) in the top right corner and toggling the Hard Mode switch. It must be turned on before making your first guess."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Hard Mode different from the standard game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Hard Mode, any clues you uncover must be used in all subsequent guesses. For example, if you find a green 'A', every following guess must contain an 'A' in that exact position."
        }
      },
      {
        "@type": "Question",
        "name": "Why am I seeing the same daily word as yesterday?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The daily puzzle updates at midnight local time. If you are seeing yesterday's word, try refreshing the page or checking that your device's timezone and date are set correctly."
        }
      },
      {
        "@type": "Question",
        "name": "The game froze or isn't loading properly, how do I fix it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is usually caused by a network glitch or a strict ad-blocker. Try refreshing the page, disabling aggressive content blockers, or updating your browser to the latest version."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play previous daily puzzles that I missed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'UK Wordle Today' puzzle is locked to the current calendar date. However, you can play as many random puzzles as you like in the 'Unlimited' mode to make up for missed days."
        }
      },
      {
        "@type": "Question",
        "name": "Does Wordle UK require an active internet connection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An internet connection is required to load the page initially and to fetch the daily puzzle. Once loaded, you can finish your current game offline, but you'll need a connection to start a new one."
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
          "name": "Home",
          "item": "https://wordlegame.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": canonical.includes('/wordle-today/') ? "Wordle Today" : "Wordle Hints Today",
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

