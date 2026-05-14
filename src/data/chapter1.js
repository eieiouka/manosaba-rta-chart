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

    actions: [
      {
        type: "evidence",
        order: 1,
        text: "被害者のメモ",
      },

      {
        type: "evidence",
        order: 2,
        text: "割れた花瓶",
      },
    ],
  },

  {
    type: "trial",

    speaker: "ハンナ",
    statementNo: 2,
    side: "右",

    target: "つまり犯行は不可能だった",

    actions: [
      {
        type: "choice",
        index: "1/2",
        text: "部屋には誰もいなかった",
      },

      {
        type: "evidence",
        order: 2,
        text: "監視カメラ映像",
      },

      {
        type: "evidence",
        order: 1,
        text: "血痕写真",
      },
    ],
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

    actions: [
      {
        type: "evidence",
        order: 1,
        text: "解剖記録",
      },

      {
        type: "choice",
        index: "2/2",
        text: "被害者は先に死んでいた",
      },

      {
        type: "evidence",
        order: 2,
        text: "壊れた時計",
      },

      {
        type: "choice",
        index: "1/2",
        text: "凶器は別に存在した",
      },

      {
        type: "evidence",
        order: 2,
        text: "証言メモ",
      },

      {
        type: "evidence",
        order: 1,
        text: "被害者の日記",
      },
    ],
  },
]