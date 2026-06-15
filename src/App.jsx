import { useState, useEffect, useRef } from 'react'

/* ── Scroll animation hook ── */
function useInView(threshold = 0.15) {
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
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

const IconArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const IconChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const IconTrendingUp = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)

const IconZap = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const IconCheck = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconStar = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconExternalLink = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

/* ── ANNOUNCEMENT STRIP ── */
function AnnouncementStrip() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-4 text-center">
      <p className="text-white font-semibold uppercase tracking-widest text-xs">
        🔥 Taking on 2 new clients this month — spots fill fast
      </p>
    </div>
  )
}

/* ── NAVIGATION ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const navLinks = [
    ['Services', 'services'],
    ['Work', 'work'],
    ['Contact', 'contact'],
  ]

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-slate-900/80 backdrop-blur-sm'
        }`}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-extrabold tracking-widest text-white">
            FUNMZY
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-1">✦</span>
          </span>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent border-0"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/Funmzydasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
            >
              Start a Project
              <IconArrowRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden text-slate-300 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 sm:hidden w-72 bg-slate-900 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center justify-between px-6 h-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-white font-extrabold tracking-widest text-sm">FUNMZY ✦</span>
          <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white cursor-pointer bg-transparent border-0" aria-label="Close menu">
            <IconClose />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer bg-transparent border-0 w-full"
            >
              {label}
            </button>
          ))}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <a
              href="https://t.me/Funmzydasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-4 py-3 rounded-xl text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project <IconArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── HERO ── */
function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(59,130,246,0.12)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(139,92,246,0.12)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full" style={{ animation: 'pulse 2s infinite' }} />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}>
          I Build for{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Web3.
          </span>
          <br />
          Fast. Precise. Unmissable.
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Landing pages. AI videos. Memecoin marketing. On-demand Web3 solutions.
          If your project needs to move — I make it move.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://x.com/Lionrage10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] text-sm tracking-wide cursor-pointer"
          >
            Initiate Project
            <IconArrowRight />
          </a>
          <button
            onClick={() => scrollTo('work')}
            className="inline-flex items-center justify-center gap-2 border text-slate-300 hover:text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-sm cursor-pointer bg-transparent"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            View My Work
            <IconChevronDown size={16} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ['10+', 'Projects Delivered'],
            ['24hr', 'Avg Turnaround'],
            ['100%', 'Web3 Native'],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{num}</div>
              <div className="text-slate-500 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <IconChevronDown size={14} />
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ── */
const servicesList = [
  {
    Icon: IconGlobe,
    title: 'Landing Pages & Websites',
    description: 'Need a site up fast? I handle the whole thing — design, build, and make sure it\'s DexScreener-ready before launch day.',
    badge: 'From $100 · Under 24 hours',
    cta: 'Let\'s build',
    color: 'from-blue-500 to-cyan-500',
    shadow: 'rgba(59,130,246,0.2)',
  },
  {
    Icon: IconVideo,
    title: 'AI Video Content',
    description: 'Project trailers, short viral clips, AI avatar videos — content that actually gets people talking and sharing.',
    badge: 'From $100 · 3 days delivery',
    cta: 'Let\'s create',
    color: 'from-violet-500 to-purple-500',
    shadow: 'rgba(139,92,246,0.2)',
  },
  {
    Icon: IconTrendingUp,
    title: 'Memecoin Marketing',
    description: 'I connect dev teams to real callers, CT influencers, and alpha groups. The kind of reach that actually moves a chart.',
    badge: 'From $2,000 · Results in 3 days',
    cta: 'Let\'s grow',
    color: 'from-pink-500 to-rose-500',
    shadow: 'rgba(236,72,153,0.2)',
  },
  {
    Icon: IconZap,
    title: 'On-Demand Web3 Solutions',
    description: 'Not sure what you need yet? Just tell me where you\'re at and I\'ll figure out the best way to help — no pressure.',
    badge: 'Custom Quote · Reply in 12hrs',
    cta: 'Let\'s talk',
    color: 'from-amber-500 to-orange-500',
    shadow: 'rgba(245,158,11,0.2)',
  },
]

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false)
  const { Icon, title, description, badge, cta, color, shadow } = service

  return (
    <FadeIn delay={delay}>
      <div
        className="group relative rounded-2xl p-8 h-full flex flex-col gap-5 cursor-pointer transition-all duration-300"
        style={{
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
          border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.07)',
          boxShadow: hovered ? `0 20px 60px ${shadow}` : 'none',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
          style={{ boxShadow: `0 8px 20px ${shadow}` }}
        >
          <Icon size={22} />
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="mt-auto">
          <span className={`inline-block text-xs font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent border rounded-full px-3 py-1`} style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            {badge}
          </span>
        </div>

        <a
          href="https://t.me/Funmzydasilva"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent transition-all duration-200`}
          onClick={e => e.stopPropagation()}
        >
          {cta} <IconArrowRight size={14} />
        </a>
      </div>
    </FadeIn>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 px-4" style={{ background: '#0b1120' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Four ways I move your project</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">Pick what you need. Message me. We move.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {servicesList.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── WORK ── */
const workItems = [
  {
    tag: 'Live Site',
    tagClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    title: 'Funmzy — Personal Brand',
    description: 'Built and deployed this full personal brand site using AI tools and Claude Code in under 24 hours. React, Vite, Tailwind.',
    link: 'https://funmzy-site.vercel.app',
    linkLabel: 'View Live',
    tech: ['React', 'Vite', 'Tailwind'],
  },
  {
    tag: 'Web3 Landing',
    tagClass: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    title: 'CloudFlow — Demo Project',
    description: 'Web3-ready landing page with wallet connect button, email capture, and feature sections built for launch speed.',
    link: null,
    linkLabel: 'Coming Soon',
    tech: ['React', 'Web3', 'GSAP'],
  },
  {
    tag: 'AI Video',
    tagClass: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    title: 'AI Avatar — Brand Campaign',
    description: '60-second AI avatar video created for a crypto brand launch. Full HeyGen production pipeline, script to publish.',
    link: null,
    linkLabel: 'Coming Soon',
    tech: ['HeyGen', 'AI', 'Script'],
  },
]

function WorkCard({ item, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={delay}>
      <div
        className="rounded-2xl p-7 h-full flex flex-col gap-4 transition-all duration-300 cursor-default"
        style={{
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
          border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.07)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? '0 20px 60px rgba(99,102,241,0.12)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border self-start ${item.tagClass}`}>
          {item.tag}
        </span>
        <h3 className="text-white font-bold text-lg">{item.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tech.map(t => (
            <span key={t} className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">{t}</span>
          ))}
        </div>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1 cursor-pointer"
          >
            {item.linkLabel} <IconExternalLink />
          </a>
        ) : (
          <span className="text-sm text-slate-600 mt-1">{item.linkLabel}</span>
        )}
      </div>
    </FadeIn>
  )
}

