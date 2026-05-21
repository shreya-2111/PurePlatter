const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-8">
    {eyebrow ? <p className="chip mb-4">{eyebrow}</p> : null}
    <h2 className="section-title">{title}</h2>
    {description ? <p className="section-copy">{description}</p> : null}
  </div>
);

export default SectionHeading;
