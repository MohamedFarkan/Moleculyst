"use client";
import React, { useState } from "react";

// Atomic data with name and weight
const atomicData: Record<string, { name: string; weight: number }> = {
  H: { name: "Hydrogen", weight: 1.008 },
  He: { name: "Helium", weight: 4.0026 },
  Li: { name: "Lithium", weight: 6.94 },
  Be: { name: "Beryllium", weight: 9.0122 },
  B: { name: "Boron", weight: 10.81 },
  C: { name: "Carbon", weight: 12.011 },
  N: { name: "Nitrogen", weight: 14.007 },
  O: { name: "Oxygen", weight: 15.999 },
  F: { name: "Fluorine", weight: 18.998 },
  Ne: { name: "Neon", weight: 20.18 },
  Na: { name: "Sodium", weight: 22.99 },
  Mg: { name: "Magnesium", weight: 24.305 },
  Al: { name: "Aluminum", weight: 26.982 },
  Si: { name: "Silicon", weight: 28.085 },
  P: { name: "Phosphorus", weight: 30.974 },
  S: { name: "Sulfur", weight: 32.06 },
  Cl: { name: "Chlorine", weight: 35.45 },
  K: { name: "Potassium", weight: 39.098 },
  Ca: { name: "Calcium", weight: 40.078 },
};

function parseFormula(formula: string): Record<string, number> | null {
  const regex = /([A-Z][a-z]*)(\d*)/g;
  const counts: Record<string, number> = {};
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const element = match[1];
    const count = parseInt(match[2] || "1", 10);

    if (!atomicData[element]) return null;
    counts[element] = (counts[element] || 0) + count;
  }

  return counts;
}

const MolecularWeightCalculator: React.FC = () => {
  const [formula, setFormula] = useState("");
  const [weight, setWeight] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [details, setDetails] = useState<Record<string, number> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormula(value);

    if (!value) {
      setWeight(null);
      setError(null);
      setDetails(null);
      return;
    }

    const parsed = parseFormula(value);
    if (!parsed) {
      setWeight(null);
      setError("Invalid molecular formula");
      setDetails(null);
      return;
    }

    let total = 0;
    for (const element in parsed) {
      total += atomicData[element].weight * parsed[element];
    }

    setWeight(total);
    setDetails(parsed);
    setError(null);
  };

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-[#181818] dark:bg-[#181818] xl:col-span-5">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Molecular Weight Calculator
      </h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Enter a molecular formula like <code>H2O</code> or <code>C6H12O6</code>
      </p>

      <input
        type="text"
        value={formula}
        onChange={handleChange}
        placeholder="e.g. H2O"
        className="w-full rounded border bg-[whitesmoke] px-4 py-2 text-black dark:bg-[#2e2e2e] dark:text-white"
      />

      {error && (
        <p className="text-red-500 dark:text-red-400 mt-2 text-sm">{error}</p>
      )}

      {weight !== null && !error && (
        <>
          <p className="mt-4 text-lg font-medium text-black dark:text-white">
            Molecular Weight:{" "}
            <span className="font-semibold">{weight.toFixed(3)} g/mol</span>
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-black dark:text-white">
              <thead>
                <tr className="border-gray-200 dark:border-gray-700 border-b">
                  <th className="py-1 pr-4 font-medium">Symbol</th>
                  <th className="py-1 pr-4 font-medium">Name</th>
                  <th className="py-1 pr-4 font-medium">Count</th>
                  <th className="py-1 pr-4 font-medium">Atomic Mass</th>
                  <th className="py-1 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(details || {}).map(([element, count]) => (
                  <tr key={element}>
                    <td className="py-1 pr-4">{element}</td>
                    <td className="py-1 pr-4">{atomicData[element].name}</td>
                    <td className="py-1 pr-4">{count}</td>
                    <td className="py-1 pr-4">
                      {atomicData[element].weight.toFixed(3)}
                    </td>
                    <td className="py-1">
                      {(atomicData[element].weight * count).toFixed(3)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MolecularWeightCalculator;
