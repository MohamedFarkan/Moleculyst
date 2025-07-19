"use client";
import React, { useState, useEffect } from "react";
import MoleculeStructure from "../MoleculeStructure/index.jsx";
import ChemicalLoader from "@/components/Loader/loader"; // adjust path as needed

const moleculeBank = [
  {
    moleculeName: "Acetaminophen",
    smilesStructure: "CC(=O)NC1=CC=C(O)C=C1",
    molecularWeight: 151.16,
    categoryUsage: "Pain reliever/Antipyretic",
  },
  {
    moleculeName: "Acetic Acid",
    smilesStructure: "CC(=O)O",
    molecularWeight: 60.05,
    categoryUsage: "Preservative/Acidifier",
  },
  {
    moleculeName: "Acetone",
    smilesStructure: "CC(=O)C",
    molecularWeight: 58.08,
    categoryUsage: "Solvent/Nail polish remover",
  },
  {
    moleculeName: "Alanine",
    smilesStructure: "CC(C(=O)O)N",
    molecularWeight: 89.09,
    categoryUsage: "Essential amino acid",
  },
  {
    moleculeName: "Ammonia",
    smilesStructure: "N",
    molecularWeight: 17.03,
    categoryUsage: "Fertilizer/Cleaning",
  },
  {
    moleculeName: "Aniline",
    smilesStructure: "NC1=CC=CC=C1",
    molecularWeight: 93.13,
    categoryUsage: "Dye manufacturing",
  },
  {
    moleculeName: "Aspirin",
    smilesStructure: "CC(=O)OC1=CC=CC=C1C(O)=O",
    molecularWeight: 180.16,
    categoryUsage: "Pain reliever/NSAID",
  },
  {
    moleculeName: "Benzene",
    smilesStructure: "C1=CC=CC=C1",
    molecularWeight: 78.11,
    categoryUsage: "Industrial solvent",
  },
  {
    moleculeName: "Butane",
    smilesStructure: "CCCC",
    molecularWeight: 58.12,
    categoryUsage: "Fuel/Gas",
  },
  {
    moleculeName: "Caffeine",
    smilesStructure: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
    molecularWeight: 194.19,
    categoryUsage: "Stimulant",
  },
  {
    moleculeName: "Capsaicin",
    smilesStructure: "CC(=O)NC1=CC(=C(C=C1)O)CCCCC=C",
    molecularWeight: 305.41,
    categoryUsage: "Spice/Topical pain relief",
  },
  {
    moleculeName: "Carbon Dioxide",
    smilesStructure: "O=C=O",
    molecularWeight: 44.01,
    categoryUsage: "Carbonation/Respiration byproduct",
  },
  {
    moleculeName: "Carbon Monoxide",
    smilesStructure: "[C-]#[O+]",
    molecularWeight: 28.01,
    categoryUsage: "Toxic gas",
  },
  {
    moleculeName: "Chloroform",
    smilesStructure: "ClC(Cl)Cl",
    molecularWeight: 119.38,
    categoryUsage: "Solvent/Anesthetic",
  },
  {
    moleculeName: "Citric Acid",
    smilesStructure: "C(C(=O)O)C(CC(=O)O)(C(=O)O)O",
    molecularWeight: 192.12,
    categoryUsage: "Preservative/Flavoring",
  },
  {
    moleculeName: "Dimethyl Sulfoxide (DMSO)",
    smilesStructure: "CS(=O)C",
    molecularWeight: 78.13,
    categoryUsage: "Solvent/Drug delivery",
  },
  {
    moleculeName: "Ethanol",
    smilesStructure: "CCO",
    molecularWeight: 46.07,
    categoryUsage: "Alcohol/Disinfectant",
  },
  {
    moleculeName: "Formaldehyde",
    smilesStructure: "C=O",
    molecularWeight: 30.03,
    categoryUsage: "Preservative/Disinfectant",
  },
  {
    moleculeName: "Glucose",
    smilesStructure: "C(C1C(C(C(C(O1)O)O)O)O)O",
    molecularWeight: 180.16,
    categoryUsage: "Energy source/sugar",
  },
  {
    moleculeName: "Glycine",
    smilesStructure: "C(C(=O)O)N",
    molecularWeight: 75.07,
    categoryUsage: "Amino acid/Protein synthesis",
  },
  {
    moleculeName: "Glycerol",
    smilesStructure: "C(C(CO)O)O",
    molecularWeight: 92.09,
    categoryUsage: "Skincare/Pharmaceutical",
  },
  {
    moleculeName: "Hexane",
    smilesStructure: "CCCCCC",
    molecularWeight: 86.18,
    categoryUsage: "Industrial solvent",
  },
  {
    moleculeName: "Histamine",
    smilesStructure: "C1=CN=CN1CCN",
    molecularWeight: 111.15,
    categoryUsage: "Allergic responses/Neurotransmitter",
  },
  {
    moleculeName: "Hydrochloric Acid",
    smilesStructure: "Cl",
    molecularWeight: 36.46,
    categoryUsage: "Cleaning/Industrial acid",
  },
  {
    moleculeName: "Hydrogen Peroxide",
    smilesStructure: "OO",
    molecularWeight: 34.01,
    categoryUsage: "Disinfectant/Bleaching",
  },
  {
    moleculeName: "Ibuprofen",
    smilesStructure: "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",
    molecularWeight: 206.28,
    categoryUsage: "Pain reliever/NSAID",
  },
  {
    moleculeName: "Isopropanol",
    smilesStructure: "CC(O)C",
    molecularWeight: 60.1,
    categoryUsage: "Disinfectant/Solvent",
  },
  {
    moleculeName: "Lactic Acid",
    smilesStructure: "CC(C(=O)O)O",
    molecularWeight: 90.08,
    categoryUsage: "Food additive/Metabolite",
  },
  {
    moleculeName: "Limonene",
    smilesStructure: "CC1=CCC(CC1)C(=C)C",
    molecularWeight: 136.23,
    categoryUsage: "Flavoring/Fragrance",
  },
  {
    moleculeName: "Methanol",
    smilesStructure: "CO",
    molecularWeight: 32.04,
    categoryUsage: "Solvent/Fuel",
  },
  {
    moleculeName: "Morphine",
    smilesStructure: "CN1CCC23C4C1CC(C2C3O)OC5=CC=CC=C45",
    molecularWeight: 285.34,
    categoryUsage: "Pain reliever/Opiate",
  },
  {
    moleculeName: "Nicotine",
    smilesStructure: "CN1CCCC1C2=CN=CC=C2",
    molecularWeight: 162.23,
    categoryUsage: "Stimulant",
  },
  {
    moleculeName: "Penicillin",
    smilesStructure: "CC1(C2C(C(C(O2)N1C(=O)COC(=O)C)C)S)C=O",
    molecularWeight: 334.39,
    categoryUsage: "Antibiotic",
  },
  {
    moleculeName: "Phenol",
    smilesStructure: "C1=CC=C(C=C1)O",
    molecularWeight: 94.11,
    categoryUsage: "Antiseptic/Disinfectant",
  },
  {
    moleculeName: "Propane",
    smilesStructure: "CCC",
    molecularWeight: 44.1,
    categoryUsage: "Fuel/Gas",
  },
  {
    moleculeName: "Pyridine",
    smilesStructure: "C1=CC=NC=C1",
    molecularWeight: 79.1,
    categoryUsage: "Solvent/Pharmaceutical",
  },
  {
    moleculeName: "Resveratrol",
    smilesStructure: "C1=CC(=CC=C1C=CC2=CC(=C(C=C2)O)O)O",
    molecularWeight: 228.24,
    categoryUsage: "Antioxidant/Nutraceutical",
  },
  {
    moleculeName: "Serotonin",
    smilesStructure: "C1=CC2=C(C=C1)NC=C2CCN",
    molecularWeight: 176.22,
    categoryUsage: "Neurotransmitter",
  },
  {
    moleculeName: "Sodium Bicarbonate",
    smilesStructure: "C(=O)(O)[O-].[Na+]",
    molecularWeight: 84.01,
    categoryUsage: "Baking soda",
  },
  {
    moleculeName: "Sodium Chloride",
    smilesStructure: "[Na+].[Cl-]",
    molecularWeight: 58.44,
    categoryUsage: "Table salt",
  },
  {
    moleculeName: "Sulfuric Acid",
    smilesStructure: "O=S(=O)(O)O",
    molecularWeight: 98.08,
    categoryUsage: "Battery acid/Industrial use",
  },
  {
    moleculeName: "Thymine",
    smilesStructure: "CC1=CNC(=O)NC1=O",
    molecularWeight: 126.11,
    categoryUsage: "DNA base/Nucleotide",
  },
  {
    moleculeName: "Toluene",
    smilesStructure: "CC1=CC=CC=C1",
    molecularWeight: 92.14,
    categoryUsage: "Industrial solvent",
  },
  {
    moleculeName: "Urea",
    smilesStructure: "C(=O)(N)N",
    molecularWeight: 60.06,
    categoryUsage: "Fertilizer/Skincare",
  },
  {
    moleculeName: "Uric Acid",
    smilesStructure: "C1=NC2=C(N1)C(=O)N(C(=O)N2)O",
    molecularWeight: 168.11,
    categoryUsage: "Biological/Metabolism",
  },
  {
    moleculeName: "Valine",
    smilesStructure: "CC(C)C(C(=O)O)N",
    molecularWeight: 117.15,
    categoryUsage: "Essential amino acid",
  },
  {
    moleculeName: "Vanillin",
    smilesStructure: "COC1=CC=C(C=C1O)C=O",
    molecularWeight: 152.15,
    categoryUsage: "Flavoring agent",
  },
  {
    moleculeName: "Vitamin C",
    smilesStructure: "C(C(C1C(C(C(=O)O1)O)O)O)O",
    molecularWeight: 176.12,
    categoryUsage: "Antioxidant/Nutrient",
  },
  {
    moleculeName: "Vitamin D3",
    smilesStructure: "CC(CCC(C)C1CCC2C1(CCC3C2CCC4=CC(=O)CCC34C)C)O",
    molecularWeight: 384.64,
    categoryUsage: "Nutrient/Bone health",
  },
  {
    moleculeName: "Warfarin",
    smilesStructure: "CC(=O)C1=CC=C(C=C1)C2=C(O)C=CC(=O)C2",
    molecularWeight: 308.33,
    categoryUsage: "Anticoagulant",
  },
  {
    moleculeName: "Xylene",
    smilesStructure: "CC1=CC=CC=C1C",
    molecularWeight: 106.17,
    categoryUsage: "Solvent/Industrial chemical",
  },
  {
    moleculeName: "Xanthine",
    smilesStructure: "C1=NC2=C(N1)C(=O)NC(=O)N2",
    molecularWeight: 152.11,
    categoryUsage: "Purine base/Metabolism",
  },
  {
    moleculeName: "Yohimbine",
    smilesStructure:
      "CN1CC[C@@]23C4=C5C=CC(O)=C4O[C@H]2[C@@H](O)C=C[C@H]3C1=C5",
    molecularWeight: 354.45,
    categoryUsage: "Herbal medicine/Aphrodisiac",
  },
  {
    moleculeName: "Zinc Oxide",
    smilesStructure: "O=[Zn]",
    molecularWeight: 81.38,
    categoryUsage: "Skin protection/Sunscreen",
  },
  {
    moleculeName: "Zidovudine",
    smilesStructure: "CC1=CN(C(=O)NC1=O)C2C(C(C(O2)CO)O)N=N",
    molecularWeight: 267.24,
    categoryUsage: "Antiviral (HIV medication)",
  },
  {
    moleculeName: "Zolpidem",
    smilesStructure: "CC1=NN(C2=CC=CC=C12)C3=NC=CC=C3C",
    molecularWeight: 307.39,
    categoryUsage: "Sedative/Hypnotic",
  },
];

