import Link from 'next/link';

export default function BlogHeader() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="footer__logo" style={{ margin: 0 }}>
          <span className="footer__logo-icon">W</span>
          <span className="footer__logo-text" style={{ color: '#1a202c' }}>Wordle Unlimited</span>
        </div>
      </Link>
    </header>
  );
}
