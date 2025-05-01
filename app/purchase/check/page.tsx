"use client";

import { useSearchParams, useRouter } from "next/navigation";

const PurchaseCheckPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const items = JSON.parse(
    decodeURIComponent(searchParams.get("items") || "[]")
  );

  // 小計を計算
  const totalPrice = items.reduce(
    (total: number, item: { price: number; count: number }) =>
      total + (item.price || 0) * (item.count || 0),
    0
  );

  // 送料と消費税を計算
  const shippingFee = 500; // 固定送料
  const taxRate = 0.1; // 消費税率10%
  const tax = Math.floor(totalPrice * taxRate); // 消費税
  const grandTotal = totalPrice + shippingFee + tax; // 合計金額

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        購入確認
      </h1>
      <ul className="space-y-6">
        {items.map((item: { name: string; count: number; price: number }) => (
          <li
            key={item.name}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex-1 truncate">
              <span className="text-lg font-semibold text-gray-800">
                {item.name}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                ¥{(item.price || 0).toLocaleString()}
              </span>
            </div>
            <span className="text-lg w-16 text-right text-gray-700">
              {item.count || 0}個
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right text-lg font-medium text-gray-700 space-y-2">
        <div className="flex justify-between">
          <span>小計：</span>
          <span>¥{totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>送料：</span>
          <span>¥{shippingFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>消費税：</span>
          <span>¥{tax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mt-4 text-xl font-bold text-gray-900">
          <span>合計金額：</span>
          <span>¥{grandTotal.toLocaleString()}</span>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <button
          className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-lg shadow-md hover:bg-gray-400 transition"
          onClick={() => {
            router.push(`/?items=${encodeURIComponent(JSON.stringify(items))}`);
          }}
        >
          戻る
        </button>
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition">
          購入を確定する
        </button>
      </div>
    </div>
  );
};

export default PurchaseCheckPage;
