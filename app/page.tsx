"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BakeryItem from "./components/BakeryItem";
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const items = [
  {
    name: "Croissant",
    japanese: "クロワッサ",
    image: "/images/パン１.jpeg",
    describe:
      "バターの香りが広がるサクサクの層。朝のひとときを特別にする一品です。",
    price: 1000,
  },
  {
    name: "Baguette",
    japanese: "バゲット",
    image: "/images/パン２.jpeg",
    describe:
      "外はカリッと、中はもっちり。フランスの伝統が息づく本格派バゲット。",
    price: 2000,
  },
  {
    name: "Bagel",
    japanese: "ベーグル",
    image: "/images/パン３.jpeg",
    describe:
      "ぎゅっと詰まった生地の食感がクセになる。シンプルだからこそ味わえる深い味わい。",
    price: 150,
  },
  {
    name: "White Bread",
    japanese: "食パン",
    image: "/images/パン４.jpeg",
    describe:
      "ふんわり柔らか、どんな料理にも寄り添う万能な一品。毎日の食卓にどうぞ。",
    price: 2500,
  },
];

export default function BakeryList() {
  const [selectedItems, setSelectedItems] = useState<
    { name: string; count: number; price: number }[]
  >([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  // クエリパラメータから選択済みのアイテムを取得して反映
  useEffect(() => {
    const itemsFromQuery = searchParams.get("items");
    if (itemsFromQuery) {
      setSelectedItems(JSON.parse(decodeURIComponent(itemsFromQuery)));
    }
  }, [searchParams]);

  const handleCountChange = (name: string, price: number, count: number) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item.name === name ? { ...item, count: item.count + count } : item
        );
        return updatedItems.filter((item) => item.count > 0); // 個数が0のアイテムを削除
      } else {
        return [...prevItems, { name, count, price }];
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* メインビジュアル（スライダー風） */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="/images/見出し決定250505_2.jpeg"
          alt="メインビジュアル"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 ${cormorant.className}`}>
            焼きたての香りをお届け！
          </h1>
          <button className="px-8 py-3 bg-yellow-400 text-white font-bold rounded-full shadow-lg hover:bg-yellow-500 transition">
            今月のおすすめパンを見る
          </button>
        </div>
      </section>

      {/* おすすめ商品セクション */}
      <section className="max-w-6xl mx-auto py-12" id="products">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="mr-2">🛍️</span> おすすめ商品
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">🍓</span>
            <div className="font-bold mb-2">苺のデニッシュ</div>
            <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">カートに追加</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">🥐</span>
            <div className="font-bold mb-2">バタークロワッサン</div>
            <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">カートに追加</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">🍞</span>
            <div className="font-bold mb-2">米粉の食パン</div>
            <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">カートに追加</button>
          </div>
        </div>
        <div className="text-right mt-4">
          <a href="#all-breads" className="text-blue-500 hover:underline font-medium">▶︎ すべてのパンを見る</a>
        </div>
      </section>

      {/* 定期便バナー */}
      <section className="bg-yellow-100 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-3xl mr-3">🧺</span>
            <span className="text-lg font-bold">パンの定期便 始めました！</span>
          </div>
          <button className="px-6 py-2 bg-yellow-400 text-white font-bold rounded-full shadow hover:bg-yellow-500 transition">
            詳しく見る
          </button>
        </div>
      </section>

      {/* カテゴリ別セクション */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🥖</span> カテゴリで探す
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center font-bold">食パン</div>
          <div className="bg-white p-4 rounded-lg shadow text-center font-bold">菓子パン</div>
          <div className="bg-white p-4 rounded-lg shadow text-center font-bold">惣菜パン</div>
          <div className="bg-white p-4 rounded-lg shadow text-center font-bold">季節限定</div>
        </div>
      </section>

      {/* パン作りのこだわりセクション */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🧁</span> パン作りのこだわり
        </h2>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          地元素材・無添加・毎日焼きたて...<br />
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition">詳しく読む</button>
        </div>
      </section>

      {/* お知らせ / ブログセクション */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">📰</span> お知らせ・ブログ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold mb-2">5月限定パン登場！</div>
            <div className="text-gray-600 text-sm">2025/05/01</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold mb-2">母の日ギフト予約受付中</div>
            <div className="text-gray-600 text-sm">2025/04/25</div>
          </div>
        </div>
      </section>

      {/* お客様の声 / レビュー */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2">🦶</span> お客様の声
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-yellow-400 text-xl mb-2">⭐️⭐️⭐️⭐️⭐️</div>
            <div>「ふわふわで最高！」</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-yellow-400 text-xl mb-2">⭐️⭐️⭐️⭐️</div>
            <div>「配送も丁寧でリピ確定」</div>
          </div>
        </div>
      </section>
    </div>
  );
}
