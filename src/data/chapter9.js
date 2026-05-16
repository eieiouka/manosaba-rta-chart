export const chapter9 = [
  {
    type: "memo",
    title: "魔女裁判 1回目",
    text: "前半パート",
  },
  
  {
    type: "trial",
    speaker: "メルル",
    statementNo: 10,
    side: "右",
    target: "原初の魔女",
  },

  {
    type: "trial",
    speaker: "メルル",
    statementNo: 4,
    side: "右",
    target: "大魔女様の家族",
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 11,
    side: "左",
    target: "目的",
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 9,
    side: "左",
    target: "正々堂々",

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
    speaker: "レイア",
    statementNo: 12,
    side: "左",
    target: "これから",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "憂目アンアン殺人事件",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ノア",
    statementNo: 10,
    side: "右",
    target: "お絵描き大好き",

    branch: {
      index: "中",
      text: "ノアは絵を描くのが好きだ",
    },
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 8,
    side: "右",
    target: "見せちゃダメ",

    actions: [
      {
        type: "choice",
        index: "すべてOK",
        text: "どれを選んでも進行",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 10,
    side: "右",
    target: "何がわかる",
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 26,
    side: "左",
    target: "信頼",

    branch: {
      index: "上（2）",
      text: "私はみんなを信じている",
    },

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "君を愛している",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 6,
    side: "右",
    target: "理由",

    branch: {
      index: "下（3）",
      text: "君の家族も救える",
    },

    actions: [
      {
        type: "choice",
        index: "すべてOK",
        text: "どれを選んでも進行",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 17,
    side: "左",
    target: "お願い",
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 10,
    side: "右",
    target: "無駄に殺される",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "自身を犠牲にする",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 7,
    side: "右",
    target: "見る",
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 4,
    side: "右",
    target: "現実",
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 4,
    side: "右",
    target: "できない",
  },

  {
    type: "trial",
    speaker: "アンアン",
    statementNo: 4,
    side: "右",
    target: "楽",

    actions: [
      {
        type: "person",
        index: "12",
        text: "沢渡ココ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 5,
    side: "右",
    target: "過去",
  },

  {
    type: "trial",
    speaker: "アンアン",
    statementNo: 6,
    side: "右",
    target: "見る",
  },

  {
    type: "trial",
    speaker: "アンアン",
    statementNo: 4,
    side: "右",
    target: "価値",
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 4,
    side: "右",
    target: "みんなの味方",
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 12,
    side: "右",
    target: "未練",
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 9,
    side: "右",
    target: "無視",
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 8,
    side: "右",
    target: "大人しく",

    branch: {
      index: "上（2）",
      text: "魔法【洗脳】",
    },
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 6,
    side: "右",
    target: "終わらせちまえばいい",
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 7,
    side: "右",
    target: "罪人",
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 4,
    side: "右",
    target: "許されねえ",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 1,
    side: "右",
    target: "そんなこと",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 2,
    side: "右",
    target: "殺して",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 4,
    side: "右",
    target: "シェリーさん",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 7,
    side: "右",
    target: "無理",
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 7,
    side: "右",
    target: "見捨てて",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 14,
    side: "右",
    target: "これであって",

    branch: {
      index: "下（2）",
      text: "痛みだ",
    },
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 14,
    side: "右",
    target: "人から離れれば",

    actions: [
      {
        type: "evidence",
        index: "10",
        text: "遠野ハンナ殺人事件",
      },
    ],
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 5,
    side: "左",
    target: "わからなかった",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 3,
    side: "右",
    target: "2人",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 10,
    side: "右",
    target: "いじめられてた",

    actions: [
      {
        type: "evidence",
        index: "13",
        text: "原罪・忌み嫌われるもの",
      },

      {
        type: "evidence",
        index: "2",
        text: "万年筆",
      },
    ],
  },

  // 魔女裁判パート2
  {
    type: "memo",
    title: "魔女裁判 1回目",
    text: "前半パート",
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 12,
    side: "右",
    target: "執行",
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 9,
    side: "左",
    target: "反論",

    branch: {
      index: "下（3）",
      text: "魔法【洗脳】",
    },
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 9,
    side: "左",
    target: "絶滅",
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 11,
    side: "左",
    target: "魔女",

    branch: {
      index: "下（2）",
      text: "魔女は死なない",
    },
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 19,
    side: "左",
    target: "変えること",
  },

  {
    type: "choice",
    index: "すべてOK",
    text: "どちらを選んでも進行",
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 20,
    side: "左",
    target: "全ての出来事",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "魔法を渡すことが問題",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ノア",
    statementNo: 9,
    side: "右",
    target: "嫌なこと",
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 10,
    side: "左",
    target: "想いを知る者",

    actions: [
      {
        type: "evidence",
        index: "3",
        text: "声",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ユキ",
    statementNo: 8,
    side: "左",
    target: "昔からわかって",

    actions: [
      {
        type: "person",
        index: "13",
        text: "氷上メルル",
      },
    ],
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 55,
    side: "右",
    target: "相容れない",
  },
]