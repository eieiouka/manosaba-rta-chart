export default function MapBlock({ step, stepNo }) {
  return (
    <article className="step-card map-card">
      <div className="step-label">MAP / {stepNo}</div>
      <h3>{step.title}</h3>

      {step.image && <img src={step.image} alt={step.title} />}

      <p>{step.text}</p>
    </article>
  )
}