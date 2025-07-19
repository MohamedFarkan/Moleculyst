import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moleculyst: A research platform for Pharmacologist",
  description: "The description for moleculyst goes here",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
