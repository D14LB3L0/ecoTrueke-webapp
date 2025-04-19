import { Link } from "react-router-dom"
import { SearchBar } from "../../../components/ui/search-bar"
import { User } from "lucide-react"
import { Dropdown, IDropdown } from "../../../components/DropDown"
import { NotificationBell } from "./Notification"
import { useNotification } from "../hooks/useNotification"
import { useSearchBar } from "../hooks/useSearchBar"


export interface INavBar {
    isLoggedIn: boolean,
    dropDownItems: IDropdown[]
}

export const NavBar = ({
    isLoggedIn,
    dropDownItems
}: INavBar) => {

    const { query, setQuery, handleSearch } = useSearchBar();
    const { notifications, unreadCount, markAllAsRead, markAsRead } = useNotification();

    return (
        <div className="min-w-screen min-h-[106px]">
            <div className="flex justify-center items-center text-white bg-primary min-h-[36px] text-sm pl-8 pr-8 pt-2 pb-2">
                <p>Un nuevo destino para tus cosas. Una nueva historia para ti. ¡Truekea ahora!</p>
            </div>
            <div className="p-8 flex justify-center items-center w-full gap-8 sm:gap-32 transition-all">
                <Link to={'/home'}>
                    <div className="max-w-[92px]">
                        <img src="/auth/logo-horizontal.webp" alt="EcoTueke logo" />
                    </div>
                </Link>

                <div className="min-w-[224px] w-[440px]">
                    <SearchBar placeholder="¿Qué estas buscando?" handleSearch={handleSearch} query={query} setQuery={setQuery} />
                </div>

                <div>
                    {isLoggedIn ? (
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex justify-center items-center gap-1">
                                <User size={20} />
                                <Dropdown items={dropDownItems} />
                            </div>
                            <div className="flex justify-center items-center">
                                <NotificationBell notifications={notifications} unreadCount={unreadCount} markAllAsRead={markAllAsRead} markAsRead={markAsRead} />
                            </div>

                        </div>
                    ) : (
                        <Link to="/auth/login">
                            <User className="cursor-pointer hover:text-green-800" />
                        </Link>
                    )}
                </div>

            </div>
        </div>
    )
}
