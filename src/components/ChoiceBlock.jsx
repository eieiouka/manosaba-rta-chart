export default function ChoiceBlock({ step, stepNo }) {
  return (
    <article className="step-card choice-card">
      <div className="step-label">CHOICE / {stepNo}</div>
      <h3>{step.title}</h3>

      {step.image && <img src={step.image} alt={step.title} />}

      <p className="important">{step.text}</p>
    </article>
  )
}