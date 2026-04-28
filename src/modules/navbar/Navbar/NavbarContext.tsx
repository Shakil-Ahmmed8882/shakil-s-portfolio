"use client";

import { makeSelectorContext } from "@/modules/shared/context/makeSelectorContext";
import { useContextSelector } from "@/modules/shared/context/useSelectorContext";
import { useNavbarContextHelper } from "./useNavbarContextHelper";
import type { TCommonProps } from "@/types/global.type";

type TNavbar = ReturnType<typeof useNavbarContextHelper>;

export const { Context, Provider } = makeSelectorContext<TNavbar>("Navbar");

export const NavbarProvider = (props: TCommonProps) => {
  const { children } = props;
  return <Provider value={useNavbarContextHelper()}>{children}</Provider>;
};

export const useNavbarSelector = () => ({
  scrolled: useContextSelector(Context, "Navbar", (s) => s.scrolled),
  active: useContextSelector(Context, "Navbar", (s) => s.active),
  open: useContextSelector(Context, "Navbar", (s) => s.open),
  setOpen: useContextSelector(Context, "Navbar", (s) => s.setOpen),
});
