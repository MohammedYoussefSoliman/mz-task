import React from "react";
import Container from "@components/Container";
import NavList from "@components/NavList";
import SocialLinks from "@components/SocialLinks";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-l from-rose-900 to-rose-500 w-full h-20 flex  items-center">
      <Container>
        <div className="flex justify-between items-center">
          <NavList
            links={[
              {
                href: "/",
                label: "الرئيسية",
              },
              {
                href: "/classifications",
                label: "التصنيفات",
              },
              {
                href: "/payments",
                label: "مشترياتي",
              },
              {
                href: "/my-account",
                label: "حسابي",
              },
            ]}
          />
          <SocialLinks />
        </div>
      </Container>
    </nav>
  );
}