const TableOne = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMolecules, setFilteredMolecules] = useState(moleculeBank);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true); // ← new loading state

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filteredData = moleculeBank.filter((molecule) =>
      molecule.moleculeName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredMolecules(filteredData);
  }, [searchQuery]);

  if (initialLoad) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <ChemicalLoader />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-[#181818] dark:bg-[#181818] sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Molecules
      </h4>

      <input
        type="search"
        placeholder="Search molecule"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-gray-300 text-gray-700 placeholder-gray-400 dark:border-gray-600 dark:placeholder-gray-500 text-md mb-4 w-full rounded-lg border bg-white px-4 py-3 shadow-sm outline-none focus:border-primary focus:ring-primary dark:bg-[#181818] dark:text-white"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-lg bg-gray-2 dark:bg-[#121212] sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Molecule name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Smile Structure Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Molecular Weights (g/mol)
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category Usage
            </h5>
          </div>
        </div>

        {filteredMolecules.map((molecule, key) => (
          //   <div
          //     className={`grid grid-cols-3 sm:grid-cols-4 ${
          //       key === filteredMolecules.length - 1
          //         ? ""
          //         : "border-b border-stroke dark:border-strokedark"
          //     }`}
          //     key={key}
          //   >
          <div
            className={`group relative grid grid-cols-3 sm:grid-cols-4 ${
              key === filteredMolecules.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.moleculeName}
              </p>
            </div>

            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <MoleculeStructure
                  id={`${key}`}
                  structure={molecule.smilesStructure}
                />
              </div>
              {/* <div className="group relative w-fit flex-shrink-0">
                <MoleculeStructure
                  id={`${key}`}
                  structure={molecule.smilesStructure}
                />
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(molecule.smilesStructure)
                  }
                  className="absolute bottom-1 right-1 hidden items-center rounded bg-black bg-opacity-80 px-2 py-1 text-xs text-white shadow-md group-hover:flex"
                >
                  Copy
                </button>
              </div> */}
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.molecularWeight}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {molecule.categoryUsage}
              </p>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(molecule.smilesStructure);
                setCopiedIndex(key);
                setTimeout(() => setCopiedIndex(null), 1500); // hide tick after 1.5s
              }}
              className="absolute bottom-2 right-2 hidden items-center rounded bg-black bg-opacity-80 px-2 py-1 text-xs text-white shadow-md group-hover:flex"
            >
              {copiedIndex === key ? "✔ Copied" : "Copy SMILES"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
