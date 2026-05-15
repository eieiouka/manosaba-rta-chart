export const chapter1 = [
  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 6,
    side: "右",
    target: "筆を使って",

    actions: [
      {
        type: "choice",
        index: "中",
        text: "魔法",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 4,
    side: "右",
    target: "犯人",
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 9,
    side: "左",
    target: "部屋の状況",

    actions: [
      {
        type: "choice",
        index: "上（2）",
        text: "問題ある",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 7,
    side: "右",
    target: "外から投げ込んだ",

    actions: [
      {
        type: "evidence",
        index: "10",
        text: "ボウガンの矢",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 6,
    side: "右",
    target: "殺した",

    actions: [
      {
        type: "evidence",
        index: "1",
        text: "分解されたパーツ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 7,
    side: "右",
    target: "痕跡を残さずに",
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 3,
    side: "右",
    target: "足音も聞こえた",

    actions: [
      {
        type: "evidence",
        index: "8",
        text: "城ヶ崎ノアの死体写真",
      },

      {
        type: "evidence",
        index: "5",
        text: "カラースプレー",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "深夜にノアの部屋に入れた者はいない",
      },

      {
        type: "person",
        index: "中",
        text: "蓮見レイア",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 6,
    side: "左",
    target: "塗料を越え",
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 5,
    side: "右",
    target: "リーチを伸ばせた",

    actions: [
      {
        type: "evidence",
        index: "4",
        text: "ほうき",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "犯人が常に持ち歩いていた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 8,
    side: "右",
    target: "そんなものが存在した証拠",

    actions: [
      {
        type: "evidence",
        index: "3",
        text: "血の付いたリボン",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "くくりつけた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 6,
    side: "右",
    target: "魅了の魔法",

    actions: [
      {
        type: "choice",
        index: "上（3）",
        text: "魅了の魔法ではなかった",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 13,
    side: "左",
    target: "目を離せなくなったり",
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 14,
    side: "右",
    target: "塗料",

    actions: [
      {
        type: "choice",
        index: "下（3）",
        text: "持ち去った事に気付いてなかった",
      },

      {
        type: "evidence",
        index: "5",
        text: "カラースプレー",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 18,
    side: "右",
    target: "証拠",

    actions: [
      {
        type: "evidence",
        index: "7",
        text: "配信アーカイブ",
      },

      {
        type: "choice",
        index: "中",
        text: "今は持っていない",
      },

      {
        type: "choice",
        index: "下（3）",
        text: "知っている人物を提示する",
      },

      {
        type: "person",
        index: "6",
        text: "佐伯ミリア",
      },

      {
        type: "evidence",
        index: "6",
        text: "フルーツの写真",
      },
    ],
  },
]