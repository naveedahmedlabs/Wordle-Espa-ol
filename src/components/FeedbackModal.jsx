import React, { useState, useEffect, useRef } from 'react';

const getFingerprint = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const txt = 'WordleUnlimitedFeedback';
  ctx.textBaseline = 'top';
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(txt, 4, 17);
  const result = canvas.toDataURL();
  
  let hash = 0;
  if (result.length === 0) return 'unknown';
  for (let i = 0; i < result.length; i++) {
    const char = result.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Mobile";
  return "Desktop";
};

export default function FeedbackModal({ language = 'en', onClose }) {
  const [type, setType] = useState('feedback');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const turnstileRef = useRef(null);

  const ui = {
    uk: {
      title: "Send Feedback",
      type: "Feedback Type",
      feedback: "General Feedback",
      feature: "Feature Request",
      placeholder: "Tell us what you think...",
      send: "Send",
      success: "Thank you for your feedback!",
      close: "Close"
    }
  };

  const c = ui.uk;



  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending || !message.trim()) return;

    setIsSending(true);
    try {
      const subject = encodeURIComponent(`Wordle Feedback: ${type === 'feature' ? 'Feature Request' : 'General'}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:naveed.ahmed.swe@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSuccess(true);
    } catch (err) {
      console.error('Feedback failed:', err);
    } finally {
      setIsSending(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px' }}>{c.success}</h2>
        <button onClick={onClose} style={{
          background: '#1a1a1b',
          color: 'white',
          border: 'none',
          padding: '10px 30px',
          borderRadius: '8px',
          fontWeight: '700',
          cursor: 'pointer'
        }}>{c.close}</button>
      </div>
    );
  }

  return (
    <div className="feedback-modal" style={{ padding: '10px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px', color: '#1a1a1b' }}>{c.title}</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: '700', color: '#495057' }}>{c.type}</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #dee2e6',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            <option value="feedback">{c.feedback}</option>
            <option value="feature">{c.feature}</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <textarea 
            placeholder={c.placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #dee2e6',
              fontSize: '16px',
              minHeight: '120px',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          type="submit" 
          disabled={isSending || !message.trim()}
          style={{
            background: (isSending || !message.trim()) ? '#ced4da' : '#6aaa64',
            color: 'white',
            border: 'none',
            padding: '14px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '800',
            cursor: (isSending || !message.trim()) ? 'default' : 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {isSending ? '...' : c.send}
        </button>
      </form>
    </div>
  );
}
