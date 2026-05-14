export const chapter1 = [
  {
    type: "trial",

    speaker: "シェリー",
    statementNo: 6,
    side: "左",

    target: "あれはおそらく〜",

    branch: {
      index: "1/3",
      text: "筆で描かれてはいない",
    },
  },

  {
    type: "trial",

    speaker: "ハンナ",
    statementNo: 2,
    side: "右",

    target: "つまり犯行は不可能だった",

    choice: {
      index: "1/2",
      text: "部屋には誰もいなかった",
    },
  },

  {
    type: "trial",

    speaker: "シェリー",
    statementNo: 4,
    side: "左",

    target: "そう……つまりあの絵は〜",
  },

  {
    type: "trial",

    speaker: "ナノカ",
    statementNo: 9,
    side: "右",

    target: "あの部屋の状況もおかしい",

    branch: {
      index: "2/3",
      text: "窓は開いていた",
    },

    choice: {
      index: "2/2",
      text: "被害者は先に死んでいた",
    },
  },
]