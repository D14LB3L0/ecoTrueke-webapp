import { LogOut, Box, User } from "lucide-react";
import { IDropdown } from "@/components/DropDown";

export interface IDropdownItem {
  handleLogout: () => void
}

export const dropDownItems = ({
  handleLogout
}: IDropdownItem): IDropdown[] => [
    {
      key: "profile",
      name: "Mi Perfil",
      href: "/dashboard/profile",
      icon: <User size={16} />,
    },
    {
      key: "upload",
      name: "Publicar Producto",
      href: "/products/new",
      icon: <Box size={16} />,
    },
    {
      key: "logout",
      name: "Cerrar Sesión",
      icon: <LogOut size={16} />,
      onClick: handleLogout,
    }
  ];

export default dropDownItems;
