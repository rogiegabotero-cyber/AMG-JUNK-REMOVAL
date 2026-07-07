function SectionHeading({ tag, title, description }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
