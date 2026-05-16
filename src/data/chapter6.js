export const chapter6 = [
  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 6,
    side: "左",
    target: "私だけが",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 25,
    side: "右",
    target: "録画",

    branch: {
      index: "上（2）",
      text: "録画では成立しない",
    },
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 2,
    side: "右",
    target: "時間",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 9,
    side: "右",
    target: "ダストシュート",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 12,
    side: "左",
    target: "別の場所",

    actions: [
      {
        type: "evidence",
        index: "5",
        text: "焼却炉室",
      },

      {
        type: "choice",
        index: "下（2）",
        text: "配信アーカイブ",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "背景が設定されていた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 20,
    side: "右",
    target: "不可能",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "空",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 13,
    side: "左",
    target: "気付く",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "重力",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 10,
    side: "右",
    target: "成立する",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 15,
    side: "右",
    target: "移動できる道",

    actions: [
      {
        type: "evidence",
        index: "8",
        text: "紙束",
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
    statementNo: 30,
    side: "右",
    target: "幽霊の仕業",
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 17,
    side: "左",
    target: "結んで垂らす",

    branch: {
      index: "下（2）",
      text: "「幽霊」が結んでいた",
    },

    actions: [
      {
        type: "person",
        index: "8",
        text: "黒部ナノカ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 16,
    side: "右",
    target: "わたくしだけ",

    branch: {
      index: "上（2）",
      text: "他にアリバイがない人物がいる",
    },

    actions: [
      {
        type: "person",
        index: "8",
        text: "黒部ナノカ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 7,
    side: "左",
    target: "少し遅れて",
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 8,
    side: "左",
    target: "静かなものだった",

    actions: [
      {
        type: "choice",
        index: "上（2）",
        text: "証言には問題がある",
      },

      {
        type: "evidence",
        index: "4",
        text: "シャワールーム",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 10,
    side: "右",
    target: "実際に聞いてる",

    branch: {
      index: "下（3）",
      text: "魔法を使った",
    },
  },
]