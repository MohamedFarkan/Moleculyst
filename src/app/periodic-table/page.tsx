"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

// The complete elements array with an added 'category' property
const elements = [
  // Period 1
  {
    symbol: "H",
    number: 1,
    group: 1,
    period: 1,
    color: "bg-orange-400",
    name: "Hydrogen",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "He",
    number: 2,
    group: 18,
    period: 1,
    color: "bg-purple-500",
    name: "Helium",
    category: "Noble Gas", // Added category
  },
  // Period 2
  {
    symbol: "Li",
    number: 3,
    group: 1,
    period: 2,
    color: "bg-red-500",
    name: "Lithium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Be",
    number: 4,
    group: 2,
    period: 2,
    color: "bg-orange-300",
    name: "Beryllium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "B",
    number: 5,
    group: 13,
    period: 2,
    color: "bg-yellow-600",
    name: "Boron",
    category: "Metalloid", // Added category
  },
  {
    symbol: "C",
    number: 6,
    group: 14,
    period: 2,
    color: "bg-orange-400",
    name: "Carbon",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "N",
    number: 7,
    group: 15,
    period: 2,
    color: "bg-orange-400",
    name: "Nitrogen",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "O",
    number: 8,
    group: 16,
    period: 2,
    color: "bg-orange-400",
    name: "Oxygen",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "F",
    number: 9,
    group: 17,
    period: 2,
    color: "bg-emerald-500",
    name: "Fluorine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Ne",
    number: 10,
    group: 18,
    period: 2,
    color: "bg-purple-500",
    name: "Neon",
    category: "Noble Gas", // Added category
  },
  // Period 3
  {
    symbol: "Na",
    number: 11,
    group: 1,
    period: 3,
    color: "bg-red-500",
    name: "Sodium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Mg",
    number: 12,
    group: 2,
    period: 3,
    color: "bg-orange-300",
    name: "Magnesium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "Al",
    number: 13,
    group: 13,
    period: 3,
    color: "bg-blue-400",
    name: "Aluminum",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Si",
    number: 14,
    group: 14,
    period: 3,
    color: "bg-yellow-600",
    name: "Silicon",
    category: "Metalloid", // Added category
  },
  {
    symbol: "P",
    number: 15,
    group: 15,
    period: 3,
    color: "bg-orange-400",
    name: "Phosphorus",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "S",
    number: 16,
    group: 16,
    period: 3,
    color: "bg-orange-400",
    name: "Sulfur",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "Cl",
    number: 17,
    group: 17,
    period: 3,
    color: "bg-emerald-500",
    name: "Chlorine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Ar",
    number: 18,
    group: 18,
    period: 3,
    color: "bg-purple-500",
    name: "Argon",
    category: "Noble Gas", // Added category
  },
  // Period 4
  {
    symbol: "K",
    number: 19,
    group: 1,
    period: 4,
    color: "bg-red-500",
    name: "Potassium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Ca",
    number: 20,
    group: 2,
    period: 4,
    color: "bg-orange-300",
    name: "Calcium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "Sc",
    number: 21,
    group: 3,
    period: 4,
    color: "bg-sky-500",
    name: "Scandium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ti",
    number: 22,
    group: 4,
    period: 4,
    color: "bg-sky-500",
    name: "Titanium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "V",
    number: 23,
    group: 5,
    period: 4,
    color: "bg-sky-500",
    name: "Vanadium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Cr",
    number: 24,
    group: 6,
    period: 4,
    color: "bg-sky-500",
    name: "Chromium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Mn",
    number: 25,
    group: 7,
    period: 4,
    color: "bg-sky-500",
    name: "Manganese",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Fe",
    number: 26,
    group: 8,
    period: 4,
    color: "bg-sky-500",
    name: "Iron",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Co",
    number: 27,
    group: 9,
    period: 4,
    color: "bg-sky-500",
    name: "Cobalt",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ni",
    number: 28,
    group: 10,
    period: 4,
    color: "bg-sky-500",
    name: "Nickel",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Cu",
    number: 29,
    group: 11,
    period: 4,
    color: "bg-sky-500",
    name: "Copper",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Zn",
    number: 30,
    group: 12,
    period: 4,
    color: "bg-sky-500",
    name: "Zinc",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ga",
    number: 31,
    group: 13,
    period: 4,
    color: "bg-blue-400",
    name: "Gallium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Ge",
    number: 32,
    group: 14,
    period: 4,
    color: "bg-yellow-600",
    name: "Germanium",
    category: "Metalloid", // Added category
  },
  {
    symbol: "As",
    number: 33,
    group: 15,
    period: 4,
    color: "bg-yellow-600",
    name: "Arsenic",
    category: "Metalloid", // Added category
  },
  {
    symbol: "Se",
    number: 34,
    group: 16,
    period: 4,
    color: "bg-orange-400",
    name: "Selenium",
    category: "Nonmetal", // Added category
  },
  {
    symbol: "Br",
    number: 35,
    group: 17,
    period: 4,
    color: "bg-emerald-500",
    name: "Bromine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Kr",
    number: 36,
    group: 18,
    period: 4,
    color: "bg-purple-500",
    name: "Krypton",
    category: "Noble Gas", // Added category
  },
  // Period 5
  {
    symbol: "Rb",
    number: 37,
    group: 1,
    period: 5,
    color: "bg-red-500",
    name: "Rubidium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Sr",
    number: 38,
    group: 2,
    period: 5,
    color: "bg-orange-300",
    name: "Strontium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "Y",
    number: 39,
    group: 3,
    period: 5,
    color: "bg-sky-500",
    name: "Yttrium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Zr",
    number: 40,
    group: 4,
    period: 5,
    color: "bg-sky-500",
    name: "Zirconium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Nb",
    number: 41,
    group: 5,
    period: 5,
    color: "bg-sky-500",
    name: "Niobium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Mo",
    number: 42,
    group: 6,
    period: 5,
    color: "bg-sky-500",
    name: "Molybdenum",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Tc",
    number: 43,
    group: 7,
    period: 5,
    color: "bg-sky-500",
    name: "Technetium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ru",
    number: 44,
    group: 8,
    period: 5,
    color: "bg-sky-500",
    name: "Ruthenium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Rh",
    number: 45,
    group: 9,
    period: 5,
    color: "bg-sky-500",
    name: "Rhodium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Pd",
    number: 46,
    group: 10,
    period: 5,
    color: "bg-sky-500",
    name: "Palladium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ag",
    number: 47,
    group: 11,
    period: 5,
    color: "bg-sky-500",
    name: "Silver",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Cd",
    number: 48,
    group: 12,
    period: 5,
    color: "bg-sky-500",
    name: "Cadmium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "In",
    number: 49,
    group: 13,
    period: 5,
    color: "bg-blue-400",
    name: "Indium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Sn",
    number: 50,
    group: 14,
    period: 5,
    color: "bg-blue-400",
    name: "Tin",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Sb",
    number: 51,
    group: 15,
    period: 5,
    color: "bg-yellow-600",
    name: "Antimony",
    category: "Metalloid", // Added category
  },
  {
    symbol: "Te",
    number: 52,
    group: 16,
    period: 5,
    color: "bg-yellow-600",
    name: "Tellurium",
    category: "Metalloid", // Added category
  },
  {
    symbol: "I",
    number: 53,
    group: 17,
    period: 5,
    color: "bg-emerald-500",
    name: "Iodine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Xe",
    number: 54,
    group: 18,
    period: 5,
    color: "bg-purple-500",
    name: "Xenon",
    category: "Noble Gas", // Added category
  },
  // Period 6
  {
    symbol: "Cs",
    number: 55,
    group: 1,
    period: 6,
    color: "bg-red-500",
    name: "Caesium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Ba",
    number: 56,
    group: 2,
    period: 6,
    color: "bg-orange-300",
    name: "Barium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "La",
    number: 57,
    group: 3,
    period: 6,
    color: "bg-pink-500",
    name: "Lanthanum",
    category: "Lanthanide", // Added category (even if placeholder, it's a type)
  },
  // Lanthanides (numbers 57-71 are usually placed below the main table)
  {
    symbol: "Ce",
    number: 58,
    group: 4,
    period: 9,
    color: "bg-pink-500",
    name: "Cerium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Pr",
    number: 59,
    group: 5,
    period: 9,
    color: "bg-pink-500",
    name: "Praseodymium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Nd",
    number: 60,
    group: 6,
    period: 9,
    color: "bg-pink-500",
    name: "Neodymium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Pm",
    number: 61,
    group: 7,
    period: 9,
    color: "bg-pink-500",
    name: "Promethium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Sm",
    number: 62,
    group: 8,
    period: 9,
    color: "bg-pink-500",
    name: "Samarium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Eu",
    number: 63,
    group: 9,
    period: 9,
    color: "bg-pink-500",
    name: "Europium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Gd",
    number: 64,
    group: 10,
    period: 9,
    color: "bg-pink-500",
    name: "Gadolinium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Tb",
    number: 65,
    group: 11,
    period: 9,
    color: "bg-pink-500",
    name: "Terbium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Dy",
    number: 66,
    group: 12,
    period: 9,
    color: "bg-pink-500",
    name: "Dysprosium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Ho",
    number: 67,
    group: 13,
    period: 9,
    color: "bg-pink-500",
    name: "Holmium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Er",
    number: 68,
    group: 14,
    period: 9,
    color: "bg-pink-500",
    name: "Erbium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Tm",
    number: 69,
    group: 15,
    period: 9,
    color: "bg-pink-500",
    name: "Thulium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Yb",
    number: 70,
    group: 16,
    period: 9,
    color: "bg-pink-500",
    name: "Ytterbium",
    category: "Lanthanide", // Added category
  },
  {
    symbol: "Lu",
    number: 71,
    group: 17,
    period: 9,
    color: "bg-pink-500",
    name: "Lutetium",
    category: "Lanthanide", // Added category
  },
  // Main table continues after Lanthanides placeholder (number 72 onwards)
  {
    symbol: "Hf",
    number: 72,
    group: 4,
    period: 6,
    color: "bg-sky-500",
    name: "Hafnium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ta",
    number: 73,
    group: 5,
    period: 6,
    color: "bg-sky-500",
    name: "Tantalum",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "W",
    number: 74,
    group: 6,
    period: 6,
    color: "bg-sky-500",
    name: "Tungsten",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Re",
    number: 75,
    group: 7,
    period: 6,
    color: "bg-sky-500",
    name: "Rhenium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Os",
    number: 76,
    group: 8,
    period: 6,
    color: "bg-sky-500",
    name: "Osmium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ir",
    number: 77,
    group: 9,
    period: 6,
    color: "bg-sky-500",
    name: "Iridium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Pt",
    number: 78,
    group: 10,
    period: 6,
    color: "bg-sky-500",
    name: "Platinum",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Au",
    number: 79,
    group: 11,
    period: 6,
    color: "bg-sky-500",
    name: "Gold",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Hg",
    number: 80,
    group: 12,
    period: 6,
    color: "bg-sky-500",
    name: "Mercury",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Tl",
    number: 81,
    group: 13,
    period: 6,
    color: "bg-blue-400",
    name: "Thallium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Pb",
    number: 82,
    group: 14,
    period: 6,
    color: "bg-blue-400",
    name: "Lead",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Bi",
    number: 83,
    group: 15,
    period: 6,
    color: "bg-blue-400",
    name: "Bismuth",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Po",
    number: 84,
    group: 16,
    period: 6,
    color: "bg-yellow-600",
    name: "Polonium",
    category: "Metalloid", // Added category
  },
  {
    symbol: "At",
    number: 85,
    group: 17,
    period: 6,
    color: "bg-emerald-500",
    name: "Astatine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Rn",
    number: 86,
    group: 18,
    period: 6,
    color: "bg-purple-500",
    name: "Radon",
    category: "Noble Gas", // Added category
  },
  // Period 7
  {
    symbol: "Fr",
    number: 87,
    group: 1,
    period: 7,
    color: "bg-red-500",
    name: "Francium",
    category: "Alkali Metal", // Added category
  },
  {
    symbol: "Ra",
    number: 88,
    group: 2,
    period: 7,
    color: "bg-orange-300",
    name: "Radium",
    category: "Alkaline Earth Metal", // Added category
  },
  {
    symbol: "Ac",
    number: 89,
    group: 3,
    period: 7,
    color: "bg-fuchsia-500",
    name: "Actinium",
    category: "Actinide", // Added category (even if placeholder, it's a type)
  },
  // Actinides (numbers 89-103 are usually placed below the main table)
  {
    symbol: "Th",
    number: 90,
    group: 4,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Thorium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Pa",
    number: 91,
    group: 5,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Protactinium",
    category: "Actinide", // Added category
  },
  {
    symbol: "U",
    number: 92,
    group: 6,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Uranium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Np",
    number: 93,
    group: 7,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Neptunium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Pu",
    number: 94,
    group: 8,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Plutonium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Am",
    number: 95,
    group: 9,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Americium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Cm",
    number: 96,
    group: 10,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Curium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Bk",
    number: 97,
    group: 11,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Berkelium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Cf",
    number: 98,
    group: 12,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Californium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Es",
    number: 99,
    group: 13,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Einsteinium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Fm",
    number: 100,
    group: 14,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Fermium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Md",
    number: 101,
    group: 15,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Mendelevium",
    category: "Actinide", // Added category
  },
  {
    symbol: "No",
    number: 102,
    group: 16,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Nobelium",
    category: "Actinide", // Added category
  },
  {
    symbol: "Lr",
    number: 103,
    group: 17,
    period: 10,
    color: "bg-fuchsia-500",
    name: "Lawrencium",
    category: "Actinide", // Added category
  },
  // Main table continues after Actinides placeholder (number 104 onwards)
  {
    symbol: "Rf",
    number: 104,
    group: 4,
    period: 7,
    color: "bg-sky-500",
    name: "Rutherfordium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Db",
    number: 105,
    group: 5,
    period: 7,
    color: "bg-sky-500",
    name: "Dubnium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Sg",
    number: 106,
    group: 6,
    period: 7,
    color: "bg-sky-500",
    name: "Seaborgium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Bh",
    number: 107,
    group: 7,
    period: 7,
    color: "bg-sky-500",
    name: "Bohrium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Hs",
    number: 108,
    group: 8,
    period: 7,
    color: "bg-sky-500",
    name: "Hassium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Mt",
    number: 109,
    group: 9,
    period: 7,
    color: "bg-sky-500",
    name: "Meitnerium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Ds",
    number: 110,
    group: 10,
    period: 7,
    color: "bg-sky-500",
    name: "Darmstadtium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Rg",
    number: 111,
    group: 11,
    period: 7,
    color: "bg-sky-500",
    name: "Roentgenium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Cn",
    number: 112,
    group: 12,
    period: 7,
    color: "bg-sky-500",
    name: "Copernicium",
    category: "Transition Metal", // Added category
  },
  {
    symbol: "Nh",
    number: 113,
    group: 13,
    period: 7,
    color: "bg-blue-400",
    name: "Nihonium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Fl",
    number: 114,
    group: 14,
    period: 7,
    color: "bg-blue-400",
    name: "Flerovium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Mc",
    number: 115,
    group: 15,
    period: 7,
    color: "bg-blue-400",
    name: "Moscovium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Lv",
    number: 116,
    group: 16,
    period: 7,
    color: "bg-blue-400",
    name: "Livermorium",
    category: "Post-transition Metal", // Added category
  },
  {
    symbol: "Ts",
    number: 117,
    group: 17,
    period: 7,
    color: "bg-emerald-500",
    name: "Tennessine",
    category: "Halogen", // Added category
  },
  {
    symbol: "Og",
    number: 118,
    group: 18,
    period: 7,
    color: "bg-purple-500",
    name: "Oganesson",
    category: "Noble Gas", // Added category
  },
];

