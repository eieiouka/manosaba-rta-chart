export const chapter8 = [
  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 6,
    side: "左",
    target: "隠れられるところ",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 4,
    side: "左",
    target: "潜むことは",

    branch: {
      index: "上（3）",
      text: "潜むことはできた",
    },
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 14,
    side: "右",
    target: "現場の状況",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "着替えたタイミング",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 13,
    side: "左",
    target: "消えちまった",

    actions: [
      {
        type: "evidence",
        index: "10",
        text: "赤い液体",
      },

      {
        type: "choice",
        index: "上（3）",
        text: "氷",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 4,
    side: "右",
    target: "乗ること",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "最初からいた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 12,
    side: "左",
    target: "軽くなって",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "体重がかかっていなかった",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 11,
    side: "左",
    target: "お手玉",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 4,
    side: "左",
    target: "自分の体",

    actions: [
      {
        type: "evidence",
        index: "1",
        text: "エマの死体写真",
      },

      {
        type: "evidence",
        index: "3",
        text: "ドレス",
      },

      {
        type: "choice",
        index: "中",
        text: "自分の髪",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 22,
    side: "右",
    target: "時間",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "2着目",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 10,
    side: "左",
    target: "嫌っていた",

    branch: {
      index: "上（2）",
      text: "エマはハンナを好きだった",
    },

    actions: [
      {
        type: "evidence",
        index: "11",
        text: "エマの人形",
      },
    ],
  },
]