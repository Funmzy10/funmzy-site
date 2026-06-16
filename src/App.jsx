import { useState, useEffect, useRef } from 'react'

/* ── Scroll animation hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ── SVG Icons ── */
const IconTelegram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.024 9.54c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.278 14.38l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.541.206z"/>
  </svg>
)
const IconX = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const IconMail = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconArrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
const IconDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"/>
  </svg>
)
const IconMenu = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
)
const IconClose = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconGlobe = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const IconVideo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2"/>
  </svg>
)
const IconChart = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)
const IconZap = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconStar = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconExternal = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const IconUsers = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconChevronRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6"/>
  </svg>
)

/* ─────────────────────────────────────────
   ANNOUNCEMENT STRIP — scarcity + proof
───────────────────────────────────────── */
function AnnouncementStrip() {
  return (
    <div className="w-full py-2 px-4 text-center" style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }}>
      <p className="text-white font-bold uppercase tracking-widest text-xs">
        2 slots open — June 2026. Last client went live in 18hrs.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
  }

  const links = [['Services', 'services'], ['Work', 'work'], ['About', 'about'], ['Contact', 'contact']]

  return (
    <>
      <nav className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,15,30,0.97)' : 'rgba(10,15,30,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
        }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold tracking-widest text-white text-base">
            FUNMZY
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> ✦</span>
          </span>
          <div className="hidden sm:flex items-center gap-8">
            {links.map(([l, id]) => (
              <button key={id} onClick={() => go(id)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent border-0">
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://t.me/Funmzydasilva" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 4px 16px rgba(99,102,241,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)'}>
              Start a Project <IconArrow size={13} />
            </a>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}
              className="sm:hidden text-slate-300 hover:text-white cursor-pointer bg-transparent border-0 p-1">
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      <div onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 sm:hidden transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }} />

      <div className="fixed top-0 right-0 bottom-0 z-50 sm:hidden w-72 transition-transform duration-300"
        style={{ background: '#0a0f1e', borderLeft: '1px solid rgba(255,255,255,0.08)', transform: open ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="flex items-center justify-between px-6 h-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="text-white font-extrabold tracking-widest text-sm">FUNMZY ✦</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-slate-400 hover:text-white cursor-pointer bg-transparent border-0"><IconClose /></button>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {links.map(([l, id]) => (
            <button key={id} onClick={() => go(id)}
              className="text-left text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer bg-transparent border-0 w-full">
              {l}
            </button>
          ))}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <a href="https://t.me/Funmzydasilva" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-white font-bold px-4 py-3 rounded-xl text-sm"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
              Start a Project <IconArrow size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #050c1a 0%, #0d1230 45%, #080c1e 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(37,99,235,0.10)', animation: 'pulse 4s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(124,58,237,0.10)', animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center pt-20 pb-16">
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8"
          style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}>
          <span className="w-2 h-2 bg-emerald-400 rounded-full" style={{ animation: 'pulse 2s infinite' }} />
          Available for new projects
        </div>

        <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mb-4">
          Frontend Developer, Marketer &amp; AI Video Content Creator
        </p>

        <h1 className="font-extrabold text-white leading-[1.12] mb-6"
          style={{ fontSize: 'clamp(1.9rem, 5.2vw, 3.6rem)', letterSpacing: '-0.025em' }}>
          I build for crypto projects and local businesses.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Fast, reliable and Unmissable.
          </span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-3">
          As a frontend developer, marketer, and AI video content creator, I build launch-ready websites, run Web3 marketing campaigns, and produce AI avatar videos. For crypto projects and local businesses.
        </p>
        <p className="text-slate-500 text-base max-w-lg mx-auto mb-10">
          Solana, Base, EVM and beyond. Zero to live in under 24 hours.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a href="https://t.me/Funmzydasilva" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm tracking-wide cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 32px rgba(99,102,241,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(99,102,241,0.55)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.3)'}>
            <IconTelegram size={17} /> Chat on Telegram →
          </a>
          <button onClick={() => go('work')}
            className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm cursor-pointer bg-transparent"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
            See Case Studies <IconDown />
          </button>
        </div>

        {/* Micro-caption */}
        <p style={{ fontFamily: 'monospace', color: 'rgba(148,163,184,0.45)', fontSize: '0.72rem', letterSpacing: '0.08em' }} className="mb-12">
          [ Average response time: &lt; 15 minutes ]
        </p>

        {/* Proof stats */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {[
            ['10+', 'Projects Shipped'],
            ['24hr', 'Avg Delivery'],
            ['$6M+', 'MC Influenced'],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl p-4 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{num}</div>
              <div className="text-slate-500 text-xs mt-1 leading-tight">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-1.5 text-slate-600" style={{ animation: 'bounce 2s infinite' }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <IconDown size={14} />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   SERVICES — terminal-style micro-buttons
───────────────────────────────────────── */
const SERVICES = [
  {
    Icon: IconGlobe,
    title: 'Frontend Developer',
    outcome: 'Launch-ready pages. Live before the next candle.',
    description: 'I build fully deployed, wallet-connected landing pages — DexScreener-ready with tokenomics, roadmap, and email capture — handed over fast. No template. No handoff.',
    badge: 'From $100 · Delivered in less than 72hrs',
    terminalCta: '[ Deploy Frontend Module ]',
    grad: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.22)',
  },
  {
    Icon: IconVideo,
    title: 'AI Video Content',
    outcome: 'Clips that get shared, not skipped.',
    description: 'Project trailers, 60-second AI avatar videos, and viral shorts — engineered to drive community growth and keep your token in the conversation.',
    badge: 'From $100 · 3-day turnaround',
    terminalCta: '[ Initialize Rendering Loop ]',
    grad: 'from-violet-500 to-purple-600',
    glow: 'rgba(124,58,237,0.22)',
  },
  {
    Icon: IconChart,
    title: 'Web3 Marketing & Growth',
    outcome: 'Real reach that actually moves the chart.',
    description: 'Full-stack Web3 marketing: CT caller campaigns, alpha group drops, influencer placements, and memecoin growth systems. Built around your launch window and token narrative.',
    badge: 'From $2,000 · Delivered in 3 days',
    terminalCta: '[ Launch Marketing Campaign ]',
    grad: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.22)',
  },
  {
    Icon: IconZap,
    title: 'On-Demand Web3 Solutions',
    outcome: 'Tell me the problem. I\'ll find the move.',
    description: 'From smart contract UI wrappers to full presale pages and custom dashboards — if your project needs it built, I scope it, price it, and ship it.',
    badge: 'Custom Quote · Reply in 12hrs',
    terminalCta: '[ Open Support Ticket ]',
    grad: 'from-amber-400 to-orange-500',
    glow: 'rgba(245,158,11,0.22)',
  },
]

function TerminalBtn({ label, href }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'monospace',
        fontSize: '0.72rem',
        letterSpacing: '0.06em',
        color: hov ? '#a5b4fc' : '#6366f1',
        border: `1px solid ${hov ? 'rgba(99,102,241,0.6)' : 'rgba(99,102,241,0.3)'}`,
        background: hov ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.05)',
        borderRadius: '4px',
        padding: '5px 10px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}>
      {label}
    </a>
  )
}

function ServiceCard({ s, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl p-8 h-full flex flex-col gap-5 transition-all duration-300"
        style={{
          background: hov ? 'rgba(255,255,255,0.065)' : 'rgba(255,255,255,0.03)',
          border: hov ? '1px solid rgba(255,255,255,0.16)' : '1px solid rgba(255,255,255,0.07)',
          boxShadow: hov ? `0 24px 64px ${s.glow}` : 'none',
          transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} text-white`}
          style={{ boxShadow: `0 6px 20px ${s.glow}` }}>
          <s.Icon size={21} />
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${s.grad} bg-clip-text text-transparent mb-2`}>{s.outcome}</p>
          <h3 className="text-white font-bold text-lg leading-snug">{s.title}</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.description}</p>
        <span className="text-xs font-semibold text-slate-400 border rounded-full px-3 py-1 self-start"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}>{s.badge}</span>
        <TerminalBtn label={s.terminalCta} href="https://t.me/Funmzydasilva" />
      </div>
    </FadeIn>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 px-4" style={{ background: '#07101f' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Four ways I move your project forward</h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">Every service is built around one thing: outcomes. Not deliverables. Outcomes.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} delay={i * 75} />)}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   CASE STUDIES
