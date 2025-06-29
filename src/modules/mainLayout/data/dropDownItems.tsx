import { LogOut, User, LayoutDashboard } from "lucide-react";
import { IDropdown } from "@/components/DropDownUser";

export interface IDropdownItem {
  handleLogout: () => void;
}

export const dropDownItems = ({ handleLogout }: IDropdownItem): IDropdown[] => [
  {
    key: "profile",
    name: "Mi Perfil",
    href: "/home/profile/me",
    icon: <User size={16} />,
  },
  {
    key: "dashboard",
    name: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    href: "/dashboard",
  },
  {
    key: "logout",
    name: "Cerrar Sesión",
    icon: <LogOut size={16} />,
    onClick: handleLogout,
  },
];

export default dropDownItems;
