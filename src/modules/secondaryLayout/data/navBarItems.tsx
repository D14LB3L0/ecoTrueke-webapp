import { User, Box, LayoutDashboard, LogOut } from "lucide-react";
import { INavBar } from "../components/NavBar";

export interface INavBarItem {
    handleLogout: () => void;
}

const navBarItems = ({
    handleLogout
}: INavBarItem): INavBar[] => [
        {
            key: 'dashboard',
            name: 'Dashboard',
            icon: <LayoutDashboard size={16} />,
            href: '/dashboard'
        },
        {
            key: 'profile',
            name: 'Perfil',
            icon: <User size={16} />,
            href: '/dashboard/profile'
        },
        {
            key: 'my-products',
            name: 'Mis productos',
            icon: <Box size={16} />,
            href: '/dashboard/my-products'
        },
        {
            key: "logout",
            name: "Cerrar Sesión",
            icon: <LogOut size={16} />,
            onClick: handleLogout,
        }
    ];

export default navBarItems;
