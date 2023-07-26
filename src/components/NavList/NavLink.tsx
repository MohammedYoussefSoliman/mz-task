import React from "react";
import Link from "next/link";

import { NavLink } from "./NavList.types";

export default function NavLink({ label, href }: NavLink) {
  return (
    <li>
      <Link className="text-rose-100 font-light text-normal" href={href}>
        {label}
      </Link>
    </li>
  );
}
