import React from "react";
import ExternalLink from "@components/ExternalLink";
import { NavListProps } from "./SocialLinks.types";

export default function NavList({ links }: NavListProps) {
  return (
    <ul className="lg:gap-8 gap-4 items-center flex">
      {links.map((link) => (
        <li key={link.href}>
          <ExternalLink href={link.href}>{link.children}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}
