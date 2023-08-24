export type Ropa = {
  id: string;
  image: string;
  price: number;
  name: string;
  options: Option[];
};

export type Option = {
  label: string;
  values: string[];
};