function Work() {
  return (
    <section id="work" className="py-24 px-4" style={{ background: '#0b1120' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">My Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Projects I've built</h2>
            <p className="text-slate-400 text-lg">Real work. Real results.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {workItems.map((item, i) => (
            <WorkCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SOCIAL PROOF ── */
const testimonials = [
  {
    quote: "Funmzy delivered our landing page in under 18 hours. Clean, fast, DexScreener-ready. Exactly what we needed for launch.",
    author: "0xSolDev",
    role: "Solana Project Founder",
    rating: 5,
  },
  {
    quote: "The AI avatar video he made went viral in our community. Best ROI I've had on any marketing spend in Web3.",
    author: "CryptoKayla",
    role: "DeFi Community Manager",
    rating: 5,
  },
  {
    quote: "Connected us to 3 major CT callers the same week. Volume moved. Simple as that.",
    author: "MoonDev",
    role: "Memecoin Dev",
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section className="py-24 px-4" style={{ background: 'linear-gradient(180deg, #0b1120 0%, #0f172a 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 block">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What clients say</h2>
            <p className="text-slate-400 text-lg">Results first, relationships second.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 80}>
              <div
                className="rounded-2xl p-7 h-full flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400"><IconStar size={14} /></span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div>
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

/* ── CONTACT ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Required'
    if (!form.contact.trim()) errs.contact = 'Required'
    if (!form.message.trim()) errs.message = 'Required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const inputBase = (field) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#f87171' : focused === field ? 'rgba(99,102,241,0.7)' : 'rgba(255,255,255,0.08)'}`,
    color: '#f1f5f9',
    borderRadius: '10px',
    padding: '13px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '0.9rem',
    transition: 'border-color 0.2s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
  })

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ background: 'rgba(99,102,241,0.15)' }}>
          <span className="text-indigo-400"><IconCheck size={28} /></span>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">Message received.</h3>
        <p className="text-slate-400">I'll reach out within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {[
        { name: 'name', placeholder: 'Your name', type: 'text' },
        { name: 'contact', placeholder: 'Telegram @ or email', type: 'text' },
      ].map(({ name, placeholder, type }) => (
        <div key={name}>
          <input
            name={name} type={type} placeholder={placeholder}
            value={form[name]} onChange={handleChange}
            style={inputBase(name)}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            className="placeholder-slate-600"
          />
          {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}

      <div>
        <select
          name="service" value={form.service} onChange={handleChange}
          style={{ ...inputBase('service'), cursor: 'pointer', appearance: 'none' }}
          onFocus={() => setFocused('service')}
          onBlur={() => setFocused(null)}
          className="placeholder-slate-600"
        >
          <option value="" style={{ background: '#1e293b' }}>Select a service...</option>
          <option value="landing" style={{ background: '#1e293b' }}>Landing Page &amp; Website</option>
          <option value="video" style={{ background: '#1e293b' }}>AI Video Content</option>
          <option value="memecoin" style={{ background: '#1e293b' }}>Memecoin Marketing</option>
          <option value="web3" style={{ background: '#1e293b' }}>Web3 Solutions</option>
          <option value="other" style={{ background: '#1e293b' }}>Something else</option>
        </select>
      </div>

      <div>
        <textarea
          name="message" rows={4} placeholder="Tell me about your project..."
          value={form.message} onChange={handleChange}
          style={{ ...inputBase('message'), resize: 'none' }}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className="placeholder-slate-600"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] text-sm tracking-wide cursor-pointer"
      >
        Send Message <IconArrowRight />
      </button>
    </form>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-4" style={{ background: '#0f172a' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let's build something.</h2>
            <p className="text-slate-400 text-lg">Telegram is fastest. I reply within hours. No gatekeepers.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeIn delay={80}>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold text-lg mb-6">Send a message</h3>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact links */}
          <FadeIn delay={160}>
            <div className="flex flex-col gap-4">
              {[
                { icon: <IconTelegram size={20} />, label: 'Telegram', handle: '@Funmzydasilva', href: 'https://t.me/Funmzydasilva', badge: 'Preferred', badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/20' },
                { icon: <IconX size={20} />, label: 'X / Twitter', handle: '@Lionrage10', href: 'https://x.com/Lionrage10', badge: null },
                { icon: <IconMail size={20} />, label: 'Email', handle: 'lionrage10@gmail.com', href: 'mailto:lionrage10@gmail.com', badge: null },
              ].map(({ icon, label, handle, href, badge, badgeClass }) => (
                <ContactBlock key={handle} icon={icon} label={label} handle={handle} href={href} badge={badge} badgeClass={badgeClass} />
              ))}

              {/* Why work with me */}
              <div className="mt-4 rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Why clients choose me</p>
                {[
                  'Replies within hours, not days',
                  'No fluff — just execution',
                  'Web3 native, zero learning curve',
                  'Revisions until you\'re happy',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                    <span className="text-indigo-400 flex-shrink-0"><IconCheck size={15} /></span>
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

function ContactBlock({ icon, label, handle, href, badge, badgeClass }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 cursor-pointer"
      style={{
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.07)',
        textDecoration: 'none',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0" style={{ background: 'rgba(99,102,241,0.15)' }}>
        <span className="text-indigo-400">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-slate-400 text-xs">{label}</p>
          {badge && <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${badgeClass}`}>{badge}</span>}
        </div>
        <p className="text-white font-semibold text-sm mt-0.5 truncate">{handle}</p>
      </div>
      <span className="text-slate-600 flex-shrink-0"><IconArrowRight size={16} /></span>
    </a>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="py-8 px-4" style={{ background: '#080f1f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          <span className="font-extrabold text-slate-500 tracking-widest">FUNMZY</span>
          {' '}© 2026 — All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: <IconTelegram />, href: 'https://t.me/Funmzydasilva', label: 'Telegram' },
            { icon: <IconX />, href: 'https://x.com/Lionrage10', label: 'X' },
            { icon: <IconMail />, href: 'mailto:lionrage10@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-600 hover:text-slate-300 transition-colors duration-200 cursor-pointer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── ROOT ── */
export default function App() {
  return (
    <div style={{ background: '#0b1120', minHeight: '100vh' }}>
      <AnnouncementStrip />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
