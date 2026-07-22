import { useEffect, useState } from 'react'
import './styles/homepage.css'
import { useAutoUpdate } from './hooks/useAutoUpdate'
import PageHeader from './components/PageHeader'
import homepageImg from './assets/homepage-img.webp'
import heroLogoMark from './assets/logo.webp'
import truckImg from './assets/truck-hero.webp'
import sodMaterialImg from './assets/sod.webp'
import bulkGardenSoilMaterialImg from './assets/Bulk garden soil.jpeg'
import rock57MaterialImg from './assets/57-rock.jpg'
import peaRockMaterialImg from './assets/Pea gravel.jpeg'
import sandMaterialImg from './assets/Sandss.webp'
import mulchMaterialImg from './assets/mulch.webp'
import gravelMaterialImg from './assets/Gravel.jpeg'
import fineCrushedStoneAggregateImg from './assets/Fine crushed stone aggregate.jpeg'
import silicaQuartzSandImg from './assets/Silica_Quartz sand.jpeg'
import SectionHeading from './components/SectionHeading'
import WorkCompareCard from './components/WorkCompareCard'
import MaterialsTicker from './components/MaterialsTicker'
import PageFooter from './components/PageFooter'
import {
  PhoneIcon,
  ChatIcon,
  CartIcon,
  SodIcon,
  TruckIcon,
  ClockIcon,
  DeliveryIcon,
  CheckIcon,
  ArrowRightIcon,
  BoltIcon,
  DollarIcon,
  RecycleIcon,
  StarIcon,
  ShieldIcon,
  PinIcon,
  ChevronDownIcon,
  WhatsAppIcon,
  CreditCardIcon,
  ZelleIcon,
  CashIcon,
} from './components/Icons'
import { contentByLanguage } from './data/siteContent'

const heroBadgeIcons = {
  cart: CartIcon,
  leaf: SodIcon,
  truck: TruckIcon,
  clock: ClockIcon,
}

const materialImages = {
  sod: sodMaterialImg,
  'bulk-garden-soil': bulkGardenSoilMaterialImg,
  '57-rock': rock57MaterialImg,
  'pea-rock': peaRockMaterialImg,
  sand: sandMaterialImg,
  mulch: mulchMaterialImg,
  gravel: gravelMaterialImg,
  'fine-crushed-stone-aggregate': fineCrushedStoneAggregateImg,
  'silica-quartz-sand': silicaQuartzSandImg,
}

const serviceIcons = {
  truck: TruckIcon,
  cart: CartIcon,
  sod: SodIcon,
  delivery: DeliveryIcon,
}

const featureIcons = {
  bolt: BoltIcon,
  recycle: RecycleIcon,
  dollar: DollarIcon,
  truck: TruckIcon,
}

const trustIcons = {
  star: StarIcon,
  shield: ShieldIcon,
}

const paymentIcons = { 'Credit Card': CreditCardIcon, 'Tarjeta de Credito': CreditCardIcon, 'Kat Kredi': CreditCardIcon, Zelle: ZelleIcon, Cash: CashIcon, Efectivo: CashIcon, Kash: CashIcon }

function TrustBadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ContactForm({ c }) {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [city, setCity] = useState('')
  const [desc, setDesc] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    const msg = `Hi, I'd like to request a service.%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ACity: ${encodeURIComponent(city)}%0ADescription: ${encodeURIComponent(desc)}`
    window.open(`https://wa.me/13057134647?text=${msg}`, '_blank')
  }

  return (
    <form className="wa-form" onSubmit={handleSend}>
      <div className="wa-form-header">
        <WhatsAppIcon />
        <span>{c.waFormTitle}</span>
      </div>
      <div className="wa-form-body">
        <div className="wa-field">
          <label>{c.waName}</label>
          <input type="text" placeholder={c.waNamePlaceholder} value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="wa-field">
          <label>{c.waService}</label>
          <div className="wa-select-wrap">
            <select value={service} onChange={e => setService(e.target.value)} required>
              <option value="" disabled>{c.waServicePlaceholder}</option>
              {c.waServices.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="wa-field">
          <label>{c.waCity}</label>
          <input type="text" placeholder={c.waCityPlaceholder} value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div className="wa-field">
          <label>{c.waDesc} <span className="wa-optional">(optional)</span></label>
          <textarea placeholder={c.waDescPlaceholder} value={desc} onChange={e => setDesc(e.target.value)} rows={3} />
        </div>
        <button type="submit" className="wa-submit">
          <WhatsAppIcon /> {c.waSend}
        </button>
      </div>
    </form>
  )
}

