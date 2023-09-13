import { Ropa } from "../api/types";

export type AppTypes = {
  cart: Ropa[];
  setCart: React.Dispatch<React.SetStateAction<Ropa[]>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  addCart: (producto: Ropa) => void;
  closeModal: () => void;
};
