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
    nutrition: {
      calories: 250,
      totalFat: 8, // grams
      saturatedFat: 2,
      cholesterol: 5, // mg
      sodium: 120, // mg
      totalCarbohydrate: 20,
      dietaryFiber: 5,
      sugars: 8,
      protein: 20,
    },
  },
  {
    id: "kissan-fruit-jam",
    name: "Fruit Jam",
    brand: "Kissan",
    image:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTtiqpEqPi-zQwHwIHsvYbyDFaUlGkXOkuUr7D2ZggvYkNgS3QT7OSIr0fKrgCmTj94D4lsCYn9",
    ingredients: [
      "Sugar",
      "Fruit Pulp",
      "Water",
      "Acidity Regulator (INS 330)",
      "Preservatives (INS 202, INS 211)",
      "Fruit and Vegetable Colour (INS 120)",
      "Flavour",
      "Antioxidant (INS 300)",
    ],
    nutrition: {
      calories: 50,
      totalFat: 0,
      saturatedFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbohydrate: 13,
      dietaryFiber: 0,
      sugars: 12,
      protein: 0,
    },
  },
  {
    id: "dairy-milk",
    name: "Dairy Milk",
    brand: "Cadbury",
    image:
      "https://cdn.cadbury.co.in/content/dam/sites/india/cadbury_in/brand/brand-pages/diary-milk/desktop/hero-desktop.jpg", // Example from Cadbury India
    ingredients: [
      "Sugar",
      "Milk Solids (23%)",
      "Cocoa Butter",
      "Cocoa Solids",
      "Emulsifiers (E442, E476)",
      "Flavouring Substances (Natural, Nature-Identical & Artificial–Vanilla)",
    ],
    nutrition: {
      calories: 532, // kcal
      totalFat: 29.2, // g
      saturatedFat: 17.5, // g
      transFat: 0.2, // g
      cholesterol: 21, // mg
      sodium: 156, // mg
      totalCarbohydrate: 60.4, // g
      dietaryFiber: 2.1, // g
      sugars: 57.3, // g
      protein: 7.8, // g
    },
  },
];

// Ingredient descriptions and safety status
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
  "Fruit Pulp": {
    description: "Made from real fruit, contains natural vitamins.",
    status: "safe",
  },
  Water: {
    description: "Used as a solvent; safe.",
    status: "safe",
  },
  "Acidity Regulator (INS 330)": {
    description: "Citric acid; used to balance pH.",
    status: "safe",
  },
  "Preservatives (INS 202, INS 211)": {
    description:
      "Potassium sorbate (INS 202) and sodium benzoate (INS 211); preservatives that may cause allergic reactions in sensitive individuals.",
    status: "harmful",
  },
  "Fruit and Vegetable Colour (INS 120)": {
    description:
      "INS 120 (Cochineal) is a natural red color but can cause reactions in some people.",
    status: "harmful",
  },
  Flavour: {
    description:
      "Natural or artificial flavoring; source not always disclosed.",
    status: "harmful",
  },
  "Antioxidant (INS 300)": {
    description: "Ascorbic acid (vitamin C); safe antioxidant.",
    status: "safe",
  },
  "Milk Solids (23%)": {
    description: "Dried milk components offering protein and calcium.",
    status: "safe",
  },
  "Cocoa Butter": {
    description: "Cocoa bean fat providing smooth texture.",
    status: "safe",
  },
  "Cocoa Solids": {
    description: "Ground cocoa beans with flavor and antioxidants.",
    status: "safe",
  },
  "Emulsifiers (E442, E476)": {
    description:
      "Used to improve texture; may cause digestive sensitivity in some.",
    status: "harmful",
  },
  "Flavouring Substances (Natural, Nature-Identical & Artificial–Vanilla)": {
    description:
      "Blend of vanilla flavor compounds, may include artificial flavoring; can trigger sensitivities.",
    status: "harmful",
  },
};
