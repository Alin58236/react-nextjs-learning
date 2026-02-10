"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Logo from "./logo";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {
  const activePathname = usePathname(); // This will trigger a re-render on route change, ensuring the active link is updated

  console.log("Active Pathname:", activePathname); // Debugging log to check the active pathname

  return (
    <header className="flex items-center justify-between border-b border-white/[10%] h-14 md:px-9 px-3">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePathname === route.path,
                  "text-white/[50%]": activePathname !== route.path,
                },
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {/* added Motion.div to create animation between link switching states */}
              {activePathname === route.path && (<motion.div layoutId="header-active-link" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>)}
              

            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
