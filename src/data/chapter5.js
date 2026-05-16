export const chapter5 = [
  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 9,
    side: "左",
    target: "すぐに",
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 5,
    side: "右",
    target: "持っていた鈍器",
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 7,
    side: "右",
    target: "同時に",
  },

  {
    type: "trial",
    speaker: "ノア",
    statementNo: 7,
    side: "左",
    target: "気絶した",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "睡眠薬のビンを持っていた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 7,
    side: "右",
    target: "魔法",
  },

  {
    type: "trial",
    speaker: "発言",
    statementNo: 4,
    side: "右",
    target: "音",
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 7,
    side: "右",
    target: "キミにしか",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "偽装された音声",
      },
    ],
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 11,
    side: "左",
    target: "殺すことができる人",

    actions: [
      {
        type: "person",
        index: "1",
        text: "桜羽エマ",
      },

      {
        type: "choice",
        index: "中",
        text: "ビンが割れた音",
      },

      {
        type: "choice",
        index: "上（3）",
        text: "エマとメルルの通話",
      },
    ],
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 3,
    side: "右",
    target: "電話",
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 9,
    side: "左",
    target: "医務室",
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 7,
    side: "右",
    target: "話したこと",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "偽物",
      },

      {
        type: "person",
        index: "7",
        text: "宝生マーゴ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 7,
    side: "右",
    target: "足場になるようなもの",

    actions: [
      {
        type: "evidence",
        index: "1",
        text: "倒れていたヒロ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 13,
    side: "右",
    target: "殺害現場",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "魔法",
      },

      {
        type: "choice",
        index: "中",
        text: "立体音響",
      },
    ],
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 18,
    side: "左",
    target: "指紋",

    actions: [
      {
        type: "evidence",
        index: "6",
        text: "メルルのスマホ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "エマ",
    statementNo: 3,
    side: "左",
    target: "ボクと話した",

    branch: {
      index: "中",
      text: "ナノカの証言と矛盾する",
    },
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 6,
    side: "左",
    target: "幻聴",

    branch: {
      index: "中",
      text: "音を抑えた",
    },
  },

  {
    type: "trial",
    speaker: "ナノカ",
    statementNo: 8,
    side: "左",
    target: "そんなことする意味",

    branch: {
      index: "上（3）",
      text: "早く死体を発見させたかった",
    },
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 14,
    side: "左",
    target: "みんなに信じて",
  },
]