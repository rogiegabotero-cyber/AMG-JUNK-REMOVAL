import logo from '../assets/logo.png'
import { PhoneIcon, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, ClockIcon } from './Icons'

const companyNavHrefs = {
  'How It Works': '#how-it-works',
  'Why Choose Us': '#why-us',
  'Service Areas': '#areas',
  'FAQ': '#faq',
  'Contact Us': '#contact',
  'Como Funciona': '#how-it-works',
  'Por Que Elegirnos': '#why-us',
  'Zonas de Servicio': '#areas',
  'Preguntas': '#faq',
  'Contactanos': '#contact',
  'Kijan Li Mache': '#how-it-works',
  'Poukisa Chwazi Nou': '#why-us',
  'Zòn Sèvis': '#areas',
  'Kesyon': '#faq',
  'Kontakte Nou': '#contact',
}

function PageFooter({ footerContent }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="AMG Junk Removal" />
            <div className="footer-logo-text">
              <strong>AMG Junk Removal</strong>
              <small>LLC · PALM BEACH COUNTY</small>
            </div>
          </div>
          <p>{footerContent.description}</p>
          <a href="tel:+15617620065" className="footer-phone">
            <PhoneIcon /> (561) 762-0065
          </a>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
            <a href="https://wa.me/15617620065" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{footerContent.servicesTitle}</h4>
          <ul>
            {footerContent.services.map((item) => (
              <li key={item}><a href="#services">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{footerContent.companyTitle}</h4>
          <ul>
            {footerContent.company.map((item) => (
              <li key={item}><a href={companyNavHrefs[item] ?? '#'}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-cta-col">
          <h4>{footerContent.ctaTitle}</h4>
          <p>{footerContent.ctaDesc}</p>
          <a href="tel:+15617620065" className="footer-btn-call">
            <PhoneIcon /> {footerContent.callUs}
          </a>
          <a href="https://wa.me/15617620065" className="footer-btn-wa" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {footerContent.whatsapp}
          </a>
          <span className="footer-hours">
            <ClockIcon /> {footerContent.hours}
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{footerContent.copyright}</span>
        <div className="footer-bottom-links">
          <a href="#">{footerContent.privacy}</a>
          <a href="#">{footerContent.terms}</a>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
