import logo from '../assets/logo.webp'
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
            <img src={logo} alt="Proline Hauling & Property Solutions" />
            <div className="footer-logo-text">
              <strong>Proline</strong>
              <small>Hauling &amp; Property Solutions</small>
            </div>
          </div>
          <p>{footerContent.description}</p>
          <a href="tel:+13057134647" className="footer-phone">
            <PhoneIcon /> (305) 713-4647
          </a>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://www.instagram.com/prolinehaulingfl?igsh=MTRidXY0NWU2ZjE5dQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
            <a href="https://wa.me/13057134647" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
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
          <a href="tel:+13057134647" className="footer-btn-call">
            <PhoneIcon /> {footerContent.callUs}
          </a>
          <a href="https://wa.me/13057134647" className="footer-btn-wa" target="_blank" rel="noopener noreferrer">
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
