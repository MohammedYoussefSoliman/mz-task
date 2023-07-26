import React from "react";
import Image from "next/image";
import List from "./List";

export default function SocialLinks() {
  return (
    <List
      links={[
        {
          href: "https://www.linkedin.com/",
          children: (
            <Image
              src="/icons/price_change.svg"
              width={24}
              height={24}
              alt="social icon"
            />
          ),
        },

        {
          href: "https://www.linkedin.com/",
          children: (
            <Image
              src="/icons/notifications.svg"
              width={24}
              height={24}
              alt="social icon"
            />
          ),
        },
        {
          href: "https://www.linkedin.com/",
          children: (
            <Image
              src="/icons/favorite_black.svg"
              width={24}
              height={24}
              alt="social icon"
            />
          ),
        },
      ]}
    />
  );
}
