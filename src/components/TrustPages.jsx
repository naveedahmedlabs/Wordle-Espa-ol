import React from 'react';

const containerStyle = {
  padding: '100px 20px 60px',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.8',
  color: 'var(--color-text-dark)'
};

const h1Style = { fontSize: '2.5rem', fontWeight: '900', marginBottom: '8px' };
const h2Style = { fontSize: '1.4rem', fontWeight: '800', marginTop: '36px', marginBottom: '14px' };
const pStyle = { marginBottom: '16px', fontSize: '1rem' };
const ulStyle = { paddingLeft: '24px', marginBottom: '16px' };
const liStyle = { marginBottom: '8px' };
const updatedStyle = { fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '28px' };

const PRIVACY = {

  uk: {
    title: 'Privacy Policy',
    updated: 'Last updated: 12 May 2026',
    intro: 'Welcome to Wordle Unlimited ("we", "us", or "our"), accessible at wordlegame.co.uk. Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.',
    sections: [
      {
        heading: 'Information We Collect',
        content: 'We do not require you to create an account or provide any personal information to play our game. However, we may collect limited data automatically:',
        list: [
          'Game statistics and preferences — stored locally on your device via browser localStorage. This data never leaves your device.',
          'Anonymous usage data — we may use privacy-friendly analytics to understand how visitors interact with the site (e.g. page views, country-level location). No personally identifiable information is collected.',
          'Device fingerprint for ratings — when you submit a game rating, we generate an anonymous device fingerprint to prevent duplicate votes. This is not linked to your identity.'
        ]
      },
      {
        heading: 'Cookies and Local Storage',
        content: 'We use browser localStorage to save your game progress, statistics, streaks, and display preferences (such as dark mode). We do not use tracking cookies. Third-party services embedded on our site (such as Cloudflare) may set their own cookies for security and performance purposes.'
      },
      {
        heading: 'Third-Party Services',
        content: 'We use the following third-party services:',
        list: [
          'Cloudflare — for content delivery, security, and bot protection (Turnstile).',
          'Supabase — for storing anonymous game ratings and feedback submissions.',
          'Hostinger — for web hosting.'
        ],
        after: 'These services have their own privacy policies. We encourage you to review them.'
      },
      {
        heading: 'Data Retention',
        content: 'All game data is stored locally on your device and can be cleared at any time by clearing your browser data. Anonymous rating and feedback data stored on our servers is retained indefinitely but contains no personally identifiable information.'
      },
      {
        heading: 'Children\'s Privacy',
        content: 'Our game is suitable for all ages. We do not knowingly collect personal information from children under 13. Since we do not collect personal data, no special provisions are required under the UK Age Appropriate Design Code or similar regulations.'
      },
      {
        heading: 'Your Rights (UK GDPR)',
        content: 'Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, rectify, and erase your personal data. Since we do not collect personal data, there is typically no information to act upon. If you have submitted feedback and wish to have it removed, please contact us.'
      },
      {
        heading: 'Changes to This Policy',
        content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the updated policy.'
      },
      {
        heading: 'Contact Us',
        content: 'If you have any questions about this Privacy Policy, you can reach us at: privacy@wordlegame.co.uk'
      }
    ]
  },

};

const TERMS = {

  uk: {
    title: 'Terms of Service',
    updated: 'Last updated: 12 May 2026',
    intro: 'By accessing and using Wordle Unlimited at wordlegame.co.uk ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Service.',
    sections: [
      {
        heading: '1. Use of the Service',
        content: 'Wordle Unlimited is a free, browser-based word puzzle game. You may use the Service for personal, non-commercial entertainment purposes. You agree not to:',
        list: [
          'Use automated tools, bots, or scripts to interact with the game.',
          'Attempt to scrape, reverse-engineer, or extract the word databases.',
          'Interfere with or disrupt the Service or its infrastructure.',
          'Use the Service for any unlawful purpose.'
        ]
      },
      {
        heading: '2. Intellectual Property',
        content: 'All content on this site, including game logic, design, graphics, and text, is the property of Wordle Unlimited or its licensors. You may not reproduce, distribute, or create derivative works without our written permission. The word puzzle concept is in the public domain, but our specific implementation is proprietary.'
      },
      {
        heading: '3. User-Generated Content',
        content: 'When you submit feedback or feature requests through our platform, you grant us a non-exclusive, royalty-free licence to use that content to improve the Service. Do not submit any content that is offensive, harmful, or infringes on the rights of others.'
      },
      {
        heading: '4. Disclaimer of Warranties',
        content: 'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or free of harmful components. You use the Service at your own risk.'
      },
      {
        heading: '5. Limitation of Liability',
        content: 'To the fullest extent permitted by applicable UK law, Wordle Unlimited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under UK law.'
      },
      {
        heading: '6. Third-Party Services',
        content: 'The Service may contain links to third-party websites or use third-party services (Cloudflare, Supabase). We are not responsible for the content, privacy policies, or practices of these third-party services.'
      },
      {
        heading: '7. Modifications',
        content: 'We reserve the right to modify or discontinue the Service at any time without notice. We may also update these Terms of Service from time to time. Continued use of the Service after changes constitutes acceptance of the updated terms.'
      },
      {
        heading: '8. Governing Law',
        content: 'These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or the use of the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.'
      },
      {
        heading: '9. Contact',
        content: 'If you have questions about these Terms of Service, you can reach us at: legal@wordlegame.co.uk'
      }
    ]
  },

};

function renderSections(sections) {
  return sections.map((section, idx) => (
    <div key={idx}>
      <h2 style={h2Style}>{section.heading}</h2>
      <p style={pStyle}>{section.content}</p>
      {section.list && (
        <ul style={ulStyle}>
          {section.list.map((item, i) => (
            <li key={i} style={liStyle}>{item}</li>
          ))}
        </ul>
      )}
      {section.after && <p style={pStyle}>{section.after}</p>}
    </div>
  ));
}

export function PrivacyPage({ language = 'en' }) {
  const c = PRIVACY[language] || PRIVACY.en;
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>{c.title}</h1>
      <p style={updatedStyle}>{c.updated}</p>
      <p style={pStyle}>{c.intro}</p>
      {renderSections(c.sections)}
    </div>
  );
}

export function TermsPage({ language = 'en' }) {
  const c = TERMS[language] || TERMS.en;
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>{c.title}</h1>
      <p style={updatedStyle}>{c.updated}</p>
      <p style={pStyle}>{c.intro}</p>
      {renderSections(c.sections)}
    </div>
  );
}
