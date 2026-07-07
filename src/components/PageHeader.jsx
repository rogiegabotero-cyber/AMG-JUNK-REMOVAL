import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { languageOptions } from '../data/siteContent'
import { PhoneIcon, GlobeIcon, ChevronDownIcon } from './Icons'

function PageHeader({ headerContent, languageCode, onLanguageChange }) {
  const [showAlertBar, setShowAlertBar] = useState(true)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef(null)
  const selectedLanguage =
    languageOptions.find((option) => option.code === languageCode) ?? languageOptions[0]

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

  const handleLanguageSelect = (language) => {
    onLanguageChange(language.code)
    setIsLanguageMenuOpen(false)
  }

  return (
    <div className="site-header">
      <div className={`topbar-alert ${showAlertBar ? 'is-visible' : 'is-hidden'}`}>
        <div className="topbar-alert-inner">
          <a className="topbar-phone" href="tel:+15617620065">
            <PhoneIcon /> (561) 762-0065
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
              <GlobeIcon /> {selectedLanguage.label} <ChevronDownIcon />
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
              <img src={logo} alt="AMG logo" className="header-logo" />
            </span>
            <span className="brand-text">
              <strong>AMG Junk Removal</strong>
              <small>LLC</small>
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
          <a className="button-call-header" href="tel:+15617620065">
            <PhoneIcon /> {headerContent.callUs}
          </a>
        </div>
      </header>
    </div>
  )
}

export default PageHeader
