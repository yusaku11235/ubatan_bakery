"use client";

import { useState } from "react";

type BakeryItemProps = {
  name: string;
  japanese: string;
  image: string;
  describe: string;
  price: number;
  onCountChange: (price: number, count: number) => void;
};

export default function BakeryItem({
  name,
  japanese,
  image,
  describe,
  price,
  onCountChange,
}: BakeryItemProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    // 状態変更後に onCountChange を呼び出す
    setTimeout(() => onCountChange(price, 1), 0);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      // 状態変更後に onCountChange を呼び出す
      setTimeout(() => onCountChange(price, -1), 0);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full"
      />
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <div className="text-sm text-gray-500">{japanese}</div>
      <div className="text-center text-gray-600 text-sm leading-relaxed italic">
        {describe}
      </div>
      <div className="text-lg font-bold text-gray-800">
        ¥{new Intl.NumberFormat("ja-JP").format(price)}
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-medium">個数: {count}個</span>
        <button
          onClick={increment}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
      </div>
    </div>
  );
}
