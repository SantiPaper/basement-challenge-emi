import ropa from "./ropa.json";
import { Ropa } from "./types";

export const getRopa = (): Promise<Ropa[]> => {
  return Promise.resolve(ropa.map((ropa) => ropa));
};
