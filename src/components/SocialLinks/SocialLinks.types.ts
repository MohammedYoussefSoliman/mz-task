export type NavLink = {
  href: string;
  children: React.ReactNode;
};

export type NavListProps = {
  links: NavLink[];
};
