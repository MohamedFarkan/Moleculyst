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
  {
    id: "britannia-marie-gold",
    name: "Marie Gold",
    brand: "Britannia",
    image: "/images/products/marie_gold.png", // Assuming you'll place the image there
    ingredients: [
      "Refined Wheat Flour (Maida) (73%)",
      "Sugar",
      "Refined Palm Oil",
      "Invert Sugar Syrup",
      "Milk Solids",
      "Raising Agents (INS 503(ii), INS 500(ii))",
      "Iodized Salt",
      "Emulsifier (INS 472e)",
      "Calcium Salt",
      "Dough Conditioner (223)",
      "Vitamins*",
      "Ferrous Salt",
      "Potassium Iodate",
      "Permitted Natural Colour (150d)",
      "Added Flavours (Nature Identical & Artificial (Milk & Vanilla) Flavouring Substances)",
    ],
    nutrition: {
      calories: "445", // kcal per 100g
      carbohydrates: "78.9", // g per 100g
      sugars: "21.9", // g per 100g
      protein: "8.4", // g per 100g
      fat: "10.7", // g per 100g
      saturatedFat: "5.2", // g per 100g
      monoUnsaturatedFattyAcids: "4.1", // g per 100g
      polyUnsaturatedFattyAcids: "1.2", // g per 100g
      transFattyAcids: "0", // g per 100g
      cholesterol: "0", // mg per 100g
      calcium: "60", // mg per 100g
      iodine: "15", // mcg per 100g
      iron: "3", // mg per 100g
      vitaminB1: "0.12", // mg per 100g
      vitaminB2: "0.14", // mg per 100g
      vitaminB3: "1.6", // mg per 100g
      vitaminB6: "0.2", // mg per 100g
      vitaminB12: "0.1", // mcg per 100g
      folicAcid: "10", // mcg per 100g
      pantothenate: "1.1", // mg per 100g
    },
  },
  {
    id: "cadbury-oreo-chocolate-sandwich",
    name: "Oreo Chocolate Sandwich Cookie",
    brand: "Cadbury (Nabisco Division - Kraft Foods)",
    image: "/images/products/oreo.jpeg", // Assuming you'll place the image there
    ingredients: [
      "Sugar",
      "Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid)",
      "Palm Oil",
      "Cocoa (Processed with Alkali)",
      "High Fructose Corn Syrup",
      "Baking Soda",
      "Salt",
      "Cornstarch",
      "Emulsifier (Soy Lecithin)",
      "Vanillin - An Artificial Flavor",
      "Chocolate Flavor",
      "Whey (from Milk)",
    ],
    nutrition: {
      // NOTE: The image provides values per serving, not 100g.
      // I'll list based on the "Calories: 2,000" column which is "Daily Values are based on a 2,000 calorie diet"
      // and interpret "Less than" as the value for the nutrient.
      // If a specific serving size is needed, please clarify.
      // For consistency with other products, ideally this would be per 100g.
      // I'll use the 2000 calorie basis values as absolute values to match the structure.
      // It's important to note this is *not* per 100g.
      totalFat: "65g",
      saturatedFat: "20g",
      cholesterol: "300mg",
      sodium: "2400mg",
      totalCarbohydrate: "300g",
      dietaryFiber: "25g",
      // Other nutrients (Iron 8%, Vitamins) from the image are percentages of daily value, not absolute amounts,
      // so they are not directly added to the nutrition object as g/mg/kcal.
      // Energy (Calories) is given as 2,000 or 2,500, which are reference daily values, not per 100g product.
      // This nutrition data needs careful interpretation as it's not directly comparable to your other products' 'per 100g' values.
    },
  },
  // --- NEW PRODUCT ADDED: Coca-Cola Classic ---
  {
    id: "coca-cola-classic",
    name: "Coca-Cola Classic Coke",
    brand: "Coca-Cola",
    image: "/images/products/coke.jpeg", // Assuming you'll place the image there
    ingredients: [
      "Carbonated Water",
      "Sugar",
      "Colour (Caramel E150d)",
      "Phosphoric Acid",
      "Natural Flavourings Including Caffeine",
    ],
    nutrition: {
      // Values are per 100ml as indicated on the label "Per: 100ml"
      sugar: "10.6g",
      energyKj: "180kJ", // Energy in Kilojoules
      energyKcal: "42kcal", // Energy in Kilocalories
      fat: "0g",
      ofWhichSaturates: "0g", // Specific term used on label
      carbohydrate: "10.6g",
      ofWhichSugars: "10.6g", // Specific term used on label
      protein: "0g",
      salt: "0g",
    },
  },
];

// Ingredient descriptions and safety status
export const ingredientDetails: Record<
  string,
  { description: string; status: "safe" | "harmful" }
