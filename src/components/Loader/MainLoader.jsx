import { Atom } from "lucide-react";

export default function MainChemicalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black">
      <div className="relative h-10 w-10">
        <div className="absolute left-0 top-0 h-2 w-2 animate-ping rounded-full bg-blue-500" />
        <div className="absolute bottom-0 right-0 h-2 w-2 animate-ping rounded-full bg-green-500 delay-200" />
        <div className="bg-red-500 absolute right-0 top-0 h-2 w-2 animate-ping rounded-full delay-300" />
        <div className="absolute bottom-0 left-0 h-2 w-2 animate-ping rounded-full bg-yellow-500 delay-500" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
      </div>
      <Atom className="text-gray-800 h-10 w-10 animate-spin dark:text-white" />
      <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm font-medium">
        Loading compound...
      </p>
    </div>
  );
}
