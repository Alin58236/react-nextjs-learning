"use client"
import Link from "next/link";
import React from "react";
import Logo from "./Logo";  
import { usePathname } from "next/navigation";


const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {

  const activePathname=usePathname(); // This will trigger a re-render on route change, ensuring the active link is updated

  console.log("Active Pathname:", activePathname); // Debugging log to check the active pathname

  return (
    <header className="flex items-center justify-between border-b border-white/[10%] h-14 md:px-9 px-3">
      <Logo />

<nav >
    <ul className="flex gap-x-6 text-sm">
    {routes.map((route) => (
      <li key={route.path}
        className={activePathname === route.path ? "text-white" : "text-white/40 hover:text-white transition-colors"}
      >
        <Link href={route.path} className= "text-white/40 hover:text-white transition-colors">
          {route.name}
        </Link>
      </li>
    ))}
  </ul>

</nav>
      
    </header>
  );
};

export default Header;
