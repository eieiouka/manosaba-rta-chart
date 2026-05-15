export const chapter4 = [
  {
    type: "memo",
    title: "魔女裁判 1回目",
    text: "前半パート",
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 10,
    side: "右",
    target: "ナノカちゃん",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "黒幕",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 9,
    side: "右",
    target: "深夜の裁判所",

    branch: {
      index: "上（3）",
      text: "深夜以外もロウソクを使う",
    },
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 9,
    side: "右",
    target: "使用",

    actions: [
      {
        type: "choice",
        index: "上（2）",
        text: "問題がある",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 5,
    side: "右",
    target: "水で濡れていた",

    branch: {
      index: "中",
      text: "水をかけられていない",
    },

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "地下冷凍室",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 3,
    side: "右",
    target: "電気を流された証拠",

    branch: {
      index: "上（3）",
      text: "電気以外でもつけられる",
    },

    actions: [
      {
        type: "evidence",
        index: "4",
        text: "睡眠薬",
      },

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
    statementNo: 12,
    side: "右",
    target: "凶器",

    branch: {
      index: "下（2）",
      text: "他の凶器で殺された",
    },

    actions: [
      {
        type: "evidence",
        index: "4",
        text: "睡眠薬",
      },

      {
        type: "person",
        index: "9",
        text: "紫藤アリサ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 10,
    side: "左",
    target: "ダイイングメッセージ",

    branch: {
      index: "下（2）",
      text: "火傷は事故だった",
    },

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "ガラスの破片",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 8,
    side: "左",
    target: "ダイイングメッセージ",

    actions: [
      {
        type: "person",
        index: "13",
        text: "氷上メルル",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "思われないようにした",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 12,
    side: "左",
    target: "魔女裁判",

    branch: {
      index: "上（2）",
      text: "魔女",
    },

    actions: [
      {
        type: "evidence",
        index: "10s",
        text: "アリサの死体写真",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ゴクチョー",
    statementNo: 3,
    side: "左",
    target: "動いた",

    branch: {
      index: "下（3）",
      text: "地下で操作した人物がいる",
    },

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
    speaker: "発言",
    statementNo: 12,
    side: "右",
    target: "桜羽エマちゃん",

    branch: {
      index: "すべてOK",
      text: "どの選択肢を選んでも進行",
    },
  },

  {
    type: "memo",
    title: "魔女裁判 2回目",
    text: "後半パート",
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 11,
    side: "右",
    target: "傷ひとつなかった",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "口の中",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 6,
    side: "左",
    target: "見つかってない",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "消えてしまった",
      },

      {
        type: "choice",
        index: "上（3）",
        text: "氷",
      },

      {
        type: "choice",
        index: "中",
        text: "殺害現場",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 5,
    side: "左",
    target: "ツジツマ",

    branch: {
      index: "中",
      text: "弾丸の数が合わない",
    },

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "別の人物",
      },

      {
        type: "choice",
        index: "上（3）",
        text: "黒幕",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 10,
    side: "左",
    target: "猫でもなきゃ",

    branch: {
      index: "中",
      text: "ナノカは小さくなった",
    },

    actions: [
      {
        type: "choice",
        index: "中",
        text: "分割した",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 6,
    side: "左",
    target: "傷が残る",

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
    speaker: "ココ",
    statementNo: 5,
    side: "右",
    target: "服",

    actions: [
      {
        type: "evidence",
        index: "18（右から3）",
        text: "操作盤",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 6,
    side: "右",
    target: "傷",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "もっとダイイングメッセージがある",
      },

      {
        type: "evidence",
        index: "11",
        text: "金庫",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "囚人番号",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 15,
    side: "左",
    target: "黒幕を示す証拠",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "透明な液体",
      },

      {
        type: "choice",
        index: "中",
        text: "毒薬",
      },

      {
        type: "person",
        index: "9",
        text: "紫藤アリサ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 23,
    side: "右",
    target: "証拠",

    actions: [
      {
        type: "evidence",
        index: "8",
        text: "資料",
      },

      {
        type: "person",
        index: "12",
        text: "沢渡ココ",
      },
    ],
  },

  {
    type: "choice",
    index: "下（2）",
    text: "逃げる",
  },

  {
    type: "choice",
    index: "下（2）",
    text: "メルルから離れた",
  },
]