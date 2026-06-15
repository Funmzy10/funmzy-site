import { useState, useEffect } from 'react'

/* ─── ANNOUNCEMENT STRIP ─── */
function AnnouncementStrip() {
  return (
    <div
      style={{ background: '#F59E0B' }}
      className="w-full py-2 px-4 text-center"
    >
      <p
        style={{ color: '#000000', letterSpacing: '0.15em', fontSize: '0.7rem' }}
        className="font-bold uppercase"
      >
        🔥 TAKING ON 2 NEW CLIENTS THIS MONTH — SPOTS FILL FAST
      </p>
    </div>
  )
}

/* ─── NAVIGATION ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        background: 'rgba(8,8,8,0.95)',
        borderBottom: '1px solid #1a1a1a',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span
          style={{ color: '#FFFFFF', letterSpacing: '0.12em', fontSize: '1rem' }}
          className="font-extrabold"
        >
          FUNMZY 🦁
        </span>

        <div className="hidden sm:flex items-center gap-8">
          {[['Services', 'services'], ['Work', 'work'], ['Contact', 'contact']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ color: '#6B7280', transition: 'color 0.3s ease', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.05em', fontSize: '0.875rem' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F59E0B'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
              className="font-medium"
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href="https://t.me/Funmzydasilva"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#F59E0B',
            color: '#000000',
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: '0.8rem',
            transition: 'all 0.3s ease',
            boxShadow: 'none',
          }}
          className="px-4 py-2 rounded-lg text-sm"
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
        >
          START A PROJECT →
        </a>
      </div>
    </nav>
  )
}

/* ─── HERO ─── */
function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.03) 0%, #080808 70%)',
        minHeight: '100vh',
      }}
      className="flex items-center justify-center px-4 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            style={{
              border: '1px solid #F59E0B',
              color: '#F59E0B',
              background: 'transparent',
              letterSpacing: '0.12em',
              fontSize: '0.65rem',
              transition: 'all 0.3s ease',
            }}
            className="px-4 py-1.5 rounded-full font-semibold uppercase"
          >
            ⚡ AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
        >
          I BUILD FOR{' '}
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #F59E0B, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WEB3.
          </span>{' '}
          FAST.
        </h1>

        {/* Subheadline */}
        <p
          style={{ color: '#6B7280', maxWidth: '500px' }}
          className="text-lg leading-relaxed mx-auto mb-10"
        >
          Landing pages. AI videos. Memecoin marketing. On-demand Web3 solutions.
          If your project needs to move — I make it move.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://x.com/Lionrage10"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#F59E0B',
              color: '#000000',
              fontWeight: 700,
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              boxShadow: 'none',
            }}
            className="px-8 py-4 rounded-xl text-sm font-bold"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(245,158,11,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
          >
            INITIATE PROJECT →
          </a>
          <button
            onClick={() => scrollTo('work')}
            style={{
              background: 'transparent',
              border: '1px solid #F59E0B',
              color: '#F59E0B',
              fontWeight: 700,
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            className="px-8 py-4 rounded-xl text-sm"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(245,158,11,0.1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(245,158,11,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            VIEW MY WORK ↓
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {[
            '🚀 10+ Projects Delivered',
            '⚡ 24hr Turnaround',
            '🌐 Web3 Native',
          ].map((stat) => (
            <span
              key={stat}
              style={{
                background: '#0f0f0f',
                border: '1px solid #1a1a1a',
                color: '#FFFFFF',
                fontSize: '0.8rem',
              }}
              className="px-4 py-2 rounded-full"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES ─── */
const servicesList = [
  {
    icon: '🌐',
    title: 'Landing Pages & Websites',
    description: 'Need a site up fast? I handle the whole thing — design, build, and make sure it\'s DexScreener-ready before launch day.',
    badge: 'Starting at $100 · Under 24 hours',
    cta: 'Let\'s build →',
  },
  {
    icon: '🎬',
    title: 'AI Video Content Creation',
    description: 'Project trailers, short viral clips, AI avatar videos — content that actually gets people talking and sharing.',
    badge: 'Starting at $100 · 3 days delivery',
    cta: 'Let\'s create →',
  },
  {
    icon: '🐸',
    title: 'Memecoin Marketing',
    description: 'I connect dev teams to real callers, CT influencers, and alpha groups. The kind of reach that actually moves a chart.',
    badge: 'Starting at $2,000 · Results in 3 days',
    cta: 'Let\'s grow →',
  },
  {
    icon: '⚙️',
    title: 'On-Demand Web3 Solutions',
    description: 'Not sure what you need yet? Just tell me where you\'re at and I\'ll figure out the best way to help — no pressure.',
    badge: 'Custom Quote · Reply in 12hrs',
    cta: 'Let\'s talk →',
  },
]

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        background: '#0f0f0f',
        border: hovered ? '1px solid rgba(245,158,11,0.3)' : '1px solid #1a1a1a',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 30px rgba(245,158,11,0.08)' : 'none',
      }}
      className="p-8 flex flex-col gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: 'rgba(245,158,11,0.1)',
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
        }}
      >
        {service.icon}
      </div>

      <h3 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>
        {service.title}
      </h3>

      <p style={{ color: '#6B7280', lineHeight: '1.7', fontSize: '0.9rem' }}>
        {service.description}
      </p>

      <span
        style={{
          border: '1px solid #F59E0B',
          color: '#F59E0B',
          background: 'transparent',
          fontSize: '0.65rem',
          letterSpacing: '0.08em',
          alignSelf: 'flex-start',
        }}
        className="px-3 py-1 rounded-full font-semibold uppercase"
      >
        {service.badge}
      </span>

      <a
        href="https://t.me/Funmzydasilva"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#F59E0B',
          fontWeight: 700,
          fontSize: '0.85rem',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          marginTop: 'auto',
        }}
        onMouseEnter={e => { e.currentTarget.style.letterSpacing = '0.05em' }}
        onMouseLeave={e => { e.currentTarget.style.letterSpacing = 'normal' }}
      >
        {service.cta}
      </a>
    </div>
  )
}

