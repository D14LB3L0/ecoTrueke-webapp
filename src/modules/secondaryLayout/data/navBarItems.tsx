import { User } from "lucide-react";
import { INavBarItem } from "../components/NavBar";


const navBarItems = (): INavBarItem[] => [
    {
        key: 'profile',
        name: 'perfil',
        icon: <User size={16} />,
        href: '/dashboard/profile'
    },
    {
        key: 'abc',
        name: 'perfil',
        icon: <User size={16} />,
        href: 'asdas'
    },
]

export default navBarItems;