> = {
  // --- Consolidated Ingredients (Existing) ---
  "Refined Wheat Flour (Maida)": {
    status: "safe",
    description:
      "A finely milled wheat flour, a common base for biscuits and baked goods.",
  },
  "Refined Wheat Flour (Maida) (73%)": {
    status: "safe",
    description: "A finely milled wheat flour, forming 73% of the product.",
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
  "Iodized Salt": {
    status: "safe",
    description: "Salt fortified with iodine, essential for health.",
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
    status: "safe",
    description: "Ascorbic acid (vitamin C); safe antioxidant.",
  },
  "Milk Solids (23%)": {
    description:
      "Dried milk components offering protein and calcium, making up 23% of the product.",
    status: "safe",
  },
  "Cocoa Butter": {
    status: "safe",
    description: "Cocoa bean fat providing smooth texture.",
  },
  "Emulsifiers (E442, E476)": {
    status: "harmful",
    description:
      "E442 (Ammonium Phosphatides) and E476 (Polyglycerol Polyricinoleate) are emulsifiers used to improve chocolate texture; E476 can cause mild digestive sensitivity in some.",
  },
  "Flavoring Substances (Natural, Nature-Identical & Artificial–Vanilla)": {
    status: "harmful",
    description:
      "A blend of vanilla flavor compounds, including natural extracts, nature-identical substances (chemically same as natural), and artificial flavorings; artificial components can trigger sensitivities.",
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
  "Calcium Salt": {
    status: "safe",
    description:
      "A salt of calcium, often used as a firming agent or source of calcium.",
  },
  "Dough Conditioner (223)": {
    status: "harmful",
    description:
      "INS 223 (Sodium Metabisulphite) is a dough conditioner and preservative that may cause allergic reactions in sensitive individuals, especially asthmatics.",
  },
  "Vitamins*": {
    status: "safe",
    description: "Vitamins added for nutritional fortification.",
  },
  "Ferrous Salt": {
    status: "safe",
    description: "A salt of iron, used for iron fortification.",
  },
  "Potassium Iodate": {
    status: "safe",
    description: "A source of iodine, used in iodized salt.",
  },
  "Permitted Natural Colour (150d)": {
    status: "harmful",
    description:
      "INS 150d (Sulphite Ammonia Caramel) is a natural brown food coloring produced using sulphite and ammonia compounds, which can be controversial.",
  },
  "Added Flavours (Nature Identical & Artificial (Milk & Vanilla) Flavouring Substances)":
    {
      status: "harmful",
      description:
        "A blend of flavors, including nature-identical (chemically identical to natural) and artificial components, mimicking milk and vanilla notes.",
    },
  "Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid)":
    {
      status: "safe",
      description:
        "Wheat flour fortified with B vitamins and iron to enhance nutritional value.",
    },
  "Palm Oil": {
    // Generic 'Palm Oil'
    status: "harmful",
    description:
      "A vegetable oil derived from palm fruit, commonly used in food products. High in saturated fat.",
  },
  "Cocoa (Processed with Alkali)": {
    status: "safe",
    description:
      "Cocoa powder treated with an alkali (Dutch-processed) to reduce acidity and darken its color, providing rich chocolate flavor.",
  },
  "High Fructose Corn Syrup": {
    status: "harmful",
    description:
      "A sweetener made from corn starch, composed of fructose and glucose. High consumption is linked to health concerns.",
  },
  "Baking Soda": {
    status: "safe",
    description: "Sodium bicarbonate, a common leavening agent used in baking.",
  },
  Salt: {
    // Generic salt for specific match
    status: "safe",
    description: "Common salt used as a seasoning and preservative.",
  },
  Cornstarch: {
    status: "safe",
    description:
      "A carbohydrate extracted from corn, used as a thickening agent and stabilizer.",
  },
  "Emulsifier (Soy Lecithin)": {
    status: "safe",
    description:
      "Soy lecithin, an emulsifier derived from soybeans, used to prevent ingredients from separating. It is a common allergen.",
  },
  "Vanillin - An Artificial Flavor": {
    status: "harmful",
    description:
      "A synthetic compound that provides the characteristic vanilla flavor.",
  },
  "Chocolate Flavor": {
    status: "harmful",
    description: "Flavoring substances that impart a chocolate taste.",
  },
  "Whey (from Milk)": {
    status: "safe",
    description:
      "A byproduct of cheese production, whey adds protein and texture. Contains milk allergens.",
  },
  // --- NEW INGREDIENTS from Coca-Cola Classic ---
  "Carbonated Water": {
    status: "safe",
    description: "Water infused with carbon dioxide gas, creating fizziness.",
  },
  "Colour (Caramel E150d)": {
    status: "harmful",
    description:
      "Caramel color (E150d or Sulphite Ammonia Caramel) is an artificial coloring agent that has raised health concerns due to its production process.",
  },
  "Phosphoric Acid": {
    status: "harmful",
    description:
      "An inorganic acid used as an acidulant in soft drinks; high consumption can impact bone health and dental enamel.",
  },
  "Natural Flavourings Including Caffeine": {
    status: "safe", // Caffeine can be debated, but generally safe in moderate amounts in beverages
    description:
      "A blend of natural extracts and substances that provide the distinct taste, including caffeine for its stimulant properties.",
  },
};
