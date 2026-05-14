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

      {step.actions && (
        <div className="trial-actions">
          {step.actions.map((action, index) => {
            if (action.type === "choice") {
              return (
                <p key={index}>
                  <span className="sub-label">選択肢：</span>

                  <strong className="trial-choice-index">
                    {action.index}
                  </strong>

                  ：「{action.text}」
                </p>
              )
            }

            if (action.type === "evidence") {
              return (
                <p key={index} className="trial-evidence-item">
                  <span className="sub-label">証拠品：</span>

                  <strong className="trial-evidence-order">
                    {action.order}番目
                  </strong>

                  ：

                  <span className="trial-evidence-text">
                    {action.text}
                  </span>
                </p>
              )
            }

            return null
          })}
        </div>
      )}
    </article>
  )
}