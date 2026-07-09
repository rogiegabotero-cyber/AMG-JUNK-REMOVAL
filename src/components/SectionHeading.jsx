function SectionHeading({ tag, title, description }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
