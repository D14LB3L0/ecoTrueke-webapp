import { LogOut, Box, User, LayoutDashboard } from "lucide-react";
import { IDropdown } from "@/components/DropDownUser";

export interface IDropdownItem {
  handleLogout: () => void
}

export const dropDownItems = ({
  handleLogout
}: IDropdownItem): IDropdown[] => [
    {
      key: "profile",
      name: "Mi Perfil",
      href: "/al perfil del usuario",
      icon: <User size={16} />,
    },
    {
      key: 'dashboard',
      name: 'Dashboard',
      icon: <LayoutDashboard size={16} />,
      href: '/dashboard'
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
