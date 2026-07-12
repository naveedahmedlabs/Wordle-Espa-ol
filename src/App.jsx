'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Header from './components/Header';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Modal, { HelpModal, SettingsModal, StatsModal, ChallengeModal, FinishModal } from './components/Modal';
import HowToPlay from './components/HowToPlay';
import Tips from './components/Tips';
import Advantages from './components/Advantages';
import FAQ from './components/FAQ';
import GameCards from './components/GameCards';
import Footer from './components/Footer';
import { getRandomWord, isValidWord, getDailyWord } from './words';
import HintsPage from './HintsPage';
import LanguageSelector from './components/LanguageSelector';
import WordleIntro from './components/WordleIntro';
import RateGame from './components/RateGame';
import Breadcrumbs from './components/Breadcrumbs';
import { PrivacyPage } from './components/TrustPages';
import NotFound from './components/NotFound';
import FeedbackModal from './components/FeedbackModal';
import SEO from './components/SEO';
import { BASE_URL, getSEO } from './seo';
import SolverPage from './views/SolverPage';
import VariantsPage from './views/VariantsPage';

import BlogHeader from './components/BlogHeader';
import { getNYTDate } from './dateUtils';

const UI_TEXT = {
  
  uk: {
    play: 'Play',
    playHelp: 'Press the «Play» button to start playing',
    invalidTitle: '404',
    invalidSubtitle: 'Challenge Not Found',
    invalidDesc: 'The challenge link is invalid or the word doesn\'t exist.',
    playStandard: 'Play Standard Wordle',
    notEnough: 'Not enough letters',
    notInList: 'Not in word list',
    winPrefix: 'Wordle',
    winSuffix: 'You Win! 🏆',
    lostPrefix: 'The answer was: ',
    winMessages: ['Genius!', 'Magnificent!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'],
    guessFirst: 'Guess the first word!',
    wordleGame: 'Wordle Game',
    wordleDesc: 'Guess the hidden word in 6 attempts!',
    dailyFinished: 'You have finished today\'s Wordle!',
    nextWord: 'Next word in:',
    tryUnlimited: 'Try Wordle Unlimited'
  },
  
};

function evaluateGuess(guess, answer) {
  const len = answer.length;
  const states = Array(len).fill('absent');
  const answerArr = answer.split('');
  const guessArr = guess.split('');
  const used = Array(len).fill(false);

  for (let i = 0; i < len; i++) {
    if (guessArr[i] === answerArr[i]) {
      states[i] = 'correct';
      used[i] = true;
    }
  }

  for (let i = 0; i < len; i++) {
    if (states[i] === 'correct') continue;
    for (let j = 0; j < len; j++) {
      if (!used[j] && guessArr[i] === answerArr[j]) {
        states[i] = 'present';
        used[j] = true;
        break;
      }
    }
  }

  return states;
}

function saveStats(stats, mode = 'unlimited') {
  const key = mode === 'daily' ? 'wordle-stats-daily' : 'wordle-stats';
  localStorage.setItem(key, JSON.stringify(stats));
}

function loadStats(mode = 'unlimited') {
  try {
    const key = mode === 'daily' ? 'wordle-stats-daily' : 'wordle-stats';
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    distribution: [0, 0, 0, 0, 0, 0],
  };
}

