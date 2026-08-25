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
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: 12 de mayo de 2026',
    intro: 'Bienvenido a La Palabra del Día ("nosotros", "nuestro"), accesible en lapalabradeldia.co. Tu privacidad es fundamental para nosotros. Esta Política de Privacidad describe qué información tratamos, cómo la utilizamos y tus derechos.',
    sections: [
      {
        heading: 'Información que Recopilamos',
        content: 'No requerimos registro de usuario ni datos personales para jugar. No obstante, recopilamos datos técnicos mínimos de forma automática:',
        list: [
          'Estadísticas y preferencias de juego — guardadas exclusivamente de forma local en tu dispositivo mediante localStorage del navegador. Estos datos nunca salen de tu equipo.',
          'Datos anónimos de uso — empleamos analítica anónima y respetuosa con la privacidad para entender cómo interactúan los usuarios con el sitio (ej. páginas vistas, país). No recopilamos información de identificación personal.',
          'Huella anónima de dispositivo para valoraciones — cuando calificas el juego, se genera un identificador anónimo local para evitar votos duplicados sin vincularlo a tu identidad.'
        ]
      },
      {
        heading: 'Cookies y Almacenamiento Local',
        content: 'Utilizamos el almacenamiento local (localStorage) del navegador para recordar tu progreso, estadísticas y preferencias (como el modo oscuro). No usamos cookies de seguimiento publicitario. Servicios de infraestructura como Cloudflare pueden aplicar cookies técnicas de seguridad y rendimiento.'
      },
      {
        heading: 'Servicios de Terceros',
        content: 'Utilizamos los siguientes servicios de terceros:',
        list: [
          'Cloudflare — para entrega de contenido, seguridad y protección contra bots (Turnstile).',
          'Supabase — para almacenar valoraciones anónimas y comentarios voluntarios.',
          'Hostinger — para alojamiento web.'
        ],
        after: 'Dichos servicios cuentan con sus propias políticas de privacidad independientes.'
      },
      {
        heading: 'Conservación de Datos',
        content: 'Tus datos de juego se almacenan únicamente en tu navegador y puedes eliminarlos en cualquier momento borrando los datos de navegación.'
      },
      {
        heading: 'Privacidad de Menores',
        content: 'Nuestro juego es apto para todas las edades. No recopilamos conscientemente datos de menores de 13 años.'
      },
      {
        heading: 'Tus Derechos de Privacidad',
        content: 'Conforme a la normativa general de protección de datos (RGPD), tienes derecho de acceso, rectificación y supresión. Al no almacenar datos personales vinculados a identidades individuales, no mantenemos perfiles nominativos.'
      },
      {
        heading: 'Modificaciones',
        content: 'Podemos actualizar esta política periódicamente. Cualquier cambio se publicará en esta página con la fecha de revisión actualizada.'
      },
      {
        heading: 'Contacto',
        content: 'Si tienes alguna duda sobre esta Política de Privacidad, puedes escribirnos a: privacy@lapalabradeldia.co'
      }
    ]
  },
};

const TERMS = {
  es: {
    title: 'Términos de Servicio',
    updated: 'Última actualización: 12 de mayo de 2026',
    intro: 'Al acceder y utilizar La Palabra del Día en lapalabradeldia.co ("el Servicio"), aceptas estos Términos de Servicio. Si no estás de acuerdo con alguno de ellos, te rogamos no utilizar el sitio.',
    sections: [
      {
        heading: '1. Uso del Servicio',
        content: 'La Palabra del Día es un juego de palabras gratuito accesible a través del navegador web para entretenimiento personal y no comercial. Te comprometes a no:',
        list: [
          'Utilizar bots, scripts automatizados o herramientas de extracción masiva.',
          'Intentar realizar ingeniería inversa o extraer indebidamente las bases de datos de palabras.',
          'Interferir o alterar la infraestructura y normal funcionamiento del Servicio.',
          'Utilizar el Servicio con fines ilícitos o fraudulentos.'
        ]
      },
      {
        heading: '2. Propiedad Intelectual',
        content: 'Todo el contenido del sitio, incluyendo diseño, código, elementos gráficos e interfaz, pertenece a La Palabra del Día o a sus licenciantes. El concepto de puzle de palabras es de dominio público, pero nuestra implementación concreta es propietaria.'
      },
      {
        heading: '3. Exención de Garantías',
        content: 'El Servicio se proporciona "tal cual" y "según disponibilidad", sin garantías expresas o implícitas sobre continuidad o ausencia de errores.'
      },
      {
        heading: '4. Contacto',
        content: 'Para consultas relativas a estos Términos de Servicio, puedes contactar con: legal@lapalabradeldia.co'
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

export function PrivacyPage({ language = 'es' }) {
  const c = PRIVACY.es;
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>{c.title}</h1>
      <p style={updatedStyle}>{c.updated}</p>
      <p style={pStyle}>{c.intro}</p>
      {renderSections(c.sections)}
    </div>
  );
}

export function TermsPage({ language = 'es' }) {
  const c = TERMS.es;
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>{c.title}</h1>
      <p style={updatedStyle}>{c.updated}</p>
      <p style={pStyle}>{c.intro}</p>
      {renderSections(c.sections)}
    </div>
  );
}
