export type NavLink = {
  type: "link";
  title: string;
  href: string;
  key: string;
};

export type NavGroupItem = {
  title: string;
  href: string;
  key: string;
};

export type NavGroup = {
  type: "group";
  title: string;
  items: NavGroupItem[];
  href: string;
  key: string;
};

export type NavSection = NavLink | NavGroup;

