// data/edibleProducts.ts
export const edibleProducts = [
  {
    id: "kissan-fruit-jam",
    name: "Fruit Jam",
    brand: "Kissan",
    image: "/images/products/kissan_jam.jpeg", // Kissan Mixed Fruit Jam image
    ingredients: [
      "Sugar",
      "Fruit Pulp",
      "Water",
      "Acidity Regulator (INS 330)",
      "Preservatives (INS 202, INS 211)",
      "Fruit and Vegetable Colour (INS 120)",
      "Flavoring Substances (Unspecified)",
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
    image: "/images/products/dairy_milk.jpeg", // Direct image from Cadbury India official site
    ingredients: [
      "Sugar",
      "Milk Solids",
      "Cocoa Butter",
      "Cocoa Solids",
      "Emulsifiers (E442, E476)",
      "Flavoring Substances (Natural, Nature-Identical & Artificial–Vanilla)",
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
  {
    id: "parle-g-original-gluco-biscuits",
    name: "Parle-G Original Gluco Biscuits",
    brand: "Parle Products",
    image: "/images/products/parle_g.webp", // JioMart image, common reliable source
    ingredients: [
      "Refined Wheat Flour (Maida)",
      "Sugar",
      "Refined Palm Oil",
      "Invert Sugar Syrup",
      "Iodised Salt",
      "Raising Agents (INS 503(ii), INS 500(ii))",
      "Milk Solids",
      "Flour Treatment Agent (INS 1101(i))",
      "Emulsifier of Vegetable Origin (INS 472e)",
      "Artificial Flavoring Substances (Vanilla)",
    ],
    nutrition: {
      calories: "454", // per 100g
      totalFat: "13", // per 100g
      saturatedFat: "6", // per 100g
      transFat: "0", // per 100g
      cholesterol: "0", // per 100g
      carbohydrates: "77.3", // per 100g
      sugars: "25.5", // per 100g
      protein: "6.9", // per 100g
      sodium: "0.74", // per 100g (converted from salt for consistency)
    },
  },
  {
    id: "britannia-good-day-cashew-cookies",
    name: "Britannia Good Day Cashew Cookies",
    brand: "Britannia Industries",
    image: "/images/products/good_day.jpeg",
    ingredients: [
      "Refined Wheat Flour (Maida)",
      "Sugar",
      "Edible Vegetable Oil (Palm)",
      "Cashew Nuts",
      "Butter",
      "Invert Sugar Syrup",
      "Milk Solids",
      "Raising Agents (INS 503(ii), INS 500(ii))",
      "Edible Common Salt",
      "Emulsifiers (INS 322 (Soya Lecithin), INS 471, INS 472e)",
    ],
    nutrition: {
      calories: "504", // per 100g
      totalFat: "24", // per 100g
      saturatedFat: "11", // per 100g
      transFat: "0", // per 100g
      cholesterol: "9.5", // per 100g
      carbohydrates: "65", // per 100g
      sugars: "22", // per 100g
      protein: "7", // per 100g
      sodium: "0.65", // per 100g (converted from salt for consistency)
    },
  },
  {
    id: "sunfeast-dark-fantasy-choco-fills",
    name: "Sunfeast Dark Fantasy Choco Fills",
    brand: "ITC",
    image: "/images/products/dark_fantasy.jpeg", // Amazon India image, common reliable source
    ingredients: [
      "Choco Crème (Sugar, Refined Palmolein, Refined Palm Oil, Cocoa Solids, Nature Identical Flavoring Substances (Chocolate) and Artificial Flavoring Substances (Vanilla))",
      "Refined Wheat Flour (Maida)",
      "Hydrogenated Vegetable Oils",
      "Sugar",
      "Invert Sugar Syrup",
      "Liquid Glucose",
      "Raising Agents (INS 503(ii), INS 500(ii), INS 450(i))",
      "Milk Solids",
      "Iodised Salt",
      "Emulsifiers (INS 322 (Soya Lecithin), INS 471)",
      "Artificial Flavoring Substances (Milk, Vanilla)",
      "Color (INS 150a, INS 150d)",
    ],
    nutrition: {
      calories: "513", // per 100g
      totalFat: "26.5", // per 100g
      saturatedFat: "12.9", // per 100g
      transFat: "0.1", // per 100g
      cholesterol: "0.3", // per 100g
      carbohydrates: "64.3", // per 100g
      sugars: "34.4", // per 100g
      protein: "5.3", // per 100g
      sodium: "0.416", // per 100g (converted from salt for consistency)
    },
  },
];

// Ingredient descriptions and safety status
export const ingredientDetails: Record<
  string,
  { description: string; status: "safe" | "harmful" }
> = {
  // --- Consolidated Ingredients ---
  "Refined Wheat Flour (Maida)": {
    status: "safe",
    description: "A finely milled wheat flour, a common base for biscuits.",
  },
  Sugar: {
    description: "Common sweetener, harmful in excess.",
    status: "harmful",
  },
  "Refined Palm Oil": {
    status: "harmful",
    description:
      "An edible vegetable oil derived from the palm fruit. Contains saturated fats.",
  },
  "Invert Sugar Syrup": {
    status: "harmful",
    description:
      "A mixture of glucose and fructose, often used as a sweetener to prevent crystallization and add moisture. High consumption can be a concern.",
  },
  "Iodised Salt": {
    status: "safe",
    description: "Salt supplemented with iodine, crucial for thyroid function.",
  },
  "Milk Solids": {
    status: "safe",
    description:
      "Derived from milk, adds to flavor and texture. Contains milk allergens.",
  },
  "Cocoa Solids": {
    status: "safe",
    description:
      "Derived from cocoa beans, providing chocolate flavor and color.",
  },
  "Artificial Flavor": {
    description: "Synthetic compounds mimicking real flavor.",
    status: "harmful",
  },
  // --- Specific/Unique Ingredients ---
  "Whey Protein Isolate": {
    description: "Protein from milk, popular in fitness foods.",
    status: "safe",
  },
  Stevia: {
    description: "Natural zero-calorie sweetener.",
    status: "safe",
  },
  "Soya Lecithin": {
    description:
      "Emulsifier used to keep ingredients mixed, derived from soy. A common allergen.",
    status: "safe",
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
  "Flavoring Substances (Unspecified)": {
    description:
      "Natural or artificial flavoring; specific source not always disclosed, making assessment difficult.",
    status: "harmful",
  },
  "Antioxidant (INS 300)": {
    description: "Ascorbic acid (vitamin C); safe antioxidant.",
    status: "safe",
  },
  "Milk Solids (23%)": {
    description:
      "Dried milk components offering protein and calcium, making up 23% of the product.",
    status: "safe",
  },
  "Cocoa Butter": {
    description: "Cocoa bean fat providing smooth texture.",
    status: "safe",
  },
  "Emulsifiers (E442, E476)": {
    description:
      "E442 (Ammonium Phosphatides) and E476 (Polyglycerol Polyricinoleate) are emulsifiers used to improve chocolate texture; E476 can cause mild digestive sensitivity in some.",
    status: "harmful",
  },
  "Flavoring Substances (Natural, Nature-Identical & Artificial–Vanilla)": {
    description:
      "A blend of vanilla flavor compounds, including natural extracts, nature-identical substances (chemically same as natural), and artificial flavorings; artificial components can trigger sensitivities.",
    status: "harmful",
  },
  "Flour Treatment Agent (INS 1101(i))": {
    status: "safe",
    description:
      "INS 1101(i) is Alpha-Amylase, an enzyme used to improve dough properties and texture.",
  },
  "Emulsifier of Vegetable Origin (INS 472e)": {
    status: "safe",
    description:
      "INS 472e (Diacetyl Tartaric Acid Esters of Mono- and Diglycerides) helps blend ingredients smoothly and extends shelf life.",
  },
  "Artificial Flavoring Substances (Vanilla)": {
    status: "harmful",
    description: "Synthetic compounds used to impart vanilla flavor.",
  },
  "Edible Vegetable Oil (Palm)": {
    status: "harmful",
    description:
      "Vegetable oil from palm, a common ingredient in baked goods, contains saturated fats.",
  },
  "Cashew Nuts": {
    status: "safe",
    description: "Nut pieces used for flavor and texture. A common allergen.",
  },
  Butter: {
    status: "safe",
    description:
      "Dairy product made from churning milk or cream, adds richness. Contains milk allergens.",
  },
  "Edible Common Salt": {
    status: "safe",
    description: "Basic salt used for seasoning and preservation.",
  },
  "Emulsifiers (INS 322 (Soya Lecithin), INS 471, INS 472e)": {
    status: "safe",
    description:
      "INS 322 (Soya Lecithin - an allergen), INS 471 (Mono- and Diglycerides of Fatty Acids), and INS 472e (Diacetyl Tartaric Acid Esters of Mono- and Diglycerides) are used to blend ingredients and improve texture.",
  },
  "Choco Crème (Sugar, Refined Palmolein, Refined Palm Oil, Cocoa Solids, Nature Identical Flavoring Substances (Chocolate) and Artificial Flavoring Substances (Vanilla))":
    {
      status: "harmful",
      description:
        "The creamy filling, containing various sugars, refined palm oils, cocoa solids, and both natural and artificial chocolate and vanilla flavorings.",
    },
  "Hydrogenated Vegetable Oils": {
    status: "harmful",
    description:
      "Vegetable oils that have undergone hydrogenation, potentially containing trans fats which are harmful to health.",
  },
  "Liquid Glucose": {
    status: "harmful",
    description:
      "A syrup made from the hydrolysis of starch, adding sweetness and moisture. High sugar content is a concern.",
  },
  "Raising Agents (INS 503(ii), INS 500(ii), INS 450(i))": {
    status: "safe",
    description:
      "INS 503(ii) (Ammonium Bicarbonate), INS 500(ii) (Sodium Bicarbonate), and INS 450(i) (Disodium Diphosphate) are leavening agents.",
  },
  "Emulsifiers (INS 322 (Soya Lecithin), INS 471)": {
    status: "safe",
    description:
      "INS 322 (Soya Lecithin - an allergen) and INS 471 (Mono- and Diglycerides of Fatty Acids) are used to create smooth textures and stabilize emulsions.",
  },
  "Artificial Flavoring Substances (Milk, Vanilla)": {
    status: "harmful",
    description:
      "Synthetic flavor compounds mimicking milk and vanilla tastes.",
  },
  "Color (INS 150a, INS 150d)": {
    status: "harmful",
    description:
      "Food colorings. INS 150a is Plain Caramel, and INS 150d is Sulphite Ammonia Caramel, which has some controversies related to its production.",
  },
};
// Please provide product data from the following list of products.
// 1. Britannia Milk Bikis
// 2. Cadbury Oreo
// 3. Patanjali Digestive Biscuits
// 4. Amul Butter
// 5. Aashirvaad Atta
// 6. Maggi 2-Minute Noodles
// 7. Tata Tea Gold
// 8. Saffola Gold Oil
// 9. Daawat Basmati Rice
// 10. MDH Chana Masala
// 11. Catch Salt (or Catch Table Salt)
// 12. Everest Garam Masala
// 13. Mother Dairy Cow Ghee
// 14. Nescafe Classic Coffee
// 15. Dabur Honey
// 16. Kellogg's Corn Flakes
// 17. MTR Gulab Jamun Mix
// 18. Ching's Secret Schezwan Chutney
// 19. Haldiram's Bhujia
// 20. Manna Health Mix
// Please ensure the data is accurate, precise, and sourced from official brand websites or highly reliable food databases citing official sources.
// Double-check that there are **no duplicate ingredient keys** in the `ingredientDetails` object.
// For image URLs, prioritize official product images. If an official, direct image link is not available, use a reliable e-commerce site image (like Amazon, JioMart) that clearly shows the product packaging.
// Maintain consistency in naming and data structure as in the provided code.
// Also, provide specific `id` for each new product entry.
