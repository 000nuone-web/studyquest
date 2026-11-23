
/* =========================
   画像の読み込み
========================= */
import threeDRun from "../../assets/MathAssets/3dRun.png";


// アイコン1つ分のデータ
export type IconItem = {
  image: string;
  alt: string;
  title: string;
  link: string;
};

// カテゴリー1つ分のデータ
export type Category = {
  title: string;
  items: IconItem[];
};

// カテゴリー一覧
const categories: Category[] = [
  {
    title: "〜 数学 〜",
    items: [
      {
        image: threeDRun,
        alt: "sincontanアイコン",
        title: "3Dラン",
        link: "/3dRun2/index.html",
      },
      {
        image: "/Law-of-Sines/Law-of-Sines.png",
        alt: "三角法アイコン",
        title: "正弦定理",
        link: "/Law-of-Sines/index.html",
      },
    ],
  },

  {
    title: "〜 光線・物理 〜",
    items: [
      {
        image: "/light/light.png",
        alt: "光線アイコン",
        title: "光線",
        link: "/light/index.html",
      },
      {
        image: "/sinWave/sinWave.png",
        alt: "正弦波アイコン",
        title: "正弦波",
        link: "/sinWave/index.html",
      },
    ],
  },

  {
    title: "〜 便利ツール 〜",
    items: [
      {
        image: "/translation/translation.png",
        alt: "翻訳アイコン",
        title: "翻訳",
        link: "/translation/translation.html",
      },
      {
        image: "/qrcode/qr.png",
        alt: "QRコードアイコン",
        title: "QRコード",
        link: "/qrcode/qr.html",
      },
      {
        image: "/pdf-merge/pdf-merger.png",
        alt: "PDF結合アイコン",
        title: "PDF結合",
        link: "/pdf-merge/index.html",
      },
    ],
  },
];

// 他のファイルから使えるようにする
export default categories;