const PeriodicTable = () => {
  const [hoveredElement, setHoveredElement] = useState<null | {
    x: number;
    y: number;
    data: (typeof elements)[0];
  }>(null);

  // New state for filter: default to 'All'
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Manually define categories for the filter buttons
  // These *must* match the 'category' property values in your elements array
  const elementCategories = [
    "All",
    "Alkali Metal",
    "Alkaline Earth Metal",
    "Transition Metal",
    "Post-transition Metal",
    "Metalloid",
    "Nonmetal",
    "Halogen",
    "Noble Gas",
    "Lanthanide",
    "Actinide",
  ];

  const handleElementHover = (
    e: React.MouseEvent<HTMLDivElement>,
    el: (typeof elements)[0],
  ) => {
    setHoveredElement({
      x: e.clientX + 15, // Add some offset to the right of the cursor
      y: e.clientY + 15, // Add some offset below the cursor
      data: el,
    });
  };

  return (
    <DefaultLayout>
      <div className="bg-gray-900 min-h-screen p-6 text-black dark:text-white">
        <h1 className="mb-8 text-center text-4xl font-bold">Periodic Table</h1>

        {/* --- Filter Section --- */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {elementCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors duration-200
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* --- End Filter Section --- */}

        <div className="grid-cols-18 relative grid h-[45rem] grid-rows-10 gap-1">
          {elements.map((el) => {
            // Determine if the element should be faded
            const isFaded =
              selectedCategory !== "All" && // If a specific filter is active
              el.category !== selectedCategory; // AND the element's category does NOT match the selected category

            return (
              <div
                key={el.number}
                onMouseEnter={(e) => handleElementHover(e, el)}
                onMouseMove={(e) => handleElementHover(e, el)}
                onMouseLeave={() => setHoveredElement(null)}
                style={{
                  gridColumnStart: el.group,
                  gridRowStart: el.period,
                }}
                className={`${el.color} transform cursor-pointer rounded px-2 py-3 text-center shadow-md transition-all duration-300
                  ${isFaded ? "scale-95 opacity-20" : "hover:scale-110"}`}
              >
                <div className="text-md font-bold">{el.symbol}</div>
                <div className="text-xs">{el.number}</div>
              </div>
            );
          })}
        </div>

        {/* Tooltip */}
        {/* Tooltip */}
        {hoveredElement && (
          <div
            className="fixed z-50 rounded bg-white p-3 text-sm text-black shadow-lg dark:bg-neutral-800 dark:text-white"
            style={{
              top: hoveredElement.y,
              left: hoveredElement.x,
              minWidth: "150px",
              pointerEvents: "none",
            }}
          >
            <div className="text-lg font-bold text-blue-600">
              {hoveredElement.data.name}
            </div>
            {/* Using span to apply different colors to label and value */}
            <div>
              <span className="text-gray-500 dark:text-gray-400">Symbol: </span>
              <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                {hoveredElement.data.symbol}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">
                Atomic Number:{" "}
              </span>
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                {hoveredElement.data.number}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Group: </span>
              <span className="font-semibold text-teal-500 dark:text-teal-400">
                {hoveredElement.data.group}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Period: </span>
              <span className="font-semibold text-yellow-500 dark:text-yellow-400">
                {hoveredElement.data.period}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">
                Category:{" "}
              </span>
              <span className="font-semibold text-purple-500 dark:text-purple-400">
                {hoveredElement.data.category}
              </span>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PeriodicTable;
