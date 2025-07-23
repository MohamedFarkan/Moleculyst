"use client";

import { useState } from "react";
import { edibleProducts, ingredientDetails } from "./data";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

// Helper function to determine nutrition status and return styling/tooltip
const getNutritionStatus = (key: string, value: string | number) => {
  const numValue = parseFloat(String(value)); // Ensure numeric comparison

  let status: "normal" | "excess" | "good" = "normal"; // Added 'good' for beneficial nutrients
  let tooltipText = "Normal Level";
  let textColorClass = "text-gray-800 dark:text-gray-200"; // Default neutral color

  switch (key) {
    case "calories":
      if (numValue > 250) {
        status = "excess";
        tooltipText = "High Calorie Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Calorie Level";
        textColorClass = "text-green-700 dark:text-green-400"; // Success color
      }
      break;
    case "totalFat":
      if (numValue > 15) {
        status = "excess";
        tooltipText = "High Total Fat Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Total Fat Level";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "saturatedFat":
      if (numValue > 5) {
        status = "excess";
        tooltipText = "High Saturated Fat Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Saturated Fat Level";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "transFat":
      if (numValue > 0) {
        status = "excess"; // Any trans fat is generally undesirable
        tooltipText = "Contains Trans Fat (Excess)";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "No Trans Fat (Normal)";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "cholesterol":
      if (numValue > 20) {
        status = "excess";
        tooltipText = "High Cholesterol Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Cholesterol Level";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "sodium":
      if (numValue > 300) {
        status = "excess";
        tooltipText = "High Sodium Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Sodium Level";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "sugars":
      if (numValue > 10) {
        status = "excess";
        tooltipText = "High Sugar Level";
        textColorClass = "text-[#B91C1C] dark:text-[#F87171]"; // Danger color (hex)
      } else {
        tooltipText = "Normal Sugar Level";
        textColorClass = "text-green-700 dark:text-green-400";
      }
      break;
    case "protein":
      if (numValue >= 5) {
        status = "good"; // Higher protein is generally good
        tooltipText = "Good Protein Source";
        textColorClass = "text-green-700 dark:text-green-400";
      } else {
        tooltipText = "Low Protein Level";
        textColorClass = "text-yellow-700 dark:text-yellow-400"; // Neutral/warning if low
      }
      break;
    case "dietaryFiber":
      if (numValue >= 2) {
        status = "good"; // Higher fiber is generally good
        tooltipText = "Good Fiber Source";
        textColorClass = "text-green-700 dark:text-green-400";
      } else {
        tooltipText = "Low Fiber Level";
        textColorClass = "text-yellow-700 dark:text-yellow-400"; // Neutral/warning if low
      }
      break;
    default:
      // For totalCarbohydrate and other non-specified keys, use default color
      tooltipText = "Information Level";
      textColorClass = "text-gray-800 dark:text-gray-200";
      break;
  }

  return { status, tooltipText, textColorClass };
};

const ProductInfoPage = () => {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState<(typeof edibleProducts)[0] | null>(
    null,
  );
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    const found = edibleProducts.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()),
    );
    setProduct(found || null);
  };

  const handleClearSearch = () => {
    setQuery("");
    setProduct(null);
    setHasSearched(false);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-5xl p-4">
        <h2 className="mb-4 text-xl font-semibold">
          🍽️ Edible Product Checker
        </h2>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Search product (e.g., Protein Bar X)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="dark:bg-gray-800 flex-grow rounded border bg-white px-4 py-2 md:max-w-[50%]"
          />
          <button
            onClick={handleSearch}
            className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
          >
            Search
          </button>
          {query && (
            <button
              onClick={handleClearSearch}
              className="rounded bg-[#B91C1C] px-4 py-2 text-white hover:bg-[#F87171]"
              title="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        {product && (
          <div className="rounded bg-white p-4 shadow dark:bg-neutral-900">
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 w-32 rounded-lg object-cover"
            />
            <h3 className="text-gray-900 text-2xl font-bold dark:text-white">
              {product.name}
            </h3>
            <p className="text-gray-500 mb-4 text-sm">Brand: {product.brand}</p>
            <hr className="border-gray-300 dark:border-gray-700 my-6" />{" "}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Ingredients Section */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">Ingredients</h4>
                <div className="max-h-80 overflow-y-auto pr-2">
                  <ul className="space-y-3">
                    {product.ingredients.map((ing) => {
                      const detail = ingredientDetails[ing];
                      const isHarmful = detail?.status === "harmful";
                      return (
                        <li
                          key={ing}
                          className={`rounded border p-3 ${
                            isHarmful
                              ? "border-[#FECACA] bg-[#FEE2E2] dark:border-[#7F1D1D] dark:bg-[rgba(65,1,1,0.4)]"
                              : "border-green-200 bg-green-100 dark:border-green-900 dark:bg-green-950/40"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">{ing}</span>
                            <span
                              className={`text-sm font-semibold ${
                                isHarmful
                                  ? "text-[#B91C1C] dark:text-[#F87171]"
                                  : "text-green-700 dark:text-green-400"
                              }`}
                            >
                              {isHarmful ? "⚠️ Harmful" : "✅ Safe"}
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
                            {detail?.description || "Details not available."}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Nutrition Table Section */}
              {product.nutrition && (
                <div>
                  <h4 className="mb-3 text-lg font-semibold">
                    Nutrition Facts (per 100g/ml)
                  </h4>
                  <table className="border-gray-300 dark:border-gray-700 w-full table-auto border-collapse border text-sm">
                    <tbody>
                      {Object.entries(product.nutrition).map(([key, value]) => {
                        const { tooltipText, textColorClass } =
                          getNutritionStatus(key, value);
                        return (
                          <tr
                            key={key}
                            className="border-gray-200 dark:border-gray-700 border-b last:border-b-0"
                          >
                            <td className="border-gray-200 dark:border-gray-700 border-r px-3 py-2 font-medium capitalize">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </td>
                            <td
                              className={`px-3 py-2 ${textColorClass}`}
                              title={tooltipText}
                            >
                              {value}{" "}
                              {key === "cholesterol" || key === "sodium"
                                ? "mg"
                                : key === "calories"
                                  ? "kcal"
                                  : "g"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {hasSearched && !product && (
          <div
            className="mt-6 rounded border p-4 text-center font-medium"
            style={{
              backgroundColor: "#FEE2E2",
              borderColor: "#FECACA",
              color: "#B91C1C",
            }}
          >
            ❌ No product found matching &quot;{query}&quot;. Please try a
            different name.
          </div>
        )}

        {/* Disclaimer Text */}
        <p className="text-gray-500 dark:text-gray-400 mt-8 text-center text-xs">
          <span className="font-semibold">Disclaimer:</span> Product
          information, including ingredients and nutrition facts, is sourced
          from official brand websites and reliable public databases. While we
          strive for accuracy, formulations may change, so always refer to the
          product packaging for the most current information.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default ProductInfoPage;
