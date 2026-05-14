import MapBlock from "./MapBlock"
import ChoiceBlock from "./ChoiceBlock"
import TrialBlock from "./TrialBlock"
import EvidenceBlock from "./EvidenceBlock"
import MemoBlock from "./MemoBlock"

export default function StepBlock({ step, index }) {
  const stepNo = index + 1

  if (step.type === "map") {
    return <MapBlock step={step} stepNo={stepNo} />
  }

  if (step.type === "choice") {
    return <ChoiceBlock step={step} stepNo={stepNo} />
  }

  if (step.type === "trial") {
    return <TrialBlock step={step} stepNo={stepNo} />
  }

  if (step.type === "evidence") {
    return <EvidenceBlock step={step} stepNo={stepNo} />
  }

  return <MemoBlock step={step} stepNo={stepNo} />
}