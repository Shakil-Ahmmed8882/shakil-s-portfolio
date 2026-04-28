import { NavbarProvider } from "./Navbar/NavbarContext";
import { NavbarContent } from "./Navbar/NavbarContent";

export const NavbarLayout = () => {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};
