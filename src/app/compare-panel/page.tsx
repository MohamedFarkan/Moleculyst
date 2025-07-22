"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import { Plus, GitCompareArrows } from "lucide-react";

type Molecule = {
  name: string;
  formula: string;
  weight: number;
  polarity: string;
  boilingPoint: string; // in °C
  meltingPoint: string; // in °C
  stateAtRoomTemp: string; // Solid, Liquid, Gas
  density: string; // g/cm³
  structureType: string; // e.g. Linear, Bent
  solubility: string;
  category: string;
};

// Mock data for demo purposes
const getMoleculeData = (query: string): Molecule | null => {
  const db: Record<string, Molecule> = {
    h2o: {
      name: "Water",
      formula: "H2O",
      weight: 18.02,
      polarity: "Polar",
      boilingPoint: "100°C",
      meltingPoint: "0°C",
      stateAtRoomTemp: "Liquid",
      density: "1.00 g/cm³",
      structureType: "Bent",
      solubility: "Soluble",
      category: "Inorganic Compound",
    },
    ch4: {
      name: "Methane",
      formula: "CH4",
      weight: 16.04,
      polarity: "Non-polar",
      boilingPoint: "-161.5°C",
      meltingPoint: "-182.5°C",
      stateAtRoomTemp: "Gas",
      density: "0.656 g/L",
      structureType: "Tetrahedral",
      solubility: "Slightly Soluble",
      category: "Alkane",
    },
    co2: {
      name: "Carbon Dioxide",
      formula: "CO2",
      weight: 44.01,
      polarity: "Non-polar",
      boilingPoint: "-78.5°C (sublimes)",
      meltingPoint: "-56.6°C",
      stateAtRoomTemp: "Gas",
      density: "1.98 g/L",
      structureType: "Linear",
      solubility: "Soluble",
      category: "Oxide",
    },
    nh3: {
      name: "Ammonia",
      formula: "NH3",
      weight: 17.03,
      polarity: "Polar",
      boilingPoint: "-33.34°C",
      meltingPoint: "-77.73°C",
      stateAtRoomTemp: "Gas",
      density: "0.73 g/L",
      structureType: "Trigonal Pyramidal",
      solubility: "Highly Soluble",
      category: "Inorganic Compound",
    },
    nacl: {
      name: "Sodium Chloride",
      formula: "NaCl",
      weight: 58.44,
      polarity: "Ionic",
      boilingPoint: "1465°C",
      meltingPoint: "801°C",
      stateAtRoomTemp: "Solid",
      density: "2.16 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Highly Soluble",
      category: "Salt",
    },
    c6h12o6: {
      name: "Glucose",
      formula: "C6H12O6",
      weight: 180.16,
      polarity: "Polar",
      boilingPoint: "Decomposes",
      meltingPoint: "146°C",
      stateAtRoomTemp: "Solid",
      density: "1.54 g/cm³",
      structureType: "Ring (Cyclic)",
      solubility: "Highly Soluble",
      category: "Monosaccharide",
    },
    o2: {
      name: "Oxygen",
      formula: "O2",
      weight: 32.0,
      polarity: "Non-polar",
      boilingPoint: "-183°C",
      meltingPoint: "-218.8°C",
      stateAtRoomTemp: "Gas",
      density: "1.43 g/L",
      structureType: "Linear",
      solubility: "Slightly Soluble",
      category: "Element",
    },
    hcl: {
      name: "Hydrogen Chloride",
      formula: "HCl",
      weight: 36.46,
      polarity: "Polar",
      boilingPoint: "-85°C",
      meltingPoint: "-114.2°C",
      stateAtRoomTemp: "Gas",
      density: "1.49 g/L",
      structureType: "Linear",
      solubility: "Highly Soluble",
      category: "Acid",
    },
    h2so4: {
      name: "Sulfuric Acid",
      formula: "H2SO4",
      weight: 98.08,
      polarity: "Polar",
      boilingPoint: "337°C",
      meltingPoint: "10°C",
      stateAtRoomTemp: "Liquid",
      density: "1.83 g/cm³",
      structureType: "Tetrahedral",
      solubility: "Highly Soluble",
      category: "Acid",
    },
    c2h5oh: {
      name: "Ethanol",
      formula: "C2H5OH",
      weight: 46.07,
      polarity: "Polar",
      boilingPoint: "78.37°C",
      meltingPoint: "-114.1°C",
      stateAtRoomTemp: "Liquid",
      density: "0.789 g/cm³",
      structureType: "Tetrahedral (around C)",
      solubility: "Highly Soluble",
      category: "Alcohol",
    },
    c6h6: {
      name: "Benzene",
      formula: "C6H6",
      weight: 78.11,
      polarity: "Non-polar",
      boilingPoint: "80.1°C",
      meltingPoint: "5.5°C",
      stateAtRoomTemp: "Liquid",
      density: "0.879 g/cm³",
      structureType: "Hexagonal Planar",
      solubility: "Slightly Soluble",
      category: "Aromatic Hydrocarbon",
    },
    ch3cooh: {
      name: "Acetic Acid",
      formula: "CH3COOH",
      weight: 60.05,
      polarity: "Polar",
      boilingPoint: "118°C",
      meltingPoint: "16.6°C",
      stateAtRoomTemp: "Liquid",
      density: "1.049 g/cm³",
      structureType: "Trigonal Planar (around C in COOH)",
      solubility: "Highly Soluble",
      category: "Carboxylic Acid",
    },
    hno3: {
      name: "Nitric Acid",
      formula: "HNO3",
      weight: 63.01,
      polarity: "Polar",
      boilingPoint: "83°C",
      meltingPoint: "-42°C",
      stateAtRoomTemp: "Liquid",
      density: "1.51 g/cm³",
      structureType: "Trigonal Planar",
      solubility: "Highly Soluble",
      category: "Acid",
    },
    naoh: {
      name: "Sodium Hydroxide",
      formula: "NaOH",
      weight: 39.997,
      polarity: "Ionic",
      boilingPoint: "1388°C",
      meltingPoint: "318°C",
      stateAtRoomTemp: "Solid",
      density: "2.13 g/cm³",
      structureType: "Orthorhombic Crystal",
      solubility: "Highly Soluble",
      category: "Base",
    },
    ccl4: {
      name: "Carbon Tetrachloride",
      formula: "CCl4",
      weight: 153.82,
      polarity: "Non-polar",
      boilingPoint: "76.72°C",
      meltingPoint: "-22.92°C",
      stateAtRoomTemp: "Liquid",
      density: "1.59 g/cm³",
      structureType: "Tetrahedral",
      solubility: "Slightly Soluble",
      category: "Halocarbon",
    },
    n2: {
      name: "Nitrogen",
      formula: "N2",
      weight: 28.01,
      polarity: "Non-polar",
      boilingPoint: "-195.8°C",
      meltingPoint: "-210°C",
      stateAtRoomTemp: "Gas",
      density: "1.251 g/L",
      structureType: "Linear",
      solubility: "Slightly Soluble",
      category: "Element",
    },
    ch3oh: {
      name: "Methanol",
      formula: "CH3OH",
      weight: 32.04,
      polarity: "Polar",
      boilingPoint: "64.7°C",
      meltingPoint: "-97.6°C",
      stateAtRoomTemp: "Liquid",
      density: "0.792 g/cm³",
      structureType: "Tetrahedral (around C)",
      solubility: "Highly Soluble",
      category: "Alcohol",
    },
    h2: {
      name: "Hydrogen",
      formula: "H2",
      weight: 2.016,
      polarity: "Non-polar",
      boilingPoint: "-252.87°C",
      meltingPoint: "-259.16°C",
      stateAtRoomTemp: "Gas",
      density: "0.08988 g/L",
      structureType: "Linear",
      solubility: "Slightly Soluble",
      category: "Element",
    },
    c6h14: {
      name: "Hexane",
      formula: "C6H14",
      weight: 86.18,
      polarity: "Non-polar",
      boilingPoint: "68.7°C",
      meltingPoint: "-95°C",
      stateAtRoomTemp: "Liquid",
      density: "0.655 g/cm³",
      structureType: "Linear (chain)",
      solubility: "Insoluble",
      category: "Alkane",
    },
    kcl: {
      name: "Potassium Chloride",
      formula: "KCl",
      weight: 74.55,
      polarity: "Ionic",
      boilingPoint: "1420°C",
      meltingPoint: "770°C",
      stateAtRoomTemp: "Solid",
      density: "1.98 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Highly Soluble",
      category: "Salt",
    },
    co: {
      name: "Carbon Monoxide",
      formula: "CO",
      weight: 28.01,
      polarity: "Polar",
      boilingPoint: "-191.5°C",
      meltingPoint: "-205.02°C",
      stateAtRoomTemp: "Gas",
      density: "1.25 g/L",
      structureType: "Linear",
      solubility: "Slightly Soluble",
      category: "Oxide",
    },
    ch3cn: {
      name: "Acetonitrile",
      formula: "CH3CN",
      weight: 41.05,
      polarity: "Polar",
      boilingPoint: "81.6°C",
      meltingPoint: "-45°C",
      stateAtRoomTemp: "Liquid",
      density: "0.786 g/cm³",
      structureType: "Linear (C-C-N)",
      solubility: "Highly Soluble",
      category: "Nitrile",
    },
    so2: {
      name: "Sulfur Dioxide",
      formula: "SO2",
      weight: 64.07,
      polarity: "Polar",
      boilingPoint: "-10°C",
      meltingPoint: "-75.5°C",
      stateAtRoomTemp: "Gas",
      density: "2.927 g/L",
      structureType: "Bent",
      solubility: "Soluble",
      category: "Oxide",
    },
    c3h8: {
      name: "Propane",
      formula: "C3H8",
      weight: 44.1,
      polarity: "Non-polar",
      boilingPoint: "-42.09°C",
      meltingPoint: "-187.7°C",
      stateAtRoomTemp: "Gas",
      density: "1.83 g/L",
      structureType: "Linear (chain)",
      solubility: "Slightly Soluble",
      category: "Alkane",
    },
    "ca(oh)2": {
      name: "Calcium Hydroxide",
      formula: "Ca(OH)2",
      weight: 74.09,
      polarity: "Ionic",
      boilingPoint: "Decomposes",
      meltingPoint: "580°C",
      stateAtRoomTemp: "Solid",
      density: "2.24 g/cm³",
      structureType: "Hexagonal Crystal",
      solubility: "Slightly Soluble",
      category: "Base",
    },
    hcn: {
      name: "Hydrogen Cyanide",
      formula: "HCN",
      weight: 27.03,
      polarity: "Polar",
      boilingPoint: "25.7°C",
      meltingPoint: "-13.4°C",
      stateAtRoomTemp: "Liquid",
      density: "0.687 g/cm³",
      structureType: "Linear",
      solubility: "Highly Soluble",
      category: "Acid",
    },
    ch2o: {
      name: "Formaldehyde",
      formula: "CH2O",
      weight: 30.03,
      polarity: "Polar",
      boilingPoint: "-19°C",
      meltingPoint: "-15°C",
      stateAtRoomTemp: "Gas",
      density: "0.815 g/cm³ (liquid)",
      structureType: "Trigonal Planar",
      solubility: "Highly Soluble",
      category: "Aldehyde",
    },
    sio2: {
      name: "Silicon Dioxide",
      formula: "SiO2",
      weight: 60.08,
      polarity: "Non-polar (overall crystal)",
      boilingPoint: "2950°C",
      meltingPoint: "1710°C",
      stateAtRoomTemp: "Solid",
      density: "2.65 g/cm³",
      structureType: "Tetrahedral (network solid)",
      solubility: "Insoluble",
      category: "Oxide",
    },
    c2h2: {
      name: "Acetylene",
      formula: "C2H2",
      weight: 26.04,
      polarity: "Non-polar",
      boilingPoint: "-84°C (sublimes)",
      meltingPoint: "-80.8°C",
      stateAtRoomTemp: "Gas",
      density: "1.097 g/L",
      structureType: "Linear",
      solubility: "Slightly Soluble",
      category: "Alkyne",
    },
    c2h4: {
      name: "Ethylene",
      formula: "C2H4",
      weight: 28.05,
      polarity: "Non-polar",
      boilingPoint: "-103.7°C",
      meltingPoint: "-169.2°C",
      stateAtRoomTemp: "Gas",
      density: "1.178 g/L",
      structureType: "Trigonal Planar",
      solubility: "Slightly Soluble",
      category: "Alkene",
    },
    ch3coch3: {
      name: "Acetone",
      formula: "CH3COCH3",
      weight: 58.08,
      polarity: "Polar",
      boilingPoint: "56°C",
      meltingPoint: "-94.9°C",
      stateAtRoomTemp: "Liquid",
      density: "0.789 g/cm³",
      structureType: "Trigonal Planar (around carbonyl C)",
      solubility: "Highly Soluble",
      category: "Ketone",
    },
    c12h22o11: {
      name: "Sucrose",
      formula: "C12H22O11",
      weight: 342.3,
      polarity: "Polar",
      boilingPoint: "Decomposes",
      meltingPoint: "186°C",
      stateAtRoomTemp: "Solid",
      density: "1.59 g/cm³",
      structureType: "Disaccharide (complex)",
      solubility: "Highly Soluble",
      category: "Disaccharide",
    },
    fe2o3: {
      name: "Iron(III) Oxide",
      formula: "Fe2O3",
      weight: 159.69,
      polarity: "Ionic",
      boilingPoint: "Decomposes",
      meltingPoint: "1565°C",
      stateAtRoomTemp: "Solid",
      density: "5.24 g/cm³",
      structureType: "Crystalline",
      solubility: "Insoluble",
      category: "Metal Oxide",
    },
    cuso4: {
      name: "Copper(II) Sulfate",
      formula: "CuSO4",
      weight: 159.61,
      polarity: "Ionic",
      boilingPoint: "Decomposes",
      meltingPoint: "Decomposes (anhydrous 110-200°C)",
      stateAtRoomTemp: "Solid",
      density: "3.603 g/cm³ (anhydrous)",
      structureType: "Orthorhombic Crystal",
      solubility: "Highly Soluble",
      category: "Salt",
    },
    ag: {
      name: "Silver",
      formula: "Ag",
      weight: 107.87,
      polarity: "Metallic",
      boilingPoint: "2162°C",
      meltingPoint: "961.78°C",
      stateAtRoomTemp: "Solid",
      density: "10.49 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Insoluble",
      category: "Metal",
    },
    au: {
      name: "Gold",
      formula: "Au",
      weight: 196.97,
      polarity: "Metallic",
      boilingPoint: "2856°C",
      meltingPoint: "1064.18°C",
      stateAtRoomTemp: "Solid",
      density: "19.3 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Insoluble",
      category: "Metal",
    },
    pb: {
      name: "Lead",
      formula: "Pb",
      weight: 207.2,
      polarity: "Metallic",
      boilingPoint: "1749°C",
      meltingPoint: "327.5°C",
      stateAtRoomTemp: "Solid",
      density: "11.34 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Insoluble",
      category: "Metal",
    },
    pt: {
      name: "Platinum",
      formula: "Pt",
      weight: 195.08,
      polarity: "Metallic",
      boilingPoint: "3825°C",
      meltingPoint: "1768.3°C",
      stateAtRoomTemp: "Solid",
      density: "21.45 g/cm³",
      structureType: "Cubic Crystal",
      solubility: "Insoluble",
      category: "Metal",
    },
  };

  return db[query.toLowerCase()] || null;
};

