export default function ChoiceBlock({ step, stepNo }) {
  return (
    <article className="step-card choice-card">
      <div className="step-label">
        CHOICE / {stepNo}
      </div>

      <p>
        <span className="sub-label">
          選択肢：
        </span>

        <strong className="trial-choice-index">
          {step.index}
        </strong>

        ：「{step.text}」
      </p>
    </article>
  )
}