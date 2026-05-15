export const chapter2 = [
  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 12,
    side: "右",
    target: "メモに書かれていた通り",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 6,
    side: "右",
    target: "お腹を滅多刺しにして殺害した",
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 12,
    side: "右",
    target: "鍵が閉まっていた",

    branch: {
      index: "中",
      text: "元から開いてたのかも",
    },
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 18,
    side: "右",
    target: "何かおかしい",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "ハンナの録音データ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 20,
    side: "左",
    target: "勘違い",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 11,
    side: "右",
    target: "声真似",

    branch: {
      index: "下（2）",
      text: "他に声を偽装する方法がある",
    },

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "ハンナの録音データ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 13,
    side: "右",
    target: "遠くから操作",

    actions: [
      {
        type: "choice",
        index: "下（2）",
        text: "ナノカ以外にも消せる",
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
    speaker: "アンアン",
    statementNo: 15,
    side: "右",
    target: "意味",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "遠隔操作できない",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アンアン",
    statementNo: 12,
    side: "左",
    target: "不確実な事",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "魔法",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アンアン",
    statementNo: 9,
    side: "右",
    target: "誰でも部屋に入れた",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "ナノカにも扉を開ける事が不可能",
      },

      {
        type: "choice",
        index: "上（2）",
        text: "できる",
      },

      {
        type: "person",
        index: "14",
        text: "ゴクチョー",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ゴクチョー",
    statementNo: 15,
    side: "左",
    target: "共犯者",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "心当たりがある",
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
    speaker: "アンアン",
    statementNo: 9,
    side: "右",
    target: "誰も新たな情報",

    branch: {
      index: "下（3）",
      text: "新たな見解を示せる人がいる",
    },

    actions: [
      {
        type: "person",
        index: "14",
        text: "ゴクチョー",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ゴクチョー",
    statementNo: 24,
    side: "右",
    target: "不具合",

    branch: {
      index: "下（2）",
      text: "スマホの説明に事件と矛盾がある",
    },
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 12,
    side: "右",
    target: "スマホに仕掛け",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "電話をかければ見つかる",
      },

      {
        type: "person",
        index: "6",
        text: "佐伯ミリア",
      },
    ],
  },
]