export default function App() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const location = { pathname, search: searchParams ? '?' + searchParams.toString() : '' };
  const router = useRouter();
  const navigate = (path, options) => {
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };

  const language = 'uk';

  const [gameMode, setGameMode] = useState(() => {
    if (typeof window === 'undefined') return 'unlimited';
    const params = new URLSearchParams(window.location.search);
    if (params.get('challenge')) return 'unlimited';
    
    const path = window.location.pathname;
    if (path.includes('wordle-today')) return 'daily';
    const normPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const isRoot = normPath === '' || normPath === '/';
    if (isRoot) return 'unlimited';
    return localStorage.getItem('wordle-mode') || 'unlimited';
  });

  const [currentView, setCurrentView] = useState(() => {
    if (typeof window === 'undefined') return 'game';
    const path = window.location.pathname;
    // Normalize path for comparison
    const normPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    
    if (normPath === '' || normPath === '/') return 'game';
    if (normPath === '/blogs') return 'blogs';
    if (path.startsWith('/blogs/') && path.length > 7) return 'single-blog';
    if (normPath.includes('wordle-hints-today')) return 'hints';
    if (normPath.includes('wordle-today')) return 'game';
    if (normPath.includes('/privacy')) return 'privacy';
    if (normPath.includes('/wordle-solver')) return 'solver';
    const variantMatch = normPath.match(/\/(\d+)-letter-words/);
    if (variantMatch) return `variants:${variantMatch[1]}`;
    
    return '404';
  });


  // Sync state with location
  useEffect(() => {
    const path = location.pathname;
    
    let newView = 'game';
    const validSlugs = ['wordle-today', 'palabra-del-dia', 'wordle-hints-today', 'pistas-de-hoy', 'privacy', 'privacidad', 'daily', 'hints', 'wordle-solver', '-letter-words'];
    const isRoot = path === '/';
    
    const newMode = (path.includes('wordle-today') || path.includes('palabra-del-dia') || path.includes('wordle-hints-today') || path.includes('pistas-de-hoy') || path.includes('/daily/')) ? 'daily' : 'unlimited';
    
    if (path.startsWith('/blogs/') && path.length > 7) newView = 'single-blog';
    else if (path === '/blogs' || path === '/blogs/') newView = 'blogs';
    else if (path.includes('wordle-hints-today') || path.includes('pistas-de-hoy') || path.includes('/hints/')) newView = 'hints';
    else if (path.includes('/privacy') || path.includes('/privacidad')) newView = 'privacy';
    else if (path.includes('/wordle-solver')) newView = 'solver';
    else if (path.match(/\/\d+-letter-words/)) newView = `variants:${path.match(/\/(\d+)-letter-words/)[1]}`;
    else if (!isRoot && !validSlugs.some(slug => path.includes(slug))) newView = '404';

    if (newMode !== gameMode) setGameMode(newMode);
    if (newView !== currentView) setCurrentView(newView);

    // Global prerender trigger for static pages
    if (newView !== 'single-blog' && newView !== 'blogs') {
      setTimeout(() => document.dispatchEvent(new Event('prerender-trigger')), 1500);
    }
  }, [location.pathname]);

  const ui = UI_TEXT.uk;

  // Per-route SEO copy now lives in src/seo.js and is rendered by <SEO />
  // below. This memo only computes the JSON-LD graph, which still needs the
  // dynamic effective date and per-locale FAQ list. Title / description /
  // canonical / hreflang are sourced from getSEO() so there is exactly one
  // source of truth.
  const schemaGraph = useMemo(() => {
    const seo = getSEO(location.pathname);
    const isDaily = gameMode === 'daily';
    const isHints = currentView === 'hints';
    const isTodayDaily = (() => {
    if (currentView !== 'game' || gameMode !== 'daily') return false;
    const now = getNYTDate();
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const seed = params.get('seed');

    let effectiveDate = now;
    const dateMatch = location.pathname.match(/\d{4}-\d{2}-\d{2}/);
    if (dateMatch) {
      effectiveDate = new Date(dateMatch[0]);
    } else if (seed && /^\d{8}$/.test(seed)) {
      const y = seed.substring(0, 4);
      const m = seed.substring(4, 6);
      const d = seed.substring(6, 8);
      effectiveDate = new Date(y, m - 1, d);
    }
    
    return effectiveDate.toDateString() === now.toDateString();
    })();

    const isPrivacy = currentView === 'privacy';
    const now = getNYTDate();
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const seed = params.get('seed');

    let effectiveDate = now;
    const dateMatch = location.pathname.match(/\d{4}-\d{2}-\d{2}/);
    if (dateMatch) {
      effectiveDate = new Date(dateMatch[0]);
    } else if (seed && /^\d{8}$/.test(seed)) {
      const y = seed.substring(0, 4);
      const m = seed.substring(4, 6);
      const d = seed.substring(6, 8);
      effectiveDate = new Date(y, m - 1, d);
    }

    const isoDate = effectiveDate.toISOString().split('T')[0];
    const baseUrl = BASE_URL;
    const { title, description: desc, canonicalPath: seoPath, isoLang } = seo;

    const faqData = {
      uk: [
        { q: "What is Wordle Unlimited?", a: "Wordle Unlimited is an unrestricted version of the wildly popular daily word puzzle. Your goal is to deduce a hidden five-letter mystery word within six guesses, using colour-coded hints to guide your logic." },
        { q: "How exactly do you play the game?", a: "Begin by typing any valid 5-letter word and hitting Enter. The tiles will flip to reveal colours: Green means the letter is perfectly placed, Yellow means it's in the word but in the wrong spot, and Grey means it's completely absent." },
        { q: "Is it possible to play more than one game a day?", a: "Absolutely! While the original game restricts you to a single daily puzzle, our platform allows you to play infinite, back-to-back matches to practice and refine your skills without ever hitting a paywall or limit." },
        { q: "What happens if I run out of guesses?", a: "If you use up all six attempts without finding the answer, the game will reveal the hidden word to you. You can immediately hit 'New Game' to try again with a fresh puzzle." },
        { q: "Do I need to download an app to play?", a: "No downloads are necessary. You can play directly in your web browser on any device—including iPhones, Android smartphones, iPads, and desktop computers—with full mobile responsiveness." }
      ]
    };

    const currentFaqs = faqData.uk;

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Wordle Game UK",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "@id": `${baseUrl}/#logo`,
            "url": `${baseUrl}/logo.png`,
            "contentUrl": `${baseUrl}/logo.png`,
            "width": 512,
            "height": 512,
            "caption": "Wordle Game UK"
          },
          "image": { "@id": `${baseUrl}/#logo` }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "Wordle Game UK",
          "alternateName": "Wordle Unlimited",
          "publisher": { "@id": `${baseUrl}/#organization` },
          "inLanguage": isoLang
        },

        ...(!['single-blog', 'blogs'].includes(currentView) ? [{
          "@type": "WebPage",
          "@id": `${baseUrl}${seoPath}#webpage`,
          "url": `${baseUrl}${seoPath}`,
          "name": title,
          "isPartOf": { "@id": `${baseUrl}/#website` },
          "primaryImageOfPage": { "@id": `${baseUrl}${seoPath}#primaryimage` },
          "datePublished": (isDaily || isHints) ? `${isoDate}T00:05:00-04:00` : "2024-01-01T00:05:00-04:00",
          "dateModified": seo.modifiedDate || (isDaily || isHints ? `${isoDate}T00:05:00-04:00` : "2024-01-01T00:05:00-04:00"),
          "description": desc,
          "inLanguage": isoLang,
          "potentialAction": [{ "@type": "ReadAction", "target": [`${baseUrl}${seoPath}`] }]
        }] : []),
        ...(!['single-blog', 'blogs'].includes(currentView) && !isHints ? [{
          "@type": "WebApplication",
          "@id": `${baseUrl}/#webapp`,
          "name": "Wordle Unlimited",
          "url": `${baseUrl}${seoPath}`,
          "applicationCategory": "GameApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": { "@id": `${baseUrl}/#organization` },
          "description": desc,
          "inLanguage": isoLang,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.3",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "3690"
          }
        }] : []),
        ...(!['single-blog', 'blogs'].includes(currentView) && !isPrivacy && !isHints ? [{
          "@type": "FAQPage",
          "@id": `${baseUrl}${seoPath}#faq`,
          "mainEntity": currentFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }] : []),
        ...(!['single-blog', 'blogs'].includes(currentView) ? [{
          "@type": "BreadcrumbList",
          "@id": `${baseUrl}${seoPath}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": { "@type": "WebPage", "@id": baseUrl, "url": baseUrl, "name": "Home" }
            },
            ...(isDaily || isHints || isPrivacy ? [{
              "@type": "ListItem",
              "position": 2,
              "item": { "@type": "WebPage", "@id": `${baseUrl}${seoPath}`, "url": `${baseUrl}${seoPath}`, "name": title }
            }] : [])
          ]
        }] : [])
      ]
    };

    return schemaGraph;
  }, [gameMode, currentView, language, location.pathname, location.search]);

  const [answer, setAnswer] = useState(() => {
    if (typeof window === 'undefined') return 'hello';
    const params = new URLSearchParams(window.location.search);
    const challengeParam = params.get('challenge');
    
    // Prioritize Challenge Mode
    if (challengeParam && challengeParam.startsWith('wu_')) {
      try {
        const encoded = challengeParam.replace('wu_', '');
        const decoded = atob(encoded).toLowerCase();
        if (decoded.length >= 4 && decoded.length <= 11) {
          return decoded;
        }
      } catch (e) {}
    }

    const seed = params.get('seed');
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    const saved = localStorage.getItem(key);
    const parsed = saved ? JSON.parse(saved) : null;

    if (gameMode === 'daily') {
      let targetDate = getNYTDate();
      if (seed && /^\d{8}$/.test(seed)) {
        const y = seed.substring(0, 4);
        const m = seed.substring(4, 6);
        const d = seed.substring(6, 8);
        targetDate = new Date(y, m - 1, d);
      }
      return getDailyWord(language, targetDate).word.toLowerCase();
    } else {
      // In unlimited mode, if we have a saved answer, use it
      if (parsed && parsed.answer && !challengeParam) {
        return parsed.answer;
      }
    }
    
    return getRandomWord(language);
  });
  
  const [guesses, setGuesses] = useState(() => {
    if (typeof window === 'undefined') return [];
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (gameMode === 'daily') {
        // Only restore if the word matches
        const params = new URLSearchParams(window.location.search);
        const seed = params.get('seed');
        let targetDate = getNYTDate();
        if (seed && /^\d{8}$/.test(seed)) {
          const y = seed.substring(0, 4);
          const m = seed.substring(4, 6);
          const d = seed.substring(6, 8);
          targetDate = new Date(y, m - 1, d);
        }
        const currentDaily = getDailyWord(language, targetDate).word.toLowerCase();
        if (parsed.answer.toLowerCase() === currentDaily) return parsed.guesses;
      } else {
        const params = new URLSearchParams(window.location.search);
        if (!params.get('challenge')) return parsed.guesses;
      }
    }
    return [];
  });

  const [currentGuess, setCurrentGuess] = useState('');

  const [gameState, setGameState] = useState(() => {
    if (typeof window === 'undefined') return 'playing';
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (gameMode === 'daily') {
        const params = new URLSearchParams(window.location.search);
        const seed = params.get('seed');
        let targetDate = getNYTDate();
        if (seed && /^\d{8}$/.test(seed)) {
          const y = seed.substring(0, 4);
          const m = seed.substring(4, 6);
          const d = seed.substring(6, 8);
          targetDate = new Date(y, m - 1, d);
        }
        const currentDaily = getDailyWord(language, targetDate).word.toLowerCase();
        if (parsed.answer.toLowerCase() === currentDaily) return parsed.gameState;
      } else {
        const params = new URLSearchParams(window.location.search);
        if (!params.get('challenge')) return parsed.gameState;
      }
    }
    return 'playing';
  });

  const [keyStates, setKeyStates] = useState(() => {
    if (typeof window === 'undefined') return {};
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (gameMode === 'daily') {
        const params = new URLSearchParams(window.location.search);
        const seed = params.get('seed');
        let targetDate = getNYTDate();
        if (seed && /^\d{8}$/.test(seed)) {
          const y = seed.substring(0, 4);
          const m = seed.substring(4, 6);
          const d = seed.substring(6, 8);
          targetDate = new Date(y, m - 1, d);
        }
        const currentDaily = getDailyWord(language, targetDate).word.toLowerCase();
        if (parsed.answer.toLowerCase() === currentDaily) return parsed.keyStates;
      } else {
        const params = new URLSearchParams(window.location.search);
        if (!params.get('challenge')) return parsed.keyStates;
      }
    }
    return {};
  });
  const [shakeRow, setShakeRow] = useState(-1);
  const [flipRow, setFlipRow] = useState(-1);
  const [bounceRow, setBounceRow] = useState(-1);
  const [toasts, setToasts] = useState([]);
  const [helpOpen, setHelpOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [stats, setStats] = useState(() => loadStats(gameMode));
  const [darkMode, setDarkMode] = useState(() => typeof window !== 'undefined' && localStorage.getItem('wordle-dark') === 'true');
  const [hardMode, setHardMode] = useState(false);
  const [colorBlind, setColorBlind] = useState(false);
  const [confetti, setConfetti] = useState(true);
  const [showPreview, setShowPreview] = useState(() => typeof window !== 'undefined' && localStorage.getItem('wordle-preview-seen') !== 'true');
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [finishOpen, setFinishOpen] = useState(false);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [showStartPopup, setShowStartPopup] = useState(true);

  const toastIdRef = useRef(0);

  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (gameMode !== 'daily') return;
    const updateTimer = () => {
      const now = getNYTDate();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [gameMode]);

  const showToast = useCallback((message, duration = 1500) => {
    const id = ++toastIdRef.current;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, fading: true } : t)));
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, duration);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('wordle-dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const challengeParam = params.get('challenge');
    
    if (challengeParam) {
      if (answer === 'INVALID') {
        setGameState('invalid_challenge');
      } else {
        // Deep validation of the challenge word
        import('./words').then(({ validateWordOnline }) => {
          validateWordOnline(answer, language).then(result => {
            if (!result.valid) {
              setGameState('invalid_challenge');
            } else {
              showToast("Challenge loaded!", 3000);
              setIsChallengeMode(true);
            }
          });
        });
      }
      // Keep the URL as is so it doesn't "disappear" for the user
    }
  }, [showToast, answer]);

  const recordWin = useCallback((numGuesses) => {
    setStats((prev) => {
      const next = {
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        gamesWon: prev.gamesWon + 1,
        currentStreak: prev.currentStreak + 1,
        maxStreak: Math.max(prev.maxStreak, prev.currentStreak + 1),
        distribution: [...prev.distribution],
      };
      next.distribution[numGuesses - 1]++;
      saveStats(next, gameMode);
      return next;
    });
  }, [gameMode]);

  const recordLoss = useCallback(() => {
    setStats((prev) => {
      const next = {
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        currentStreak: 0,
      };
      saveStats(next, gameMode);
      return next;
    });
  }, [gameMode]);

  const handleKey = useCallback((key) => {
    if (gameState !== 'playing') return;
    if (showStartPopup) setShowStartPopup(false);
      if (flipRow >= 0) return;
      if (showPreview) return;

      if (key === 'Enter') {
        if (currentGuess.length < answer.length) {
          showToast(ui.notEnough);
          setShakeRow(guesses.length);
          setTimeout(() => setShakeRow(-1), 600);
          return;
        }

        const submitGuess = () => {
          const states = evaluateGuess(currentGuess, answer);
          const newGuess = { letters: currentGuess.split(''), states };
          const newGuesses = [...guesses, newGuess];

          setFlipRow(guesses.length);

          const flipDuration = answer.length * 300 + 600;
          setTimeout(() => {
            setFlipRow(-1);

            setKeyStates((prev) => {
              const next = { ...prev };
              for (let i = 0; i < answer.length; i++) {
                const letter = currentGuess[i];
                const newState = states[i];
                const existing = next[letter];
                if (!existing || newState === 'correct' || (newState === 'present' && existing !== 'correct')) {
                  next[letter] = newState;
                }
              }
              return next;
            });

            if (currentGuess === answer) {
              setGameState('won');
              setBounceRow(newGuesses.length - 1);
              const messages = ui.winMessages;
              const daily = gameMode === 'daily' ? getDailyWord(language) : null;
              const winMsg = daily ? `${ui.winPrefix} #${daily.dayNumber} - ${ui.winSuffix}` : `${ui.winSuffix} ${messages[Math.min(newGuesses.length - 1, 5)]}`;
              showToast(winMsg, 3000);
              setTimeout(() => setBounceRow(-1), 1500);
              recordWin(newGuesses.length);
              setTimeout(() => setFinishOpen(true), 2500);
            } else if (newGuesses.length >= 6) {
              setGameState('lost');
              showToast(`${ui.lostPrefix}${answer.toUpperCase()}`, 5000);
              recordLoss();
              setTimeout(() => setFinishOpen(true), 2000);
            }
          }, flipDuration);

          setGuesses(newGuesses);
          setCurrentGuess('');
        };

        if (!isValidWord(currentGuess, language)) {
          // Fallback to online validation
          import('./words').then(({ validateWordOnline }) => {
            validateWordOnline(currentGuess, language).then(result => {
              if (result.valid) {
                submitGuess();
              } else {
                showToast(ui.notInList);
                setShakeRow(guesses.length);
                setTimeout(() => setShakeRow(-1), 600);
              }
            });
          });
          return;
        }

        submitGuess();
        return;
      }

      if (key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (/^[a-zA-Z]$/.test(key)) {
        if (currentGuess.length < answer.length) {
          setCurrentGuess((prev) => prev + key.toLowerCase());
        }
        return;
      }
    },
    [currentGuess, guesses, answer, gameState, flipRow, showPreview, showToast, recordWin, recordLoss]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (helpOpen || settingsOpen || statsOpen || showPreview || challengeOpen || finishOpen) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'Enter' || e.key === 'Backspace' || /^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleKey(e.key);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleKey, helpOpen, settingsOpen, statsOpen, showPreview, challengeOpen, finishOpen]);

  const startNewGame = (length = 5) => {
    if (gameMode === 'daily') {
      const daily = getDailyWord(language);
      setAnswer(daily.word.toLowerCase());
    } else {
      setAnswer(getRandomWord(language, length));
    }
    setGuesses([]);
    setCurrentGuess('');
    setGameState('playing');
    setKeyStates({});
    setShakeRow(-1);
    setFlipRow(-1);
    setBounceRow(-1);
    setToasts([]);
    setStatsOpen(false);
    setFinishOpen(false);
    
    // Clear saved state for the current mode
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    localStorage.removeItem(key);
  };

  const handleModeChange = (mode) => {
    if (mode === gameMode && currentView === 'game') return;
    
    // Save current state before switching
    const currentKey = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    localStorage.setItem(currentKey, JSON.stringify({
      guesses,
      gameState,
      answer,
      keyStates
    }));
    
    localStorage.setItem('wordle-mode', mode);
    setGameMode(mode);
    setStats(loadStats(mode));
    
    // Update URL slug with seed for daily mode
    const prefix = '';
    let dailySlug = 'wordle-today';
    
    let newPath = prefix || '/';
    if (mode === 'daily') {
      const now = getNYTDate();
      const seed = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
      newPath = `${prefix}/${dailySlug}/?seed=${seed}`;
    }
    
    navigate(newPath);
    
    // Load state for new mode
    const nextKey = mode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    const saved = localStorage.getItem(nextKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswer(parsed.answer);
      setGuesses(parsed.guesses);
      setGameState(parsed.gameState);
      setKeyStates(parsed.keyStates);
    } else {
      // Initialize new game for the mode
      if (mode === 'daily') {
        const daily = getDailyWord(language);
        setAnswer(daily.word.toLowerCase());
      } else {
        setAnswer(getRandomWord(language));
      }
      setGuesses([]);
      setGameState('playing');
      setKeyStates({});
    }
    
    setCurrentGuess('');
    setFinishOpen(false);
  };

  // Mount effects for initialization if any (most moved to synchronous initializers)

  useEffect(() => {
    // URL structure enforcement effect removed as it's merged or redundant
  }, [language, gameMode, currentView]);

  useEffect(() => {
    // Enforce URL structure on initial load
    const params = new URLSearchParams(location.search);
    const challengeParam = params.get('challenge');

    // If challenge is present, ensure we are on the language root
    if (challengeParam) {
      const rootPath = '/';
      const currentPath = location.pathname;
      const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;
      
      if (normalizedPath !== rootPath) {
        navigate(`${rootPath}?challenge=${challengeParam}`, { replace: true });
      }
      return;
    }

    const path = location.pathname;
    const isDailyPath = path.includes('wordle-today') || path.includes('palabra-del-dia');
    const isHintsPath = path.includes('wordle-hints-today') || path.includes('pistas-de-hoy');

    if ((isDailyPath || isHintsPath) && !params.get('seed')) {
      const now = getNYTDate();
      const seed = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
      
      const prefix = '';
      let slug = '';
      if (isHintsPath) {
        slug = language === 'es' ? 'pistas-de-hoy' : 'wordle-hints-today';
      } else {
        slug = language === 'es' ? 'palabra-del-dia' : 'wordle-today';
      }
      
      const newPath = `${prefix}/${slug}/?seed=${seed}`;
      navigate(newPath, { replace: true });
    }
  }, [language, location.pathname, location.search]);

  useEffect(() => {
    // Persistent auto-save
    const key = gameMode === 'daily' ? `wordle-state-daily-${language}` : `wordle-state-${language}`;
    localStorage.setItem(key, JSON.stringify({
      guesses,
      gameState,
      answer,
      keyStates
    }));
  }, [guesses, gameState, answer, keyStates, gameMode, language]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    const now = getNYTDate();
    const seed = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    
    const prefix = language === 'en' ? '' : `/${language}`;
    let newPath = prefix || '/';
    
    if (view === 'hints') {
      const slug = language === 'es' ? 'pistas-de-hoy' : 'wordle-hints-today';
      newPath = `${prefix}/${slug}/?seed=${seed}`;
    } else if (gameMode === 'daily') {
      const slug = language === 'es' ? 'palabra-del-dia' : 'wordle-today';
      newPath = `${prefix}/${slug}/?seed=${seed}`;
    }
    
    navigate(newPath);
  };

  useEffect(() => {
    // Handle manual hash scrolls if needed, but react-router usually handles path
  }, [location]);

  const handleGiveUp = () => {
    if (gameState !== 'playing') return;
    setGameState('lost');
    recordLoss();
    setTimeout(() => setFinishOpen(true), 500);
  };

  return (
    <>
      {/*
        Route-based head tags (title, description, canonical, hreflang, OG,
        Twitter, html[lang]) live in <SEO />, driven by useLocation(). Keeping
        the JSON-LD graph separate lets us source its title/desc/canonical from
        the same getSEO() lookup without re-injecting the basic tags here.
      */}
      <SEO />
      
      {currentView === 'blogs' || currentView === 'single-blog' ? (
        <BlogHeader />
      ) : (
        <Header
          gameMode={gameMode}
          currentView={currentView}
          onModeChange={handleModeChange}
          onViewChange={handleViewChange}
          onFeedback={() => setFeedbackOpen(true)}
          onHelp={() => setHelpOpen(true)}
          onSettings={() => setSettingsOpen(true)}
          onStats={() => setStatsOpen(true)}
          onGiveUp={handleGiveUp}
          onChallenge={() => setChallengeOpen(true)}
          gameState={gameState}
          guessesCount={guesses.length}
          language={language}
        />
      )}

      <main style={{ flex: 1, marginTop: '80px' }}>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Wordle UK - Unlimited Free Word Puzzle Game Online</h1>
        {currentView === 'hints' ? (
          <HintsPage language={language} onBack={() => handleViewChange('game')} />
        ) : currentView === 'privacy' ? (
          <PrivacyPage language={language} />
        ) : currentView === 'solver' ? (
          <SolverPage language={language} />
        ) : currentView.startsWith('variants:') ? (
          <VariantsPage length={currentView.split(':')[1]} language={language} />
        ) : currentView === '404' ? (
          <NotFound language={language} onHome={() => navigate(language === 'en' ? '/' : `/${language}/`)} />
        ) : (
          <>
                {isChallengeMode && (
              <div className="challenge-banner" style={{
                background: '#e9ecef',
                color: '#495057',
                padding: '6px 16px',
                borderRadius: '20px',
                textAlign: 'center',
                fontSize: '12px',
                fontWeight: '700',
                position: 'fixed',
                top: '120px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 90,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid #dee2e6'
              }}>
                <span>🎮 Challenge Active ({answer.length} letters)</span>
                <button 
                  onClick={() => {
                    const prefix = language === 'en' ? '' : `/${language}`;
                    const rootPath = prefix || '/';
                    const url = `${window.location.origin}${rootPath}?challenge=wu_${btoa(answer.toLowerCase())}`;
                    navigator.clipboard.writeText(url);
                    showToast("Link copied!");
                  }}
                  style={{
                    background: '#6c757d',
                    border: 'none',
                    color: 'white',
                    padding: '2px 10px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    textTransform: 'uppercase'
                  }}
                >
                  Copy
                </button>
              </div>
            )}
            
            <div className="uk-spelling-callout" style={{
              background: '#f8f9fa',
              color: '#495057',
              padding: '8px 16px',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '600',
              maxWidth: '500px',
              margin: '0 auto 16px auto',
              border: '1px solid #dee2e6'
            }}>
              🇬🇧 UK-only word list — British spellings accepted!
            </div>

            <div className="game" id="game" style={{ marginTop: isChallengeMode ? '60px' : '0' }}>
              <div className="game__board-wrapper" style={{ position: 'relative' }}>
                {showStartPopup && guesses.length === 0 && (
                  <div 
                    className="start-prompt" 
                    onClick={() => setShowStartPopup(false)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 50,
                      background: 'white',
                      padding: '20px 40px',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      animation: 'pulse 2s infinite'
                    }}
                  >
                    <h2 style={{ color: '#1a1a1b', margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>
                      {ui.guessFirst}
                    </h2>
                  </div>
                )}
                {showPreview && (
                  <div className="game__preview start-preview">
                    <h3 className="game__title">{ui.wordleGame}</h3>
                    <p className="game__desc">{ui.wordleDesc}</p>
                    <button 
                      className="game__btn js-start-preview"
                      onClick={() => {
                        setShowPreview(false);
                        localStorage.setItem('wordle-preview-seen', 'true');
                      }}
                    >
                      {ui.play}
                    </button>
                    <span className="game__help">{ui.playHelp}</span>
                  </div>
                )}
                <Grid
                  guesses={guesses}
                  currentGuess={currentGuess}
                  currentRow={guesses.length}
                  shakeRow={shakeRow}
                  flipRow={flipRow}
                  bounceRow={bounceRow}
                  wordLength={answer.length}
                />
              </div>

              {gameState === 'invalid_challenge' && (
                <div className="invalid-challenge-overlay" style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.85)',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>{ui.invalidTitle}</h1>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{ui.invalidSubtitle}</h2>
                  <p style={{ marginBottom: '30px', opacity: 0.8 }}>{ui.invalidDesc}</p>
                  <button 
                    className="new-game-btn" 
                    onClick={() => {
                      setAnswer(getRandomWord(language));
                      setGameState('playing');
                    }}
                  >
                    {ui.playStandard}
                  </button>
                </div>
              )}

              {gameMode === 'daily' && gameState !== 'playing' ? (
                <div style={{ 
                  margin: '20px auto', 
                  padding: '24px', 
                  background: '#f8f9fa', 
                  borderRadius: '16px',
                  maxWidth: '400px',
                  width: '90%',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '1.25rem', fontWeight: '800', color: '#1a1a1b' }}>
                    {ui.dailyFinished}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '1rem', color: '#6c757d', fontWeight: '500' }}>
                    {ui.nextWord} <span style={{ fontFamily: 'monospace', fontWeight: '800', color: '#1a1a1b' }}>{timeLeft}</span>
                  </p>
                  <button 
                    onClick={() => handleModeChange('unlimited')}
                    style={{
                      background: '#6aaa64',
                      color: 'white',
                      border: 'none',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      width: '100%',
                      boxShadow: '0 4px 0 #53844e'
                    }}
                  >
                    {ui.tryUnlimited}
                  </button>
                </div>
              ) : (
                <Keyboard onKey={handleKey} keyStates={keyStates} />
              )}
            </div>

            <div className="content-sections">
              <WordleIntro language={language} mode={gameMode} />
              {gameMode !== 'daily' && (
                <>
                  <HowToPlay language={language} />
                  <Tips language={language} />
                  <Advantages language={language} />
                  <FAQ language={language} />
                </>
              )}
              <RateGame language={language} />
              <GameCards language={language} />
            </div>
          </>
        )}
      </main>

      <Footer language={language} />

      <div className="toast-container" id="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast${t.fading ? ' fade-out' : ''}`}>
            {t.message}
          </div>
        ))}
      </div>



      <Modal isOpen={helpOpen} onClose={() => setHelpOpen(false)}>
        <HelpModal onClose={() => setHelpOpen(false)} language={language} />
      </Modal>

      <Modal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)}>
        <SettingsModal
          onClose={() => setSettingsOpen(false)}
          darkMode={darkMode}
          onDarkMode={() => setDarkMode((d) => !d)}
          hardMode={hardMode}
          onHardMode={() => setHardMode((h) => !h)}
          colorBlind={colorBlind}
          onColorBlind={() => setColorBlind((c) => !c)}
          confetti={confetti}
          onConfetti={() => setConfetti((c) => !c)}
          language={language}
        />
      </Modal>

      <Modal isOpen={statsOpen} onClose={() => setStatsOpen(false)}>
        <StatsModal 
          stats={stats} 
          onNewGame={startNewGame} 
          gameState={gameState} 
          onClose={() => setStatsOpen(false)}
          language={language}
        />
      </Modal>

      <Modal isOpen={challengeOpen} onClose={() => setChallengeOpen(false)}>
        <ChallengeModal onClose={() => setChallengeOpen(false)} language={language} />
      </Modal>

      <Modal isOpen={feedbackOpen} onClose={() => setFeedbackOpen(false)}>
        <FeedbackModal language={language} onClose={() => setFeedbackOpen(false)} />
      </Modal>

      <Modal isOpen={finishOpen} onClose={() => setFinishOpen(false)}>
        <FinishModal 
          isWin={gameState === 'won'}
          answer={answer} 
          onNewGame={() => startNewGame(answer.length)} 
          onClose={() => setFinishOpen(false)}
          language={language}
          gameMode={gameMode}
          onSwitchMode={handleModeChange}
        />
      </Modal>
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
