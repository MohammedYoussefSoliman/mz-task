import React from "react";
import Icon from "@components/Icon";
import List from "./List";

export default function SocialLinks() {
  return (
    <List
      links={[
        {
          href: "https://www.linkedin.com/",
          children: <Icon name="price_change" />,
        },

        {
          href: "https://www.youtube.com/",
          children: <Icon name="notifications" />,
        },
        {
          href: "https://www.facebook.com/",
          children: <Icon name="favorite_black" />,
        },
      ]}
    />
  );
}
