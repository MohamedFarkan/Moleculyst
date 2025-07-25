"use client";
import dynamic from "next/dynamic";
import React from "react";

import CTACard from "./components/CTACard";
import {
  MessageCircle,
  Network,
  SearchIcon,
  MessageCircleMore,
} from "lucide-react";
import { DiAtom } from "react-icons/di";
import MolecularWeightCalculator from "./components/MolecularWeightCalculator";

const DashboardCardMap = dynamic(
  () => import("@/components/Dashboard/components/DashboardCardMap"),
  {
    ssr: false,
  },
);

// const DashboardCardChat = dynamic(
//   () => import("@/components/Dashboard/components/DashboardCardChat"),
//   {
//     ssr: false,
//   },
// );

const Index: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <CTACard
          subtitle="get access to more molecules"
          title="Molecule Bank"
          url="/molecule-bank"
        >
          <DiAtom className="size-10 text-blue-500" />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Generate Molecule"
          url="/model"
        >
          <Network className="text-green-500" />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Search Compounds"
          url="/research"
        >
          <SearchIcon className="text-pink-500" />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Collaborative Research"
          url="/message"
        >
          <MessageCircleMore className="text-purple-500" />
        </CTACard>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <DashboardCardChat /> */}
        <DashboardCardMap />
        <MolecularWeightCalculator />
      </div>
    </>
  );
};

export default Index;
