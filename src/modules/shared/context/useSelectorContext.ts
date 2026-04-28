"use client";

import { Context as ReactContext, useContext } from "react";

export const useContextSelector = <T, R>(
  Context: ReactContext<T | null>,
  name: string,
  selector: (state: T) => R
): R => {
  const value = useContext(Context);
  if (value === null) {
    throw new Error(`use${name}Selector must be used inside ${name}Provider`);
  }
  return selector(value);
};