───────────────────────────────────────── */
const CASES = [
  {
    tag: 'Live Site',
    tagStyle: { background: 'rgba(16,185,129,0.12)', color: '#34d399', borderColor: 'rgba(16,185,129,0.2)' },
    title: 'Funmzy — Personal Brand Site',
    problem: 'Needed a professional portfolio to close clients and build credibility in the Web3 space.',
    solution: 'Engineered a full React/Vite frontend — dark navy design, scroll animations, mobile-responsive, deployed on Vercel.',
    result: 'Live in under 24 hours. Already generating inbound client inquiries.',
    metrics: [{ val: '<24hr', label: 'Build to deploy' }, { val: '9.4/10', label: 'Design score' }],
    link: 'https://funmzy-site.vercel.app',
    linkLabel: 'View Live Site',
    tech: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    tag: 'Marketing & Growth Campaign',
    tagStyle: { background: 'rgba(124,58,237,0.12)', color: '#a78bfa', borderColor: 'rgba(124,58,237,0.2)' },
    title: 'Memecoin — Solana Launch',
    problem: 'Dev team needed chart movement and community volume at launch with zero existing audience.',
    solution: 'Coordinated CT caller campaign, alpha group drops, and influencer placements across 3 tiers.',
    result: 'Token market cap scaled from $500K baseline to $6M peak within 72 hours of campaign activation.',
    metrics: [{ val: '$6M', label: 'MC peak reached' }, { val: '6 months', label: 'of activation' }],
    link: null,
    linkLabel: null,
    tech: ['CT Callers', 'Alpha Groups', 'Influencer Network'],
  },
  {
    tag: 'AI Video',
    tagStyle: { background: 'rgba(37,99,235,0.12)', color: '#60a5fa', borderColor: 'rgba(37,99,235,0.2)' },
    title: 'AI Video Content Creation',
    problem: 'Crypto project needed viral content to drive community engagement without a video team.',
    solution: '30-60 second AI avatar video with scripted hook, project narrative, and CTA.',
    result: 'Video shared organically across CT, TikTok, Instagram, YouTube and Telegram. 3x community Telegram growth within a week.',
    metrics: [{ val: '3×', label: 'Community growth' }, { val: '60sec', label: 'Viral format' }],
    link: null,
    linkLabel: null,
    tech: ['AI Script', 'CT Distribution', 'Multi-Platform'],
  },
]

