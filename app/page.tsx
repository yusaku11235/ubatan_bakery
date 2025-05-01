"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BakeryItem from "./components/BakeryItem";

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
          item.name === name
            ? { ...item, count: item.count + count }
            : item
        );
        return updatedItems.filter((item) => item.count > 0); // 個数が0のアイテムを削除
      } else {
        return [...prevItems, { name, count, price }];
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
        BAKERY
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => {
          // 選択済みの個数を取得
          const selectedItem = selectedItems.find((i) => i.name === item.name);
          const count = selectedItem ? selectedItem.count : 0;

          return (
            <BakeryItem
              key={item.name}
              {...item}
              initialCount={count} // 保持している個数を反映
              onCountChange={(price, count) =>
                handleCountChange(item.name, price, count)
              }
            />
          );
        })}
      </div>
      <div className="text-center mt-8">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={() => {
            router.push(
              `/purchase/check?items=${encodeURIComponent(
                JSON.stringify(selectedItems)
              )}`
            );
          }}
        >
          購入画面へ進む
        </button>
      </div>
    </div>
  );
}
