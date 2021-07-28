import { createContext } from "react";

const initialState = {
  first: "limo",
  last: "sum",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
