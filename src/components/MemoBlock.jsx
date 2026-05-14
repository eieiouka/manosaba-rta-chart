export default function MemoBlock({ step, stepNo }) {
  return (
    <article className="step-card memo-card">
      <div className="step-label">MEMO / {stepNo}</div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </article>
  )
}