function Services() {
  return (
    <section id="services" style={{ background: '#080808' }} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            style={{ color: '#F59E0B', letterSpacing: '0.2em', fontSize: '0.7rem' }}
            className="font-semibold uppercase mb-3"
          >
            WHAT I DO
          </p>
          <h2 style={{ color: '#FFFFFF', fontWeight: 800 }} className="text-3xl sm:text-4xl mb-4">
            Four ways I can help your project
          </h2>
          <p style={{ color: '#6B7280' }} className="text-lg">
            Pick what you need. Message me. We move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesList.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WORK ─── */
const workItems = [
  {
    tag: 'LIVE SITE',
    tagStyle: { background: 'rgba(16,185,129,0.2)', color: '#10B981' },
    title: 'Funmzy — This Website',
    description: 'Built and deployed this full personal brand site using AI tools and Claude Code in under 24 hours.',
    link: 'https://funmzy-site.vercel.app',
    linkLabel: 'View Live →',
    live: true,
  },
  {
    tag: 'WEB3 LANDING PAGE',
    tagStyle: { background: 'rgba(139,92,246,0.2)', color: '#8B5CF6' },
    title: 'CloudFlow — Demo Project',
    description: 'Web3-ready landing page with wallet connect button, email capture, and feature sections.',
    link: null,
    linkLabel: 'Coming Soon',
    live: false,
  },
  {
    tag: 'AI VIDEO',
    tagStyle: { background: 'rgba(245,158,11,0.2)', color: '#F59E0B' },
    title: 'AI Avatar Video — Sample',
    description: '60-second AI avatar video created for a fictional brand. Full HeyGen production workflow.',
    link: null,
    linkLabel: 'Coming Soon',
    live: false,
  },
]

function WorkCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        background: '#0f0f0f',
        border: hovered ? '1px solid rgba(245,158,11,0.3)' : '1px solid #1a1a1a',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 30px rgba(245,158,11,0.08)' : 'none',
      }}
      className="p-8 flex flex-col gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          ...item.tagStyle,
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          alignSelf: 'flex-start',
          fontWeight: 600,
        }}
        className="px-3 py-1 rounded-full uppercase"
      >
        {item.tag}
      </span>

      <h3 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>
        {item.title}
      </h3>

      <p style={{ color: '#6B7280', lineHeight: '1.7', fontSize: '0.9rem' }}>
        {item.description}
      </p>

      {item.live ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#F59E0B',
            fontWeight: 700,
            fontSize: '0.85rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            marginTop: 'auto',
          }}
          onMouseEnter={e => { e.currentTarget.style.letterSpacing = '0.05em' }}
          onMouseLeave={e => { e.currentTarget.style.letterSpacing = 'normal' }}
        >
          {item.linkLabel}
        </a>
      ) : (
        <span style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: 'auto' }}>
          {item.linkLabel}
        </span>
      )}
    </div>
  )
}

