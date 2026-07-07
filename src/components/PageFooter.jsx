function PageFooter({ footerContent }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>AMG Junk Removal LLC</h3>
          <p>{footerContent.description}</p>
        </div>
        <div>
          <h4>{footerContent.servicesTitle}</h4>
          <ul>
            {footerContent.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{footerContent.companyTitle}</h4>
          <ul>
            {footerContent.company.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
