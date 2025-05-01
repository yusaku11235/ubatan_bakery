"use client";

import { useState, useEffect } from "react";

type BakeryItemProps = {
  name: string;
  japanese: string;
  image: string;
  describe: string;
  price: number;
  initialCount: number; // 初期個数を受け取る
  onCountChange: (price: number, count: number) => void;
};

export default function BakeryItem({
  name,
  japanese,
  image,
  describe,
  price,
  initialCount,
  onCountChange,
}: BakeryItemProps) {
  const [count, setCount] = useState(initialCount || 0);

  // 初期個数が変更された場合に count を更新
  useEffect(() => {
    setCount(initialCount || 0);
  }, [initialCount]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(price, 1);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(price, -1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full" />
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <div className="text-sm text-gray-500">{japanese}</div>
      <div className="text-center text-gray-600 text-sm leading-relaxed italic">{describe}</div>
      <div className="text-lg font-bold text-gray-800">¥{price.toLocaleString()}</div>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrement}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-gray-700 font-medium">{count}個</span>
        <button
          onClick={increment}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
