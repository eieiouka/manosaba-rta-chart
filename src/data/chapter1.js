export const chapter1 = [
  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 6,
    side: "左",
    target: "筆を使って",

    branch: {
      index: "0/0",
      text: "筆で描かれてはいない",
    },

    actions: [
      {
        type: "choice",
        index: "0/0",
        text: "魔法",
      },
    ],
  },

  {
    type: "trial",
    speaker: "シェリー",
    statementNo: 4,
    side: "左",
    target: "犯人",

    branch: {
      index: "0/0",
      text: "絵は犯人を示した物ではない",
    },
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 9,
    side: "左",
    target: "部屋の状況",

    branch: {
      index: "0/0",
      text: "部屋の状況がおかしい",
    },

    actions: [
      {
        type: "choice",
        index: "0/0",
        text: "問題ある",
      },
    ],
  },

  {
    type: "trial",
    speaker: "アリサ",
    statementNo: 7,
    side: "左",
    target: "外から投げ込んだ",

    branch: {
      index: "0/0",
      text: "道具を使った",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "ボウガンの矢",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 6,
    side: "左",
    target: "殺した",

    branch: {
      index: "0/0",
      text: "シェリーは殺せない",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "分解されたパーツ",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 7,
    side: "左",
    target: "痕跡を残さずに",

    branch: {
      index: "0/0",
      text: "痕跡は残っていた",
    },
  },

  {
    type: "trial",
    speaker: "ココ",
    statementNo: 3,
    side: "左",
    target: "足音も聞こえた",

    branch: {
      index: "0/0",
      text: "ノアは足音を立てていない",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "城ヶ崎ノアの死体写真",
      },

      {
        type: "evidence",
        index: "0/0",
        text: "カラースプレー",
      },

      {
        type: "choice",
        index: "0/0",
        text: "深夜にノアの部屋に入れた者はいない",
      },

      {
        type: "person",
        index: "0/0",
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

    branch: {
      index: "0/0",
      text: "塗料を越える必要はない",
    },
  },

  {
    type: "trial",
    speaker: "マーゴ",
    statementNo: 5,
    side: "左",
    target: "リーチを伸ばせた",

    branch: {
      index: "0/0",
      text: "犯人はリーチを伸ばせた",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "ほうき",
      },

      {
        type: "choice",
        index: "0/0",
        text: "犯人が常に持ち歩いていた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 8,
    side: "左",
    target: "そんなものが存在した証拠",

    branch: {
      index: "0/0",
      text: "長槍が作られた証拠がある",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "血の付いたリボン",
      },

      {
        type: "choice",
        index: "0/0",
        text: "くくりつけた",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 6,
    side: "左",
    target: "魅了の魔法",

    branch: {
      index: "0/0",
      text: "魅了の魔法ではなかった",
    },

    actions: [
      {
        type: "choice",
        index: "0/0",
        text: "魔法は嘘",
      },
    ],
  },

  {
    type: "trial",
    speaker: "ハンナ",
    statementNo: 13,
    side: "左",
    target: "目を離せなくなったり",

    branch: {
      index: "0/0",
      text: "目が離せなくなる魔法",
    },
  },

  {
    type: "trial",
    speaker: "ミリア",
    statementNo: 14,
    side: "左",
    target: "塗料",

    branch: {
      index: "0/0",
      text: "犯人は塗料を持ち去っている",
    },

    actions: [
      {
        type: "choice",
        index: "0/0",
        text: "持ち去った事に気付いてなかった",
      },

      {
        type: "evidence",
        index: "0/0",
        text: "カラースプレー",
      },
    ],
  },

  {
    type: "trial",
    speaker: "レイア",
    statementNo: 18,
    side: "左",
    target: "証拠",

    branch: {
      index: "0/0",
      text: "証拠を提出する",
    },

    actions: [
      {
        type: "evidence",
        index: "0/0",
        text: "配信アーカイブ",
      },

      {
        type: "choice",
        index: "0/0",
        text: "今は持っていない",
      },

      {
        type: "choice",
        index: "0/0",
        text: "知っている人物を提示する",
      },

      {
        type: "person",
        index: "0/0",
        text: "佐伯ミリア",
      },

      {
        type: "evidence",
        index: "0/0",
        text: "フルーツの写真",
      },
    ],
  },
]