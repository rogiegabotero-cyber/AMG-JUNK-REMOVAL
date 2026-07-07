import { useEffect, useState } from 'react'
import './styles/homepage.css'
import PageHeader from './components/PageHeader'
import heroTeam from './assets/team.jpg'
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
            <img src={heroTeam} alt="AMG Junk Removal crew" />
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
            title={sections.work.title}
            description={sections.work.description}
          />
          <div className="work-grid">
            {sections.work.items.map((item) => (
              <WorkCompareCard item={item} key={item.title} languageCode={languageCode} />
            ))}
          </div>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              {sections.work.cta}
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
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < sections.steps.items.length - 1 ? (
                  <span className="step-arrow" aria-hidden="true">
                    <ArrowRightIcon />
                  </span>
                ) : null}
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
        </section>

        <section className="section" id="why-us">
          <SectionHeading
            tag={sections.features.tag}
            title={sections.features.title}
            description={sections.features.description}
          />
          <div className="features-grid">
            {sections.features.items.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="areas">
          <SectionHeading
            tag={sections.areas.tag}
            title={sections.areas.title}
            description={sections.areas.description}
          />
          <div className="areas-list">
            {sections.areas.items.map((area) => (
              <span className="area-pill" key={area}>
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <SectionHeading
            tag={sections.faq.tag}
            title={sections.faq.title}
            description={sections.faq.description}
          />
          <div className="faq-list">
            {sections.faq.items.map((item) => (
              <div className="faq-item" key={item.question}>
                <strong>{item.question}</strong>
                <span>{item.answer}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel">
            <span className="section-tag">{sections.contact.tag}</span>
            <h2>{sections.contact.title}</h2>
            <p>{sections.contact.description}</p>
            <div className="contact-actions">
              <a className="button-secondary" href="tel:+15617620065">
                {sections.contact.callUs}
              </a>
              <a className="button-secondary" href="sms:+15617620065">
                {sections.contact.textUs}
              </a>
            </div>
          </div>
        </section>
      </main>

      <PageFooter footerContent={footer} />
    </div>
  )
}

export default App
