import { Control, UseFormWatch } from "react-hook-form";

export type CategoryChild = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  disable_shipping: number;
  image: string;
  circle_icon: string;
};

export type Category = CategoryChild & {
  children: CategoryChild[];
};

export type PropertyOption = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  child: boolean;
};

export type Property = {
  id: number;
  name: string;
  description: string | null;
  slug: string;
  parent: string | null;
  list: boolean;
  type: any;
  value: string;
  other_value: string | null;
  options: PropertyOption[];
};

export type PropertiesProps = {
  properties: Property[];
  control: Control<any>;
  watch: UseFormWatch<any>;
};

export type PropertyProps = {
  property: Property;
  control: Control<any>;
  watch: UseFormWatch<any>;
};