const MoleculeCompareTable: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>(["", ""]);
  const [results, setResults] = useState<Molecule[]>([]);

  const handleInputChange = (value: string, index: number) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const addInputField = () => setInputs([...inputs, ""]);

  const handleSubmit = () => {
    const found = inputs
      .map(getMoleculeData)
      .filter((mol): mol is Molecule => mol !== null);
    setResults(found);
  };

  return (
    <DefaultLayout>
      <div
        style={{
          padding: "16px",
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "14px",
          //background: "#f1f5f9",
        }}
      >
        <h3
          style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "21px" }}
        >
          🔄 Compare Molecules
        </h3>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "12px",
            flexWrap: "wrap", // optional: wrap on small screens
          }}
        >
          {inputs.map((val, i) => (
            <input
              key={i}
              type="text"
              value={val}
              placeholder="Enter formula or name (e.g. H2O)"
              onChange={(e) => handleInputChange(e.target.value, i)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                flex: "1 1 150px", // grow and shrink, min width 150px
                minWidth: "150px", // ensures inputs don't get too small
                boxSizing: "border-box",
                background: "#fff",
              }}
            />
          ))}
        </div>

        <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
          <button
            onClick={addInputField}
            style={{
              marginRight: 8,
            }}
            className="inline-flex items-center gap-0 rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
          >
            <Plus />
            Add Input
          </button>
          <button
            onClick={handleSubmit}
            style={
              {
                // border: "1px solid #ccc",
              }
            }
            className="inline-flex items-center gap-1 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            <GitCompareArrows />
            Compare
          </button>
        </div>

        {results.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={cellStyle}>Property</th>
                  {results.map((mol, i) => (
                    <th key={i} style={cellStyle}>
                      {mol.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>Formula</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.formula}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Molecular Weight</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.weight}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Polarity</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.polarity}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Boiling Point</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.boilingPoint}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Melting Point</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.meltingPoint}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>State at Room Temp</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.stateAtRoomTemp}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Density</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.density}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Structure Type</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.structureType}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Solubility in Water</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.solubility}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={cellStyle}>Category</td>
                  {results.map((mol, i) => (
                    <td key={i} style={cellStyle}>
                      {mol.category}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

const cellStyle: React.CSSProperties = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "left",
};

export default MoleculeCompareTable;
