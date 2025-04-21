import { Link } from "react-router-dom"
import { SearchBar } from "../../../components/ui/search-bar"
import { User } from "lucide-react"
import { Dropdown, IDropdown } from "../../../components/dropDown"
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
        <div>
            <div className="p-4 md:p-8 flex flex-col md:flex-row justify-center items-center w-full gap-4 md:gap-32 transition-all">
                <div className="flex items-center justify-between w-full md:w-auto max-w-[448px] md:max-w-none ">
                    <Link to={'/home'}>
                        <div className="min-w-[92px] max-w-[92px]">
                            <img src="/auth/logo-horizontal.webp" alt="EcoTueke logo" />
                        </div>
                    </Link>
                    <div className="md:hidden">
                        {isLoggedIn ? (
                            <div className="flex justify-center items-center gap-4">
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

                <div className="flex justify-center min-w-[224px] w-full md:w-[440px]">
                    <SearchBar placeholder="¿Qué estas buscando?" handleSearch={handleSearch} query={query} setQuery={setQuery} />
                </div>

                <div className="hidden md:block">
                    {isLoggedIn ? (
                        <div className="flex justify-center items-center gap-4">
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
