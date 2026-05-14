export default function TrialBlock({ step, stepNo }) {
  return (
    <article className="step-card trial-card">
      <div className="step-label">TRIAL / {stepNo}</div>
      <h3>{step.title}</h3>

      {step.image && <img src={step.image} alt={step.title} />}

      {step.before && (
        <p>
          <span className="sub-label">手前のセリフ：</span>
          {step.before}
        </p>
      )}

      {step.target && (
        <p>
          <span className="sub-label">押すセリフ：</span>
          <strong>{step.target}</strong>
        </p>
      )}

      {step.answerNo && (
        <p>
          <span className="sub-label">返答：</span>
          <strong>{step.answerNo}番</strong>「{step.answer}」
        </p>
      )}

      {step.branch && (
        <p>
          <span className="sub-label">分岐：</span>
          {step.branch}
        </p>
      )}
    </article>
  )
}