function FaqItem({ question, answer, open, onToggle }) {
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDownIcon />
      </button>
      <div className="faq-answer"><span>{answer}</span></div>
    </div>
  )
}

function App() {
  useAutoUpdate()

  const [languageCode, setLanguageCode] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    return window.localStorage.getItem('proline-language') ?? 'en'
  })
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    let observer
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll('.reveal:not(.is-visible)')
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      )
      els.forEach((el) => observer.observe(el))
    })
    return () => {
      cancelAnimationFrame(raf)
      if (observer) observer.disconnect()
    }
  }, [languageCode])

  useEffect(() => {
    window.localStorage.setItem('proline-language', languageCode)
    document.documentElement.lang = languageCode
  }, [languageCode])

  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const content = contentByLanguage[languageCode] ?? contentByLanguage.en
  const { header, hero, sections, footer } = content

  return (
    <div className="page-shell" id="home">
      <PageHeader
        headerContent={header}
        languageCode={languageCode}
        onLanguageChange={setLanguageCode}
      />

      <main>
        <section className="hero-dark">
          <div className="hero-backdrop" aria-hidden="true">
            <img src={homepageImg} alt="" width="1680" height="1080" fetchpriority="high" />
            <div className="hero-backdrop-fade" />
          </div>

          <div className="hero">
            <div className="hero-copy">
              {hero.eyebrow ? <p className="hero-eyebrow">{hero.eyebrow}</p> : null}
              <h1>
                {hero.lines[0]}
                <br />
                <span className="hero-highlight">{hero.lines[1]}</span>
                {hero.lines[2] ? (
                  <>
                    <br />
                    {hero.lines[2]}
                  </>
                ) : null}
              </h1>
              <span className="hero-rule" aria-hidden="true" />
              {hero.trustLine ? <p className="hero-trustline">{hero.trustLine}</p> : null}
              <p>{hero.description}</p>
              <div className="hero-actions">
                <a className="button-call" href="tel:+13057134647">
                  <PhoneIcon /> (305) 713-4647
                </a>
                <a className="button-text" href="sms:+13057134647">
                  <ChatIcon /> {hero.callText}
                </a>
              </div>
            </div>

            <div className="hero-logo-mark">
              <img src={heroLogoMark} alt="Proline Hauling & Property Solutions" width="760" height="560" />

              <div className="hero-badges">
                {hero.badges.map((badge) => {
                  const Icon = heroBadgeIcons[badge.icon]
                  return (
                    <div className="hero-badge-card" key={badge.label}>
                      <span className="hero-badge-icon">
                        <Icon />
                      </span>
                      <span className="hero-badge-label">{badge.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="reveal">
            <SectionHeading
              tag={sections.services.tag}
              title={
                <>
                  <span className="tight-title-line">{sections.services.titleLines[0]}</span>
                  <span className="tight-title-line">{sections.services.titleLines[1]}</span>
                </>
              }
              description={sections.services.description}
            />
          </div>
          <div className="service-grid">
            {sections.services.items.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <article className={`${service.accent} reveal`} key={service.title}>
                  <span className="service-icon">
                    <Icon />
                  </span>
                  <h3>{service.title}</h3>
                  <p>
                    {service.subtitle} {service.description}
                  </p>
                  <ul className="service-checklist">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckIcon />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <a className="button-ghost" href="#contact">
                      {sections.services.cta}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section" id="work">
          <div className="reveal">
            <SectionHeading
              tag={sections.work.tag}
              description={sections.work.description}
            />
          </div>
          <div className="work-grid">
            {sections.work.items.map((item, index) => {
              if (index === sections.work.items.length - 1) return null
              return <WorkCompareCard item={item} key={item.title} languageCode={languageCode} />
            })}
          </div>

          <button
            type="button"
            className={`work-more-toggle ${showMore ? 'open' : ''}`}
            onClick={() => setShowMore((s) => !s)}
            aria-expanded={showMore}
            aria-controls="work-more-panel"
            aria-label="Show more work"
          >
            <ChevronDownIcon />
          </button>

          <div id="work-more-panel" className={`work-more-panel ${showMore ? 'open' : ''}`}>
            <div className="work-more-panel-inner">
              <div className="work-grid">
                {(() => {
                  const item = sections.work.items[sections.work.items.length - 1]
                  return <WorkCompareCard item={item} key={item.title} languageCode={languageCode} />
                })()}
              </div>
            </div>
          </div>

          <MaterialsTicker
            title={sections.work.materialsTitle}
            materials={sections.work.materials}
            images={materialImages}
            cta={sections.work.cta}
          />
          <div className="work-cta reveal">
            <a className="button-call" href="#contact">
              <PhoneIcon /> {sections.work.cta}
            </a>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="reveal">
            <SectionHeading
              tag={sections.steps.tag}
              title={sections.steps.title}
              description={sections.steps.description}
            />
          </div>
          <div className="steps-grid">
            {sections.steps.items.map((step, index) => (
              <article className="step-card reveal" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>
                  {step.title}
                  {index < sections.steps.items.length - 1 ? (
                    <span className="step-arrow" aria-hidden="true">
                      <ArrowRightIcon />
                    </span>
                  ) : null}
                </h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          {sections.steps.callout ? (
            <div className="steps-callout">
              <span className="steps-callout-icon">
                <ClockIcon />
              </span>
              <p>
                <strong>{sections.steps.callout.title}</strong> {sections.steps.callout.description}
              </p>
            </div>
          ) : null}
          <div className="steps-cta-row">
            <a className="steps-cta-card steps-cta-primary" href="tel:+13057134647">
              <span className="steps-cta-icon"><PhoneIcon /></span>
              <span className="steps-cta-text">
                <strong>{sections.contact.callUs}</strong>
                <small>(305) 713-4647</small>
              </span>
              <ArrowRightIcon />
            </a>
            <a className="steps-cta-card steps-cta-secondary" href="sms:+13057134647">
              <span className="steps-cta-icon"><ChatIcon /></span>
              <span className="steps-cta-text">
                <strong>{sections.contact.textUs}</strong>
                <small>(305) 713-4647</small>
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </section>

        <section className="section" id="why-us">
          <div className="reveal">
            <SectionHeading
              tag={sections.features.tag}
              title={sections.features.title}
              description={sections.features.description}
            />
          </div>
          <div className="features-grid">
            {sections.features.items.map((feature) => {
              const Icon = featureIcons[feature.icon]
              return (
                <article className="feature-card reveal" key={feature.title}>
                  {Icon ? (
                    <span className="feature-icon">
                      <Icon />
                    </span>
                  ) : null}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              )
            })}
          </div>

          {sections.features.truckPanel ? (
            <>
              <div className="truck-panel reveal">
                <div className="truck-panel-photo">
                  <img src={truckImg} alt="Proline king-size truck" width="600" height="400" loading="lazy" />
                </div>
                <div className="truck-panel-specs">
                  <span className="truck-specs-label">
                    <TruckIcon /> {sections.features.truckPanel.specsLabel}
                  </span>
                  <div className="truck-specs-grid">
                    {sections.features.truckPanel.specs.map((spec) => (
                      <div className="truck-spec-item" key={spec.unit}>
                        <strong>{spec.value}</strong>
                        <span>{spec.unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trust-badges reveal">
                {sections.features.truckPanel.trust.map((badge) => {
                  const Icon = badge.title === 'Neighborly Certified' ? TrustBadgeIcon : trustIcons[badge.icon]
                  return (
                    <div className="trust-badge" key={badge.title}>
                      <span className="trust-badge-icon">{Icon ? <Icon /> : null}</span>
                      <span className="trust-badge-text">
                        <strong>{badge.title}</strong>
                        <small>{badge.subtitle}</small>
                      </span>
                    </div>
                  )
                })}
              </div>
            </>
          ) : null}
        </section>

        <section className="section" id="areas">
          <div className="reveal">
            <SectionHeading
              tag={sections.areas.tag}
              title={sections.areas.title}
              description={sections.areas.description}
            />
          </div>
          <div className="areas-body reveal reveal-delay-1">
            <div className="areas-location-card">
              <div className="areas-pin-graphic" aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none" width="80" height="80" aria-hidden="true">
                  <circle cx="40" cy="40" r="38" stroke="rgba(20,135,220,0.16)" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="28" stroke="rgba(255,10,120,0.1)" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="18" stroke="rgba(20,135,220,0.12)" strokeWidth="1.5" />
                  <path
                    d="M40 18C33.4 18 28 23.4 28 30c0 10.5 12 24 12 24s12-13.5 12-24c0-6.6-5.4-12-12-12z"
                    fill="rgba(255,10,120,0.12)"
                    stroke="#1487dc"
                    strokeWidth="1.5"
                  />
                  <circle cx="40" cy="30" r="4" fill="#1487dc" />
                </svg>
              </div>
              <p className="areas-location-title">{sections.areas.locationTitle}</p>
              <p className="areas-location-sub">{sections.areas.locationSub}</p>
            </div>
            <div className="areas-right">
              <div className="areas-grid">
                {sections.areas.items.map((area) => (
                  <span className="area-pill" key={area}>
                    <PinIcon />{area}
                  </span>
                ))}
              </div>
              <div className="areas-callout">
                <span>{sections.areas.callout}</span>
                <a className="button-call" href="tel:+13057134647">
                  <PhoneIcon /> {sections.areas.calloutCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="faq-layout reveal">
            <div className="faq-sidebar">
              <span className="section-tag">{sections.faq.tag}</span>
              <h2>{sections.faq.title}</h2>
              <p>{sections.faq.description}</p>
              <div className="faq-contacts">
                <a className="faq-contact-btn" href="tel:+13057134647">
                  <PhoneIcon /> {sections.faq.contactPhone}
                </a>
                <a className="faq-contact-btn" href="#contact">
                  <ChatIcon /> {sections.faq.contactForm}
                </a>
              </div>
            </div>
            <div className="faq-list">
              {sections.faq.items.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-dark" id="contact">
          <div className="contact-layout">
            <div className="contact-left reveal">
              <span className="section-tag contact-tag">{sections.contact.tag}</span>
              <h2>{sections.contact.title}</h2>
              <p>{sections.contact.description}</p>
              <div className="contact-info">
                <div className="contact-info-row">
                  <span className="contact-info-icon"><PhoneIcon /></span>
                  <div>
                    <span className="contact-info-label">{sections.contact.phoneLabel}</span>
                    <a href="tel:+13057134647" className="contact-info-value">(305) 713-4647</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-icon"><ChatIcon /></span>
                  <div>
                    <span className="contact-info-label">{sections.contact.textLabel}</span>
                    <a href="sms:+13057134647" className="contact-info-value">(305) 713-4647</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-icon"><ClockIcon /></span>
                  <div>
                    <span className="contact-info-label">{sections.contact.hoursLabel}</span>
                    <span className="contact-info-value">{sections.contact.hoursValue}</span>
                  </div>
                </div>
              </div>
              <div className="contact-payments">
                <span className="contact-payments-label">{sections.contact.weAccept}</span>
                <div className="contact-payments-row">
                  {sections.contact.payments.map((p) => {
                    const Icon = paymentIcons[p]
                    return (
                      <div className="contact-payment-pill" key={p}>
                        {Icon && <Icon />} {p}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="contact-right reveal reveal-delay-2">
              <ContactForm c={sections.contact} />
            </div>
          </div>
        </section>
      </main>

      <PageFooter footerContent={footer} />
    </div>
  )
}

export default App
