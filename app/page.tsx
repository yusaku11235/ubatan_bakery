"use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function BakeryList() {
  // const [selectedItems, setSelectedItems] = useState<
  //   { name: string; count: number; price: number }[]
  // >([]);
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const itemsFromQuery = searchParams.get("items");
  //   if (itemsFromQuery) {
  //     setSelectedItems(JSON.parse(decodeURIComponent(itemsFromQuery)));
  //   }
  // }, [searchParams]);

  return (
    <div className="min-h-screen">
      {/* メインビジュアル */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="images/見出し決定250505_2.jpeg"
          alt="メインビジュアル"
          fill
          className="absolute inset-0 object-cover z-0 brightness-95"
          priority
        />
        <div className="relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-8 tracking-wider ${cormorant.className}`}
          >
            Sarap ng Tinapay!
            <br />
            <span className="text-lg md:text-2xl block mt-2 font-normal tracking-normal">
              焼きたての香りをお届け！
            </span>
          </h1>
          <button className="px-10 py-4 bg-[#ffb07c] text-white font-bold rounded-full shadow-xl hover:bg-[#ff6f61] transition text-lg tracking-wide border-2 border-white">
            今月のおすすめパンを見る
          </button>
        </div>
      </section>

      {/* おすすめ商品セクション */}
      <section className="max-w-6xl mx-auto py-16" id="products">
        <h2 className="text-3xl font-extrabold text-[#a05a2c] mb-10 flex items-center justify-center gap-2 tracking-wider">
          <span className="text-2xl">🛍️</span> Pinoyおすすめパン
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition border-2 border-[#ffe29a]">
            <span className="text-5xl mb-4">🍠</span>
            <div className="font-bold text-lg mb-2 text-[#a05a2c]">
              ウベパン
            </div>
            <p className="text-[#ff6f61] mb-4 text-center">
              フィリピン定番の紫芋「ウベ」を使ったもちもちパン。
            </p>
            <button className="mt-auto px-6 py-2 bg-[#ffb07c] text-white rounded-full font-bold shadow hover:bg-[#ff6f61] transition">
              カートに追加
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition border-2 border-[#ffe29a]">
            <span className="text-5xl mb-4">🥯</span>
            <div className="font-bold text-lg mb-2 text-[#a05a2c]">
              パン・デ・サル
            </div>
            <p className="text-[#ff6f61] mb-4 text-center">
              朝食の定番！外はカリッと中はふんわり。
            </p>
            <button className="mt-auto px-6 py-2 bg-[#ffb07c] text-white rounded-full font-bold shadow hover:bg-[#ff6f61] transition">
              カートに追加
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition border-2 border-[#ffe29a]">
            <span className="text-5xl mb-4">🧀</span>
            <div className="font-bold text-lg mb-2 text-[#a05a2c]">
              エンサイマダ
            </div>
            <p className="text-[#ff6f61] mb-4 text-center">
              チーズとバターの甘じょっぱいごほうびパン。
            </p>
            <button className="mt-auto px-6 py-2 bg-[#ffb07c] text-white rounded-full font-bold shadow hover:bg-[#ff6f61] transition">
              カートに追加
            </button>
          </div>
        </div>
        <div className="text-right mt-8">
          <a
            href="#all-breads"
            className="text-[#a05a2c] hover:underline font-semibold text-lg"
          >
            ▶︎ すべてのパンを見る
          </a>
        </div>
      </section>

      {/* 定期便バナー */}
      <section className="bg-[#f4a572] py-10 my-8 rounded-2xl shadow-inner">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-4xl mr-4">🧺</span>
            <span className="text-xl font-bold text-[#a05a2c]">
              パンの定期便 Simulan na!
            </span>
          </div>
          <button className="px-8 py-3 bg-[#ffb07c] text-white font-bold rounded-full shadow hover:bg-[#ff6f61] transition text-lg border-2 border-white">
            詳しく見る
          </button>
        </div>
      </section>

      {/* カテゴリ別セクション */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-extrabold text-[#a05a2c] mb-8 flex items-center gap-2">
          <span>🥖</span> カテゴリで探す
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center font-bold hover:bg-[#ffe29a] transition cursor-pointer text-[#a05a2c]">
            食パン
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center font-bold hover:bg-[#ffe29a] transition cursor-pointer text-[#a05a2c]">
            菓子パン
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center font-bold hover:bg-[#ffe29a] transition cursor-pointer text-[#a05a2c]">
            惣菜パン
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center font-bold hover:bg-[#ffe29a] transition cursor-pointer text-[#a05a2c]">
            季節限定
          </div>
        </div>
      </section>

      {/* パン作りのこだわりセクション */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-2xl font-extrabold text-[#a05a2c] mb-8 flex items-center gap-2">
          <span>🧁</span> パン作りのこだわり
        </h2>
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-2 border-[#ffe29a]">
          <p className="text-lg text-[#ff6f61] mb-6">
            地元素材・無添加・毎日焼きたて。
            <br />
            ひとつひとつ丁寧に、心を込めて焼き上げています。
          </p>
          <button className="px-8 py-3 bg-[#ffb07c] text-white rounded-full font-bold hover:bg-[#ff6f61] transition text-lg border-2 border-white">
            詳しく読む
          </button>
        </div>
      </section>

      {/* お知らせ / ブログセクション */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-extrabold text-[#a05a2c] mb-8 flex items-center gap-2">
          <span>📰</span> お知らせ・ブログ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border-2 border-[#ffe29a]">
            <div className="font-bold mb-2 text-lg text-[#a05a2c]">
              5月限定パン登場！
            </div>
            <div className="text-[#ff6f61] text-sm">2025/05/01</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border-2 border-[#ffe29a]">
            <div className="font-bold mb-2 text-lg text-[#a05a2c]">
              母の日ギフト予約受付中
            </div>
            <div className="text-[#ff6f61] text-sm">2025/04/25</div>
          </div>
        </div>
      </section>

      {/* お客様の声 / レビュー */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-extrabold text-[#a05a2c] mb-8 flex items-center gap-2">
          <span>🦶</span> お客様の声
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow flex flex-col border-2 border-[#ffe29a]">
            <div className="text-yellow-400 text-2xl mb-2">⭐️⭐️⭐️⭐️⭐️</div>
            <div className="text-[#a05a2c] mb-2">「ふわふわで最高！」</div>
            <div className="text-sm text-[#ff6f61]">30代女性・東京都</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow flex flex-col border-2 border-[#ffe29a]">
            <div className="text-yellow-400 text-2xl mb-2">⭐️⭐️⭐️⭐️</div>
            <div className="text-[#a05a2c] mb-2">「配送も丁寧でリピ確定」</div>
            <div className="text-sm text-[#ff6f61]">40代男性・神奈川県</div>
          </div>
        </div>
      </section>
    </div>
  );
}
