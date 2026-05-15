export const chapter3 = [
  {
    type: "trial",
    speaker: "メルル",
    statementNo: 9,
    side: "左",
    target: "【事故】",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "魔法",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 7,
    side: "右",
    target: "おかしなこと",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "火災",
      },

      {
        type: "evidence",
        index: "2",
        text: "燃えた痕跡",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 5,
    side: "右",
    target: "燃やして証拠隠滅",

    branch: {
      index: "上（2）",
      text: "証拠隠滅が目的ではない",
    },
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 11,
    side: "左",
    target: "隠れていた",

    actions: [
      {
        type: "evidence",
        index: "12",
        text: "看守カメラ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 3,
    side: "右",
    target: "爆竹",

    actions: [
      {
        type: "evidence",
        index: "5",
        text: "弾痕",
      },

      {
        type: "person",
        index: "8",
        text: "黒部ナノカ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 16,
    side: "右",
    target: "痕跡",

    actions: [
      {
        type: "evidence",
        index: "8",
        text: "アリサの人形",
      },
    ],
  },

  {
    type: "trial",
    speaker: "メルル",
    statementNo: 12,
    side: "右",
    target: "現象",

    branch: {
      index: "中",
      text: "振動",
    },
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 10,
    side: "右",
    target: "地震",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "ゴクチョーの像",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 13,
    side: "左",
    target: "普通の部屋",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "設計",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 8,
    side: "左",
    target: "入れ替わった",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "建物",
      },
    ],
  },

  {
    type: "trial",
    speaker: "メルル",
    statementNo: 8,
    side: "左",
    target: "証明",

    branch: {
      index: "下（3）",
      text: "写真を調べる",
    },

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "窓",
      },

      {
        type: "person",
        index: "10",
        text: "橘シェリー",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 5,
    side: "左",
    target: "持ち上げた痕跡",

    actions: [
      {
        type: "evidence",
        index: "11",
        text: "石畳の塗料",
      },

      {
        type: "choice",
        index: "上（3）",
        text: "時間",
      },
    ],
  },

  {
    type: "trial",
    speaker: "メルル",
    statementNo: 13,
    side: "右",
    target: "怪我のある体",

    actions: [
      {
        type: "evidence",
        index: "5",
        text: "弾痕",
      },

      {
        type: "choice",
        index: "中",
        text: "自分で傷付けた",
      },
    ],
  },
]