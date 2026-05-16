export const chapter7 = [
  {
    type: "trial",
    speaker: "ノア",
    statementNo: 17,
    side: "左",
    target: "のあの見たこと",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 5,
    side: "右",
    target: "明確な殺人事件",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 5,
    side: "右",
    target: "偶然撮影した",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 10,
    side: "右",
    target: "鉄柵の上に向けて",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "暗い",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 5,
    side: "右",
    target: "殺せます",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 14,
    side: "右",
    target: "痕跡は全て",

    actions: [
      {
        type: "evidence",
        index: "1",
        text: "アンアンの検死結果",
      },

      {
        type: "evidence",
        index: "8",
        text: "ココの死体写真",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "血は偽物だった",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 10,
    side: "左",
    target: "死んでしまった",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "怪我をしていなかった",
      },

      {
        type: "person",
        index: "3",
        text: "憂目アンアン",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 13,
    side: "右",
    target: "するわけがない",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "怪我をしないよう準備していた",
      },

      {
        type: "evidence",
        index: "3",
        text: "中庭",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "自作自演",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 16,
    side: "右",
    target: "いなかった",

    actions: [
      {
        type: "person",
        index: "1",
        text: "桜羽エマ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 13,
    side: "右",
    target: "タイミングの問題",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "魔法",
      },

      {
        type: "person",
        index: "4",
        text: "城ヶ崎ノア",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ノア",
    statementNo: 3,
    side: "右",
    target: "お絵描きでもない",

    branch: {
      index: "上（3）",
      text: "お絵描きだった",
    },

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "噴水",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ノア",
    statementNo: 12,
    side: "左",
    target: "誰にだって",
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 9,
    side: "右",
    target: "偶然雨が降った",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "ミリアの写真",
      },
    ],
  },
]