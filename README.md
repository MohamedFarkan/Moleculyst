# 🤖 Introduction

**Moleculyst** is a drug discovery and protein-binding prediction tool built with the latest in machine learning and natural language processing (NLP) technology. Powered by NVIDIA NIM and protein structure prediction models, this project enables users to simulate molecular interactions and predict protein structures.

The platform is designed to help researchers accelerate drug discovery by leveraging cutting-edge AI models for protein folding, docking, and molecular dynamics.

If you're getting started and need assistance or face any bugs, join our active Discord community. It's a place where people help each other out.

---

## ⚙️ Tech Stack

- Next.js  
- TypeScript  
- NVIDIA (for protein structure prediction)  
- Tailwind CSS  
- React Chart.js (for visualizing protein data)  

---

## 🔋 Features

- **Protein Structure Prediction:** Predicts 2D protein structures using NVIDIA models.  
- **Collaborative Research:** Researchers can create groups and collaborate with other researchers online.  
- **Responsive Design:** Ensures seamless experience across all devices, from desktops to mobile.  

---

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git  
- Node.js  
- npm (Node Package Manager)  

### Cloning this Repository

```bash
git clone https://github.com/MohamedFarkan/Moleculyst.git
cd moleculyst
````

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_NVIDIA_API_KEY=your-nvidia-api-key
ABLY_API_KEY='your-ably-api-key'
MONGODB_URL='your-mongodb-url'
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
RESEND_KEY='your-resend-api-key'
```

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## 🧬 Protein Data Processing

This section covers the protein data processing pipeline, including loading protein structure files (e.g., PDB format), performing molecular docking simulations, and visualizing the results.

### Protein Structure Input

Users can upload PDB files for protein structures, which will then be processed by NVIDIA NeMo's protein-folding models.


