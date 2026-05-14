import StepBlock from "./StepBlock"

export default function Chapter({ chapter }) {
  return (
    <section className="chapter" id={chapter.id}>
      <h2 className="chapter-title">{chapter.title}</h2>

      <div className="step-list">
        {chapter.steps.map((step, index) => (
          <StepBlock key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}