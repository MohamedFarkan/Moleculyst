"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import SidebarItem from "./SidebarItem";

import {
  LayoutGrid,
  LayoutDashboard,
  Atom,
  Network,
  Microscope,
  Settings,
  MessageSquareText,
  ChevronLeft,
  Icon,
  MenuIcon,
  NotebookPen,
  TableCellsMerge,
  Bot,
  GitCompareArrows,
} from "lucide-react";
import useLocalStorage from "@/hook/useLocalStorage";
import { SiMoleculer } from "react-icons/si";
import { BiFoodTag } from "react-icons/bi";

import { group } from "console";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "",
    menuItems: [
      {
        icon: <LayoutDashboard size={25} />,
        label: "Dashboard",
        route: "/",
      },
      {
        icon: <SiMoleculer size={25} />,
        label: "Molecules Bank",
        route: "/molecule-bank",
      },
      {
        icon: <Network size={25} />,
        label: "Model",
        route: "/model",
      },
      {
        icon: <Microscope size={25} />,
        label: "Research",
        route: "/research",
      },
      {
        icon: <TableCellsMerge size={25} />,
        label: "Periodic Table",
        route: "/periodic-table",
      },
      {
        icon: <NotebookPen size={25} />,
        label: "Notes",
        route: "/notes",
      },
      {
        icon: <MessageSquareText size={25} />,
        label: "Messages",
        route: "/message",
      },
      {
        icon: <Bot size={25} />,
        label: "Ask AI",
        route: "/ai-chat",
      },
      {
        icon: <GitCompareArrows size={25} />,
        label: "Compare Molecules",
        route: "/compare-panel",
      },
      {
        icon: <BiFoodTag size={25} />,
        label: "Products Info",
        route: "/product-info",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <Settings size={25} />,
        label: "Settings",
        route: "/settings",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <aside
      className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-[#000000] lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={"/"}>
          <div className="-ml-5 flex flex-row items-center justify-center space-x-2 ">
            {/* <div className="ml-2 rounded-lg bg-[#3c4fe0] p-1"> */}
            <div className="ml-2 rounded-lg p-1">
              <Image
                width={60}
                height={60}
                src={"/images/logo/logo3.png"}
                alt="logo"
                priority
              />
            </div>
            {/* <p className="mt-4 text-xl font-semibold text-white">Moleculyst</p> */}
            <p className="  mt-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-extrabold italic tracking-wide text-transparent">
              Moleculyst
            </p>
          </div>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          className="block lg:hidden"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-transparent  flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                {group.name}
              </h3>
              <ul className="mb-6 flex flex-col gap-2">
                {group.menuItems.map((menuItem, menuIndex) => (
                  <SidebarItem
                    key={menuIndex}
                    item={menuItem}
                    pageName={pageName}
                    setPageName={setPageName}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
