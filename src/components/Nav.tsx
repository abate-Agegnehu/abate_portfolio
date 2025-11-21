"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }) => (
        <Link
          key={path}
          href={path}
          prefetch={false}
          className={`capitalize font-medium transition-all hover:text-accent ${
            pathname === path ? "text-accent border-b-2 border-accent" : ""
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Nav);
