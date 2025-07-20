"use client";

import React, { useState, useLayoutEffect } from "react";
import Sidebar from "@/components/Sidebar";
//import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Header from "../Header.tsx";
import { Toaster } from "react-hot-toast";
import ChemicalLoader from "@/components/Loader/loader";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data: session, status } = useSession();

  const router = useRouter();

  const pathname = usePathname();

  const publicRoutes = [
    "/auth-page/signin",
    "/auth-page/signup",
    "/verify-email",
    "/reset-password",
    "/forget-password",
    "/periodic-table",
  ];

  useLayoutEffect(() => {
    if (status === "unauthenticated" && !publicRoutes.includes(pathname)) {
      router.push("/auth-page/signin");
    }
  }, [status, router, pathname]);

  if (status === "loading" || (!session && !publicRoutes.includes(pathname))) {
    return <ChemicalLoader />;
  }

  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Toaster position="bottom-right" reverseOrder={false} />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 dark:bg-[#121212] md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
