import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "JOC",
    "ARXIU HISTÒRIC",
    "PREMIS",
    "PERFIL",
    "CLASSIFICACIÓ",
    "FAQ'S",
    "-",
    "TANCAR SESSIÓ",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-skin w-5 h-0 hover:cursor-pointer ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary"
        />
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "primary"
                  : "primary"
              }
              href="#"
              size="sm"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
