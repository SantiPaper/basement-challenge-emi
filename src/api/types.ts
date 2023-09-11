export type Ropa = {
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  options: Option[];
};

export type Option = {
  label: string;
  values: Size[];
};

export type Size = "S" | "M" | "L" | "XL";
