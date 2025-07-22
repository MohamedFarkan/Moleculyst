"use client";

import { useState } from "react";
import { edibleProducts, ingredientDetails } from "./data";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ProductInfoPage = () => {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState<(typeof edibleProducts)[0] | null>(
    null,
  );

  const handleSearch = () => {
    const found = edibleProducts.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()),
    );
    setProduct(found || null);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl p-4">
        <h2 className="mb-4 text-xl font-semibold">
          🍽️ Edible Product Checker
        </h2>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Search product (e.g. Protein Bar X)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="dark:bg-gray-800 flex-grow rounded border bg-white px-4 py-2 "
          />
          <button
            onClick={handleSearch}
            className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
          >
            Search
          </button>
        </div>

        {product && (
          <div className="rounded bg-white p-4 shadow dark:bg-neutral-900">
            <img src={product.image} alt={product.name} className="mb-2 w-32" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500 mb-2 text-sm">Brand: {product.brand}</p>

            <h4 className="mb-2 mt-4 font-semibold">Ingredients</h4>
            <ul className="space-y-2">
              {product.ingredients.map((ing) => {
                const detail = ingredientDetails[ing];
                return (
                  <li
                    key={ing}
                    className="bg-gray-50 dark:bg-gray-800 rounded border p-3"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{ing}</span>
                      <span
                        className={`text-sm font-semibold ${
                          detail?.status === "safe"
                            ? "text-green-600"
                            : "text-#ef4444"
                        }`}
                      >
                        {detail?.status === "safe" ? "✅ Safe" : "⚠️ Harmful"}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                      {detail?.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ProductInfoPage;
