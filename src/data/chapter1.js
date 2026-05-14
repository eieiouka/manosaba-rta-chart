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
        index: "1/13",
        text: "被害者のメモ",
      },

      {
        type: "person",
        index: "3/13",
        text: "遠野ハンナ",
      },

      {
        type: "evidence",
        index: "5/13",
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
        type: "person",
        index: "6/13",
        text: "橘シェリー",
      },

      {
        type: "evidence",
        index: "7/13",
        text: "監視カメラ映像",
      },

      {
        type: "evidence",
        index: "2/13",
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
        index: "1/13",
        text: "解剖記録",
      },

      {
        type: "choice",
        index: "2/2",
        text: "被害者は先に死んでいた",
      },

      {
        type: "person",
        index: "9/13",
        text: "黒部ナノカ",
      },

      {
        type: "evidence",
        index: "8/13",
        text: "壊れた時計",
      },

      {
        type: "choice",
        index: "1/2",
        text: "凶器は別に存在した",
      },

      {
        type: "evidence",
        index: "10/13",
        text: "証言メモ",
      },

      {
        type: "person",
        index: "12/13",
        text: "桜羽エマ",
      },

      {
        type: "evidence",
        index: "3/13",
        text: "被害者の日記",
      },
    ],
  },
]