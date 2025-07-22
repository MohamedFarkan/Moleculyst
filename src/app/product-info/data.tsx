// data/edibleProducts.ts
export const edibleProducts = [
  {
    id: "protein-bar-x",
    name: "Protein Bar X",
    brand: "FitFoods",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUAyxjHqSiSPEikkwlcaFj9LZU_UvufwULr12Ixhb29taFElBF-jDtB8&s",
    ingredients: [
      "Whey Protein Isolate",
      "Stevia",
      "Sugar",
      "Soy Lecithin",
      "Artificial Flavor",
    ],
  },
];

export const ingredientDetails: Record<
  string,
  { description: string; status: "safe" | "harmful" }
> = {
  "Whey Protein Isolate": {
    description: "Protein from milk, popular in fitness foods.",
    status: "safe",
  },
  Stevia: {
    description: "Natural zero-calorie sweetener.",
    status: "safe",
  },
  Sugar: {
    description: "Common sweetener, harmful in excess.",
    status: "harmful",
  },
  "Soy Lecithin": {
    description: "Emulsifier used to keep ingredients mixed.",
    status: "safe",
  },
  "Artificial Flavor": {
    description: "Synthetic compounds mimicking real flavor.",
    status: "harmful",
  },
};