function CaseCard({ c, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl p-7 h-full flex flex-col gap-5 transition-all duration-300"
        style={{
          background: hov ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
          border: hov ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.07)',
          transform: hov ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hov ? '0 20px 60px rgba(99,102,241,0.14)' : 'none',
        }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full border self-start" style={c.tagStyle}>{c.tag}</span>
        <h3 className="text-white font-bold text-lg leading-snug">{c.title}</h3>
        <div className="flex gap-3">
          {c.metrics.map(m => (
            <div key={m.label} className="flex-1 rounded-xl p-3 text-center" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="text-lg font-extrabold text-indigo-300">{m.val}</div>
              <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {[['Problem', c.problem], ['Solution', c.solution], ['Result', c.result]].map(([lbl, txt]) => (
            <div key={lbl}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">{lbl}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{txt}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {c.tech.map(t => (
            <span key={t} className="text-xs text-slate-500 px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
          ))}
        </div>
        {c.link ? (
          <a href={c.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto cursor-pointer">
            {c.linkLabel} <IconExternal />
          </a>
        ) : (
          <p className="text-slate-600 text-xs mt-auto">Campaign complete</p>
        )}
      </div>
    </FadeIn>
  )
}

function Work() {
  return (
    <section id="work" className="py-24 px-4" style={{ background: '#07101f' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Results, not just deliverables</h2>
            <p className="text-slate-400 text-lg">Every project below is measured by outcomes. That is the only metric that matters.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CASES.map((c, i) => <CaseCard key={c.title} c={c} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   TESTIMONIALS — verified real ones
───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: 'Funmzy gave good ideas that helped 10X our marketing strategy and made us good profits.',
    author: 'GDK Marketer',
    role: 'Marketing',
    stars: 5,
  },
  {
    quote: 'The AI avatar video content he produced drove real engagement for our brand. Professional quality, fast turnaround.',
    author: 'Local Business Owner',
    role: 'AI Video Client',
    stars: 5,
  },
  {
    quote: 'Funmzy worked in the growth coordination. He made good impact and contributions with good ideas to actual help us grow.',
    author: 'Doubttoken Project Manager',
    role: 'Growth Campaign',
    stars: 5,
  },
]

function Testimonials() {
  return (
    <section className="py-24 px-4" style={{ background: 'linear-gradient(180deg, #07101f 0%, #0a1428 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 block">Client Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What founders say</h2>
            <p className="text-slate-400 text-lg">Proof before polish. Always.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={i * 80}>
              <div className="rounded-2xl p-7 h-full flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-amber-400"><IconStar /></span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   WHY FUNMZY
───────────────────────────────────────── */
function WhyMe() {
  const points = [
    { Icon: IconZap, title: 'Speed is the product', body: 'In Web3, timing is everything. I deliver in hours — not days. Your window does not wait for agencies.' },
    { Icon: IconUsers, title: 'Web3 native', body: 'No onboarding needed. I already know DexScreener, CT dynamics, Telegram culture, and what actually converts.' },
    { Icon: IconCheck, title: 'Outcomes, not outputs', body: 'You do not pay for a website. You pay for users, signups, and market cap movement. That is what I optimise for.' },
    { Icon: IconChart, title: 'Operator mindset', body: 'I think like a founder, not a freelancer. Your growth is the north star — not just closing the ticket.' },
  ]

  return (
    <section className="py-24 px-4" style={{ background: '#0a1428' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">Why Funmzy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why founders choose me over agencies</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">Agencies slow you down. I speed you up.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 70}>
              <div className="rounded-2xl p-7 flex gap-5 items-start transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.055)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}>
                  <p.Icon size={18} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   ABOUT — terminal operator profile
───────────────────────────────────────── */
function About() {
  const [tick, setTick] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="about" className="py-24 px-4" style={{ background: '#07101f' }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          {/* Terminal window chrome */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(99,102,241,0.25)', boxShadow: '0 0 60px rgba(99,102,241,0.08)' }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: 'rgba(99,102,241,0.08)', borderBottom: '1px solid rgba(99,102,241,0.15)' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444', opacity: 0.7 }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b', opacity: 0.7 }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#10b981', opacity: 0.7 }} />
              <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(148,163,184,0.5)', marginLeft: '8px', letterSpacing: '0.08em' }}>
                OPERATOR_PROFILE // FUNMZY
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-7 sm:p-10" style={{ background: 'rgba(5,12,26,0.8)' }}>
              {/* Prompt line */}
              <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6366f1', marginBottom: '20px', letterSpacing: '0.06em' }}>
                <span style={{ color: '#34d399' }}>funmzy</span>
                <span style={{ color: 'rgba(148,163,184,0.4)' }}>@web3</span>
                <span style={{ color: 'rgba(148,163,184,0.4)' }}>:~$ </span>
                cat profile.md
                <span style={{ opacity: tick ? 1 : 0, color: '#a5b4fc', marginLeft: '2px' }}>▋</span>
              </p>

              <div className="flex flex-col gap-5">
                <p className="text-slate-300 text-base leading-relaxed" style={{ fontFamily: 'monospace', fontSize: '0.88rem' }}>
                  Self-taught. No bootcamp. No agency background. 3 years of building directly inside Web3 — learning CT dynamics, Telegram culture, token launches, and what actually converts, the hard way.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'monospace', fontSize: '0.84rem' }}>
                  Available across all timezones.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed" style={{ fontFamily: 'monospace', fontSize: '0.84rem' }}>
                  I don't have a team behind me. I have a system. Every project I take gets my full attention, not a junior handoff. That is the difference.
                </p>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  '[ TIMEZONE // GMT+1 ]',
                  '[ OPERATOR // Solo ]',
                  '[ METHOD // Self-Taught ]',
                ].map(pill => (
                  <span key={pill} style={{
                    fontFamily: 'monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    color: '#818cf8',
                    border: '1px solid rgba(99,102,241,0.35)',
                    background: 'rgba(99,102,241,0.08)',
                    borderRadius: '4px',
                    padding: '5px 12px',
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FAQ ACCORDION — terminal style
───────────────────────────────────────── */
const FAQS = [
  {
    q: 'Do you write smart contracts from scratch?',
    a: 'I engineer full frontend UI deployment, custom dashboards, wallet connections, and distribution tracking. For custom Solidity/Rust smart contracts, I integrate with your audited files or coordinate with dedicated security protocols.',
  },
  {
    q: 'What do your memecoin growth campaigns actually look like?',
    a: 'Zero guesswork. I leverage an automated pipeline to systematically bridge project developers directly with verified CT callers, alpha groups, and tier-1 influencer networks precisely around your launch liquidity window.',
  },
  {
    q: 'Can you really ship a landing page in under 24 hours?',
    a: 'Yes. The codebase is optimized for rapid deployment. If your token assets, roadmap outline, and graphics are ready, your site goes live on Vercel before the next daily candle closes.',
  },
]

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: `1px solid ${open ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: '8px',
      background: open ? 'rgba(99,102,241,0.05)' : 'rgba(255,255,255,0.02)',
      transition: 'all 0.25s ease',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 cursor-pointer bg-transparent border-0"
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', letterSpacing: '0.04em', color: open ? '#a5b4fc' : '#94a3b8' }}>
          <span style={{ color: open ? '#34d399' : '#6366f1', marginRight: '10px' }}>Q{index + 1}:</span>
          {item.q}
        </span>
        <span style={{ color: open ? '#6366f1' : 'rgba(148,163,184,0.4)', flexShrink: 0, transition: 'transform 0.25s ease', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-flex' }}>
          <IconChevronRight size={14} />
        </span>
      </button>

      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <div className="px-6 pb-5">
          <div style={{ borderTop: '1px solid rgba(99,102,241,0.15)', paddingTop: '14px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#6366f1', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
              A{index + 1}:
            </span>
            <p style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.8', letterSpacing: '0.02em' }}>
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <section className="py-24 px-4" style={{ background: '#0a1428' }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: '#6366f1', display: 'block', marginBottom: '12px' }}>
              SYSTEM_SPECIFICATIONS // FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Common questions</h2>
            <p className="text-slate-500 text-sm">Straight answers. No filler.</p>
          </div>
        </FadeIn>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <FaqItem item={item} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.contact.trim()) e.contact = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const change = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const inputStyle = (field) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#f87171' : focused === field ? 'rgba(99,102,241,0.7)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: focused === field ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
    color: '#f1f5f9', borderRadius: '10px', padding: '13px 16px',
    width: '100%', outline: 'none', fontSize: '0.9rem', transition: 'all 0.2s ease',
  })

  if (submitted) return (
    <div className="text-center py-14">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 text-indigo-400"
        style={{ background: 'rgba(99,102,241,0.12)' }}>
        <IconCheck size={28} />
      </div>
      <h3 className="text-white text-xl font-bold mb-2">Message received.</h3>
      <p className="text-slate-400 text-sm">I'll hit you back within 24 hours. Telegram is fastest.</p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4">
      {[{ name: 'name', placeholder: 'Your name' }, { name: 'contact', placeholder: 'Telegram @ or email' }].map(({ name, placeholder }) => (
        <div key={name}>
          <input name={name} type="text" placeholder={placeholder} value={form[name]} onChange={change}
            style={inputStyle(name)} onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
            className="placeholder-slate-600" />
          {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}
      <select name="service" value={form.service} onChange={change}
        style={{ ...inputStyle('service'), cursor: 'pointer', appearance: 'none' }}
        onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}>
        <option value="" style={{ background: '#111827' }}>Select a service...</option>
        <option value="landing" style={{ background: '#111827' }}>Landing Page &amp; Website</option>
        <option value="video" style={{ background: '#111827' }}>AI Video Content</option>
        <option value="memecoin" style={{ background: '#111827' }}>Memecoin Marketing</option>
        <option value="web3" style={{ background: '#111827' }}>Web3 Solutions</option>
        <option value="other" style={{ background: '#111827' }}>Something else</option>
      </select>
      <div>
        <textarea name="message" rows={4} placeholder="Tell me about your project — token name, goals, timeline..."
          value={form.message} onChange={change}
          style={{ ...inputStyle('message'), resize: 'none' }}
          onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
          className="placeholder-slate-600" />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit"
        className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all duration-300 text-sm tracking-wide cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 6px 24px rgba(99,102,241,0.28)' }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 32px rgba(99,102,241,0.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(99,102,241,0.28)'}>
        Send Message <IconArrow />
      </button>
    </form>
  )
}

function ContactBlock({ icon, label, handle, href, badge }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-250 cursor-pointer"
      style={{
        background: hov ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: hov ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.07)',
        textDecoration: 'none', transform: hov ? 'translateX(4px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400"
        style={{ background: 'rgba(99,102,241,0.12)' }}>{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-xs">{label}</p>
          {badge && <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.2)' }}>{badge}</span>}
        </div>
        <p className="text-white font-semibold text-sm mt-0.5 truncate">{handle}</p>
      </div>
      <span className="text-slate-600 flex-shrink-0"><IconArrow size={15} /></span>
    </a>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-4" style={{ background: '#0d1a2e' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to launch?</h2>
            <p className="text-slate-400 text-lg">Telegram is fastest. I reply in hours, not business days.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn delay={60}>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold text-lg mb-6">Send a message</h3>
              <ContactForm />
            </div>
          </FadeIn>
          <FadeIn delay={140}>
            <div className="flex flex-col gap-4">
              <ContactBlock icon={<IconTelegram />} label="Telegram" handle="@Funmzydasilva" href="https://t.me/Funmzydasilva" badge="Fastest reply" />
              <ContactBlock icon={<IconX />} label="X / Twitter" handle="@Lionrage10" href="https://x.com/Lionrage10" />
              <ContactBlock icon={<IconMail />} label="Email" handle="lionrage10@gmail.com" href="mailto:lionrage10@gmail.com" />
              <div className="rounded-2xl p-6 mt-1" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)' }}>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">What to expect</p>
                {['Reply within hours — usually same day', 'Free project scoping on first call', 'Clear pricing, no hidden costs', 'Revisions included until you\'re happy', 'Direct line to me — no account managers'].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                    <span className="text-indigo-400 flex-shrink-0"><IconCheck size={14} /></span>
                    <span className="text-slate-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-8 px-4" style={{ background: '#060d1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          <span className="font-extrabold text-slate-500 tracking-widest">FUNMZY</span> © 2026 — All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: <IconTelegram />, href: 'https://t.me/Funmzydasilva', label: 'Telegram' },
            { icon: <IconX />, href: 'https://x.com/Lionrage10', label: 'X' },
            { icon: <IconMail />, href: 'mailto:lionrage10@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer" aria-label={label}
              className="text-slate-600 hover:text-slate-300 transition-colors duration-200 cursor-pointer">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────
   ROOT — section order:
   Hero → Services → Work → Testimonials
   → WhyMe → About → FAQ → Contact → Footer
───────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ background: '#07101f', minHeight: '100vh' }}>
      <AnnouncementStrip />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <WhyMe />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