function Work() {
  return (
    <section id="work" style={{ background: '#080808' }} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            style={{ color: '#F59E0B', letterSpacing: '0.2em', fontSize: '0.7rem' }}
            className="font-semibold uppercase mb-3"
          >
            MY WORK
          </p>
          <h2 style={{ color: '#FFFFFF', fontWeight: 800 }} className="text-3xl sm:text-4xl mb-4">
            Projects I've built
          </h2>
          <p style={{ color: '#6B7280' }} className="text-lg">
            Real work. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const inputStyle = (field) => ({
    background: '#0f0f0f',
    border: errors[field] ? '1px solid #ef4444' : '1px solid #1a1a1a',
    color: '#FFFFFF',
    borderRadius: '8px',
    padding: '14px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '0.9rem',
    transition: 'border-color 0.3s ease',
  })

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(245,158,11,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 1.5rem',
          }}
        >
          ✅
        </div>
        <h3 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.5rem' }} className="mb-2">
          Message received.
        </h3>
        <p style={{ color: '#6B7280' }}>I'll reach out within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle('name')}
          onFocus={e => { e.target.style.borderColor = '#F59E0B' }}
          onBlur={e => { e.target.style.borderColor = errors.name ? '#ef4444' : '#1a1a1a' }}
        />
        {errors.name && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name}</p>}
      </div>

      <div>
        <input
          name="contact"
          type="text"
          placeholder="Your Telegram @ or email"
          value={form.contact}
          onChange={handleChange}
          style={inputStyle('contact')}
          onFocus={e => { e.target.style.borderColor = '#F59E0B' }}
          onBlur={e => { e.target.style.borderColor = errors.contact ? '#ef4444' : '#1a1a1a' }}
        />
        {errors.contact && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.contact}</p>}
      </div>

      <div>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{
            ...inputStyle('service'),
            cursor: 'pointer',
            appearance: 'none',
          }}
          onFocus={e => { e.target.style.borderColor = '#F59E0B' }}
          onBlur={e => { e.target.style.borderColor = '#1a1a1a' }}
        >
          <option value="" style={{ background: '#0f0f0f' }}>Select a service...</option>
          <option value="landing" style={{ background: '#0f0f0f' }}>Landing Page &amp; Website</option>
          <option value="video" style={{ background: '#0f0f0f' }}>AI Video Content</option>
          <option value="memecoin" style={{ background: '#0f0f0f' }}>Memecoin Marketing</option>
          <option value="web3" style={{ background: '#0f0f0f' }}>Web3 Solutions</option>
          <option value="other" style={{ background: '#0f0f0f' }}>Something else</option>
        </select>
      </div>

      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle('message'), resize: 'none' }}
          onFocus={e => { e.target.style.borderColor = '#F59E0B' }}
          onBlur={e => { e.target.style.borderColor = errors.message ? '#ef4444' : '#1a1a1a' }}
        />
        {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        style={{
          background: '#F59E0B',
          color: '#000000',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontSize: '0.85rem',
          border: 'none',
          borderRadius: '8px',
          padding: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          width: '100%',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(245,158,11,0.4)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
      >
        SEND MESSAGE →
      </button>
    </form>
  )
}

function ContactLink({ label, handle, href, badge }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        background: '#0f0f0f',
        border: hovered ? '1px solid rgba(245,158,11,0.3)' : '1px solid #1a1a1a',
        borderRadius: '12px',
        padding: '20px 24px',
        display: 'block',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 20px rgba(245,158,11,0.08)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-3">
        {badge && (
          <span
            style={{
              background: 'rgba(245,158,11,0.15)',
              color: '#F59E0B',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
            className="px-2 py-0.5 rounded-full uppercase"
          >
            {badge}
          </span>
        )}
      </div>
      <p style={{ color: '#6B7280', fontSize: '0.75rem', marginTop: '4px' }}>{label}</p>
      <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', marginTop: '2px' }}>{handle}</p>
    </a>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ background: '#0d0d0d' }} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            style={{ color: '#F59E0B', letterSpacing: '0.2em', fontSize: '0.7rem' }}
            className="font-semibold uppercase mb-3"
          >
            GET IN TOUCH
          </p>
          <h2 style={{ color: '#FFFFFF', fontWeight: 800 }} className="text-3xl sm:text-4xl mb-4">
            Let's build something.
          </h2>
          <p style={{ color: '#6B7280' }} className="text-lg">
            Telegram is the fastest. I reply within hours. No gatekeepers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-4">
            <ContactLink
              badge="PREFERRED"
              label="Telegram"
              handle="@Funmzydasilva"
              href="https://t.me/Funmzydasilva"
            />
            <ContactLink
              label="X / Twitter"
              handle="@Lionrage10"
              href="https://x.com/Lionrage10"
            />
            <ContactLink
              label="Email"
              handle="lionrage10@gmail.com"
              href="mailto:lionrage10@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid #1a1a1a',
      }}
      className="py-8 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>
          FUNMZY 🦁 © 2026 All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            { label: 'Telegram', href: 'https://t.me/Funmzydasilva' },
            { label: 'X', href: 'https://x.com/Lionrage10' },
            { label: 'Email', href: 'mailto:lionrage10@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                color: '#6B7280',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F59E0B' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6B7280' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ─── ROOT ─── */
export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <AnnouncementStrip />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
