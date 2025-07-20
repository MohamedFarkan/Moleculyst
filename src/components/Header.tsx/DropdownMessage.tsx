import { useState } from "react";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //const [notifying, setNotifying] = useState(true);
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <li className="relative">
      <Link
        href="/message"
        onClick={() => {
          setHasNotification(false);
          //setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        {hasNotification && (
          <span className="absolute -right-0.5 -top-0.5 z-10 h-2 w-2 rounded-full bg-meta-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        )}

        <MessageCircleMore size={20} />
      </Link>
    </li>
  );
};

export default DropdownMessage;
