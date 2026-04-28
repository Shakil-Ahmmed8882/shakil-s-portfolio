"use client";

import { createContext } from "react";

type ProviderProps<T> = {
  value: T;
  children: React.ReactNode;
};

export const makeSelectorContext = <T,>(name: string) => {
  const Context = createContext<T | null>(null);
  Context.displayName = `${name}Context`;

  const Provider = (props: ProviderProps<T>) => {
    const { value, children } = props;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
