import React from 'react';

export default function VariantsPage({ length, language }) {
  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '60vh', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1b' }}>Palabras de {length} Letras para Wordle Español</h1>
      <p style={{ fontSize: '1.2rem', color: '#495057', marginBottom: '40px' }}>
        Explora la lista completa de palabras de {length} letras en español. Ideal para variantes de Wordle y mejorar tu vocabulario.
      </p>
      
      <div className="variants-tool" style={{ padding: '40px 20px', background: '#f8f9fa', borderRadius: '16px', border: '1px solid #dee2e6', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📚</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1a1a1b' }}>Lista de Palabras Próximamente</h2>
        <p style={{ color: '#6c757d', fontWeight: '500' }}>Estamos recopilando el diccionario en español para esta variante.</p>
      </div>
    </div>
  );
}
