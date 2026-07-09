import { useEffect, useState } from 'react'
import './styles/homepage.css'
import PageHeader from './components/PageHeader'
import heroTeam from './assets/team.jpg'
import truckImg from './assets/truck-hero.jpg'
import SectionHeading from './components/SectionHeading'
import WorkCompareCard from './components/WorkCompareCard'
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

const badgeIcons = {
  cart: CartIcon,
  leaf: SodIcon,
  truck: TruckIcon,
  clock: ClockIcon,
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

function ContactForm({ c }) {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [city, setCity] = useState('')
  const [desc, setDesc] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    const msg = `Hi, I'd like to request a service.%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ACity: ${encodeURIComponent(city)}%0ADescription: ${encodeURIComponent(desc)}`
    window.open(`https://wa.me/15617620065?text=${msg}`, '_blank')
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

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDownIcon />
      </button>
      <div className="faq-answer" hidden={!open}>{answer}</div>
    </div>
  )
}

function App() {
  const [languageCode, setLanguageCode] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    return window.localStorage.getItem('amg-language') ?? 'en'
  })

  useEffect(() => {
    window.localStorage.setItem('amg-language', languageCode)
    document.documentElement.lang = languageCode
  }, [languageCode])

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
          <div className="hero-visual">
            <img src={heroTeam} alt="AMG Junk Removal crew" width="900" height="600" fetchpriority="high" />
            <div className="hero-visual-fade" aria-hidden="true" />

            <div className="hero-badges">
              {hero.badges.map((badge) => {
                const Icon = badgeIcons[badge.icon]
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

          <div className="hero">
            <div className="hero-copy">
              <h1>
                {hero.lines[0]}
                <br />
                <span className="hero-highlight">{hero.lines[1]}</span>
                <br />
                {hero.lines[2]}
              </h1>
              <p>{hero.description}</p>
              <div className="hero-actions">
                <a className="button-call" href="tel:+15617620065">
                  <PhoneIcon /> (561) 762-0065
                </a>
                <a className="button-text" href="sms:+15617620065">
                  <ChatIcon /> {hero.callText}
                </a>
              </div>

              <div className="hero-metrics">
                {hero.stats.map((stat) => (
                  <div className="metric-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
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
          <div className="service-grid">
            {sections.services.items.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <article className={service.accent} key={service.title}>
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
          <SectionHeading
            tag={sections.work.tag}
            description={sections.work.description}
          />
          <div className="work-grid">
            {sections.work.items.map((item) => (
              <WorkCompareCard item={item} key={item.title} languageCode={languageCode} />
            ))}
          </div>
          <div className="work-cta">
            <a className="button-call" href="#contact">
              <PhoneIcon /> {sections.work.cta}
            </a>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <SectionHeading
            tag={sections.steps.tag}
            title={sections.steps.title}
            description={sections.steps.description}
          />
          <div className="steps-grid">
            {sections.steps.items.map((step, index) => (
              <article className="step-card" key={step.number}>
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
            <a className="steps-cta-card steps-cta-primary" href="tel:+15617620065">
              <span className="steps-cta-icon"><PhoneIcon /></span>
              <span className="steps-cta-text">
                <strong>{sections.contact.callUs}</strong>
                <small>(561) 762-0065</small>
              </span>
              <ArrowRightIcon />
            </a>
            <a className="steps-cta-card steps-cta-secondary" href="sms:+15617620065">
              <span className="steps-cta-icon"><ChatIcon /></span>
              <span className="steps-cta-text">
                <strong>{sections.contact.textUs}</strong>
                <small>(561) 762-0065</small>
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </section>

        <section className="section" id="why-us">
          <SectionHeading
            tag={sections.features.tag}
            title={sections.features.title}
            description={sections.features.description}
          />
          <div className="features-grid">
            {sections.features.items.map((feature) => {
              const Icon = featureIcons[feature.icon]
              return (
                <article className="feature-card" key={feature.title}>
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
              <div className="truck-panel">
                <div className="truck-panel-photo">
                  <img src={truckImg} alt="AMG king-size truck" width="600" height="400" loading="lazy" />
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
              <div className="trust-badges">
                {sections.features.truckPanel.trust.map((badge) => {
                  const Icon = trustIcons[badge.icon]
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
          <SectionHeading
            tag={sections.areas.tag}
            title={sections.areas.title}
            description={sections.areas.description}
          />
          <div className="areas-body">
            <div className="areas-location-card">
              <div className="areas-pin-graphic" aria-hidden="true">
                <span className="areas-pin-ring areas-pin-ring-outer" />
                <span className="areas-pin-ring areas-pin-ring-inner" />
                <PinIcon width="28" height="28" />
              </div>
              <strong>{sections.areas.locationTitle}</strong>
              <span>{sections.areas.locationSub}</span>
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
                <a className="button-call" href="tel:+15617620065">
                  <PhoneIcon /> {sections.areas.calloutCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="faq-layout">
            <div className="faq-sidebar">
              <span className="section-tag">{sections.faq.tag}</span>
              <h2>{sections.faq.title}</h2>
              <p>{sections.faq.description}</p>
              <div className="faq-contacts">
                <a className="faq-contact-btn" href="tel:+15617620065">
                  <PhoneIcon /> {sections.faq.contactPhone}
                </a>
                <a className="faq-contact-btn" href="#contact">
                  <ChatIcon /> {sections.faq.contactForm}
                </a>
              </div>
            </div>
            <div className="faq-list">
              {sections.faq.items.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-dark" id="contact">
          <div className="contact-layout">
            <div className="contact-left">
              <span className="section-tag contact-tag">{sections.contact.tag}</span>
              <h2>{sections.contact.title}</h2>
              <p>{sections.contact.description}</p>
              <div className="contact-info">
                <div className="contact-info-row">
                  <span className="contact-info-icon"><PhoneIcon /></span>
                  <div>
                    <span className="contact-info-label">{sections.contact.phoneLabel}</span>
                    <a href="tel:+15617620065" className="contact-info-value">(561) 762-0065</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-icon"><ChatIcon /></span>
                  <div>
                    <span className="contact-info-label">{sections.contact.textLabel}</span>
                    <a href="sms:+15617620065" className="contact-info-value">(561) 762-0065</a>
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
            <div className="contact-right">
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
