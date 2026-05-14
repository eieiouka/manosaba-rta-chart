export const chapter1 = [
  {
    type: "map",
    title: "寮1F",
    text: "右上へ移動して図書室へ入る",
    image: "/images/chapter1/map/sample-map.png",
  },

  {
    type: "choice",
    title: "自由行動",
    text: "『ハンナを追う』を選択",
    image: "/images/chapter1/choice/sample-choice.png",
  },

  {
    type: "trial",
    title: "学級裁判",
    before: "……つまり矛盾している",
    target: "犯行時刻について",
    answerNo: "2",
    answer: "時計が止まっていた",
    image: "/images/chapter1/trial/sample-trial.png",
  },

  {
    type: "evidence",
    title: "証拠提出",
    evidence: "被害者のメモ",
    target: "アリバイについて",
    image: "/images/chapter1/evidence/sample-evidence.png",
  },

  {
    type: "memo",
    title: "補足",
    text: "ここは事故率高め。タイマー確認。",
  },
]