import Link from "next/link";
import React from "react";
import Logo from "./Logo";  


const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/[10%] h-14 md:px-9 px-3">
      <Logo />

<nav >
    <ul className="flex gap-x-6 text-sm">
    {routes.map((route) => (
      <li key={route.path}>
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
