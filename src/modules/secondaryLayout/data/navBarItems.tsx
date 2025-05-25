import { User, Box, LayoutDashboard, LogOut, Home } from "lucide-react";
import { INavBar } from "../components/NavBar";

const navBarItems = (): INavBar[] => [
  {
    key: "dashboard",
    name: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    href: "/dashboard",
  },
  {
    key: "profile",
    name: "Perfil",
    icon: <User size={16} />,
    href: "/dashboard/profile",
  },
  {
    key: "my-products",
    name: "Mis productos",
    icon: <Box size={16} />,
    href: "/dashboard/my-products",
  },
  {
    key: "home",
    name: "Ecotrueke    ",
    icon: <Home size={16} />,
    href: "/home",
  },
];

export default navBarItems;
