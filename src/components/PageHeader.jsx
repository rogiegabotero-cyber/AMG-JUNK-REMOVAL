import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.webp'
import { languageOptions } from '../data/siteContent'
import {
  PhoneIcon,
  GlobeIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  ChatIcon,
} from './Icons'

function MobileServicesIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M3 4h14M3 8h14M3 12h10" />
    </svg>
  )
}

function MobileWorkIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="7" height="7" rx="1" />
      <rect x="11" y="2" width="7" height="7" rx="1" />
      <rect x="2" y="11" width="7" height="7" rx="1" />
      <rect x="11" y="11" width="7" height="7" rx="1" />
    </svg>
  )
}

function MobileClockIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l2.5 2.5" strokeLinecap="round" />
    </svg>
  )
}

function MobileStarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.5l-4.9 2.7.9-5.5L2 7.8 7.5 7z" />
    </svg>
  )
}

function MobilePinIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M10 17s-6-5-6-9a6 6 0 1 1 12 0c0 4-6 9-6 9z" strokeLinecap="round" />
      <circle cx="10" cy="8" r="2" />
    </svg>
  )
}

function MobileQuestionIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="8" />
      <path
        d="M10 14v-1M10 7a2 2 0 0 1 1.9 2.6c-.2.5-.6.9-1 1.2-.5.4-.9.8-.9 1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PageHeader({ headerContent, languageCode, onLanguageChange }) {
  const [showAlertBar, setShowAlertBar] = useState(true)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const languageMenuRef = useRef(null)
  const selectedLanguage =
    languageOptions.find((option) => option.code === languageCode) ?? languageOptions[0]

  const mobileNavItems = [
    { href: '#services', label: headerContent.nav.services, icon: <MobileServicesIcon /> },
    { href: '#work', label: headerContent.nav.work, icon: <MobileWorkIcon /> },
    { href: '#how-it-works', label: headerContent.nav.howItWorks, icon: <MobileClockIcon /> },
    { href: '#why-us', label: headerContent.nav.whyUs, icon: <MobileStarIcon /> },
    { href: '#areas', label: headerContent.nav.areas, icon: <MobilePinIcon /> },
    { href: '#faq', label: headerContent.nav.faq, icon: <MobileQuestionIcon /> },
  ]

  useEffect(() => {
    const existing = document.querySelector("link[rel~='icon']")
    if (existing) {
      existing.href = logo
    } else {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.href = logo
      document.head.appendChild(link)
    }
  }, [])

  useEffect(() => {
    const heroSection = document.querySelector('.hero-dark')

    const handleScroll = () => {
      if (!heroSection) {
        return
      }

      const currentScrollY = window.scrollY
      const headerOffset = 120
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - headerOffset
      const shouldShowAlertBar = currentScrollY <= heroBottom

      setShowAlertBar((currentValue) =>
        currentValue === shouldShowAlertBar ? currentValue : shouldShowAlertBar,
      )
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setIsLanguageMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const handleLanguageSelect = (language) => {
    onLanguageChange(language.code)
    setIsLanguageMenuOpen(false)
  }

  return (
    <div className="site-header">
      <div className={`topbar-alert ${showAlertBar ? 'is-visible' : 'is-hidden'}`}>
        <div className="topbar-alert-inner">
          <a className="topbar-phone" href="tel:+13057134647">
            <PhoneIcon /> (305) 713-4647
          </a>
          <div className="language-menu" ref={languageMenuRef}>
            <button
              type="button"
              className={`language-pill ${isLanguageMenuOpen ? 'is-open' : ''}`}
              aria-expanded={isLanguageMenuOpen}
              aria-haspopup="menu"
              aria-label={`${headerContent.languageMenuLabel}: ${selectedLanguage.label}`}
              onClick={() => setIsLanguageMenuOpen((currentValue) => !currentValue)}
            >
              <GlobeIcon />
              <span className="language-pill-label">
                {selectedLanguage.badge ? <span className="lang-badge">{selectedLanguage.badge}</span> : null}
                <span>{selectedLanguage.label}</span>
              </span>
              <ChevronDownIcon />
            </button>
            {isLanguageMenuOpen ? (
              <div
                className="language-dropdown"
                role="menu"
                aria-label={headerContent.languageMenuAria}
              >
                {languageOptions.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selectedLanguage.code === language.code}
                    className={`language-option ${
                      selectedLanguage.code === language.code ? 'is-selected' : ''
                    }`}
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language.badge ? <span className="lang-badge">{language.badge}</span> : null}
                    <span>{language.label}</span>
                    {selectedLanguage.code === language.code ? (
                      <span className="language-option-check">{headerContent.current}</span>
                    ) : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home">
            <span className="brand-logo-box">
              <img src={logo} alt="Proline Hauling & Property Solutions logo" className="header-logo" />
            </span>
            <span className="brand-text">
              <strong>Proline</strong>
              <small>Hauling &amp; Property Solutions</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">{headerContent.nav.services}</a>
            <a href="#work">{headerContent.nav.work}</a>
            <a href="#how-it-works">{headerContent.nav.howItWorks}</a>
            <a href="#why-us">{headerContent.nav.whyUs}</a>
            <a href="#areas">{headerContent.nav.areas}</a>
            <a href="#faq">{headerContent.nav.faq}</a>
          </nav>
          <a className="button-call-header" href="tel:+13057134647">
            <PhoneIcon /> {headerContent.callUs}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={headerContent.menuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav-menu"
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={headerContent.menuOpen}
      >
        <div className="mobile-nav-header">
          <a className="brand" href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="brand-logo-box">
              <img src={logo} alt="Proline Hauling & Property Solutions logo" className="header-logo" />
            </span>
            <span className="brand-text">
              <strong>Proline</strong>
              <small>Hauling &amp; Property Solutions</small>
            </span>
          </a>
          <button
            type="button"
            className="mobile-nav-close"
            aria-label={headerContent.menuClose}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
          {mobileNavItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <ChatIcon />
            <span>{headerContent.nav.contact}</span>
          </a>
        </nav>

        <div className="mobile-nav-actions">
          <a
            className="button-call-header mobile-nav-call"
            id='button-call-header'
            href="tel:+13057134647"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <PhoneIcon /> {headerContent.callUs}
          </a>
          <a
            className="button-text-header mobile-nav-text"
            href="sms:+13057134647"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ChatIcon /> {headerContent.textUs}
          </a>
        </div>

        <p className="mobile-nav-note">{headerContent.menuNote}</p>
      </div>
    </div>
  )
}

export default PageHeader
