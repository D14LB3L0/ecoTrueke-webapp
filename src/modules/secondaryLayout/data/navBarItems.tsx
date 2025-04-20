import { User, Box } from "lucide-react";
import { INavBarItem } from "../components/NavBar";


const navBarItems = (): INavBarItem[] => [
    {
        key: 'profile',
        name: 'Perfil',
        icon: <User size={16} />,
        href: '/dashboard/profile'
    },
    {
        key: 'product',
        name: 'Producto',
        icon: <Box size={16} />,
        href: '/dashboard/product'
    },
]

export default navBarItems;