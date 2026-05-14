export default function EvidenceBlock({ step, stepNo }) {
  return (
    <article className="step-card evidence-card">
      <div className="step-label">EVIDENCE / {stepNo}</div>
      <h3>{step.title}</h3>

      {step.image && <img src={step.image} alt={step.title} />}

      {step.target && (
        <p>
          <span className="sub-label">場面：</span>
          {step.target}
        </p>
      )}

      <p>
        <span className="sub-label">提出：</span>
        <strong>{step.evidence}</strong>
      </p>
    </article>
  )
}