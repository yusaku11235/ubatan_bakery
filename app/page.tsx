"use client";

// components/BakeryList.tsx
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import { useRouter } from "next/navigation";

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
  {
    name: "Croissant２",
    japanese: "クロワッサ",
    image: "/images/パン１.jpeg",
    describe:
      "バターの香りが広がるサクサクの層。朝のひとときを特別にする一品です。",
    price: 1000000,
  },
];

export default function BakeryList() {
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const handleCountChange = (price: number, count: number) => {
    setTotal((prevTotal) => prevTotal + price * count);
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
        BAKERY
      </h1>
      <h2 className="text-xl text-center text-gray-600 mb-12">
        美味しいパンをお届けします
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <BakeryItem
            key={item.name}
            {...item}
            onCountChange={handleCountChange}
          />
        ))}
      </div>
      <div className="text-center text-2xl font-bold mt-8 bg-white py-4 shadow-md sticky bottom-0">
        合計額：¥{new Intl.NumberFormat("ja-JP").format(total)}
        <button
          className={`ml-4 px-6 py-2 rounded text-white font-bold transform ${
            total > 0
              ? "bg-red-500 hover:bg-red-600 active:scale-95"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={total === 0}
          onClick={() => {
            if (total > 0) {
              router.push("/checkout");
            }
          }}
        >
          購入画面へ進む
        </button>
      </div>
    </div>
  );
}
