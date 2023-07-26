import React from "react";
import NavLink from "./NavLink";
import { NavListProps } from "./NavList.types";

export default function NavList({ links }: NavListProps) {
  return (
    <ul className="lg:gap-16 gap-8  items-center hidden sm:flex">
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </ul>
  );
}
