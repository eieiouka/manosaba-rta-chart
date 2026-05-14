export default function TrialBlock({ step, stepNo }) {
  return (
    <article className="step-card trial-card">
      <div className="step-label">TRIAL / {stepNo}</div>

      <h3>
        {step.speaker}：{step.statementNo}番目
      </h3>

      <p
        className={`trial-line ${
          step.side === "右" ? "right" : "left"
        }`}
      >
        <strong className="trial-target">
          「{step.target}」
        </strong>
      </p>

      {step.branch && (
        <p>
          <span className="sub-label">分岐：</span>

          <strong className="trial-branch-index">
            {step.branch.index}
          </strong>

          ：「{step.branch.text}」
        </p>
      )}
    </article>
  )
}