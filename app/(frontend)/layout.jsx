import '../../src/styles/global.css';
import '../../src/styles/game.css';
import StyledComponentsRegistry from './registry';

import Script from 'next/script';

export const metadata = {
  title: 'Wordle Español - Juego de Palabras Ilimitado Online Gratis',
  description: 'Juega a Wordle en español online gratis. Adivina palabras ilimitadas de 5 letras, pon a prueba tu vocabulario y disfruta del reto de la palabra del día.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6aaa64" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4YWSCX6ML2" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-4YWSCX6ML2');
            `,
          }}
        />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
