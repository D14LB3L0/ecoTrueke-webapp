import { Link } from "react-router-dom"
import { SearchBar } from "../../../components/ui/search-bar"
import { ChevronDown, User } from "lucide-react"
import { NotificationBell } from "./Notification"
import { useNotification } from "../hooks/useNotification"
import { useSearchBar } from "../hooks/useSearchBar"
import { Dropdown, IDropdown } from "@/components/DropDown"


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
                            <div className="flex justify-center items-center gap-6">
                                <Dropdown items={dropDownItems}>
                                    {({ open }) => (
                                        <div className="flex justify-center items-center gap-0 hover:cursor-pointer group">
                                            <User size={20} className={open ? "text-primary" : "text-muted-foreground group-hover:text-black"} />
                                            <ChevronDown size={16} className={open ? "text-primary" : "text-muted-foreground group-hover:text-black"} />
                                        </div>
                                    )}
                                </Dropdown>
                                <div className="flex justify-center items-center">
                                    <NotificationBell notifications={notifications} unreadCount={unreadCount} markAllAsRead={markAllAsRead} markAsRead={markAsRead} />
                                </div>

                            </div>
                        ) : (
                            <Link to="/auth/login">
                                <User className="cursor-pointer text-muted-foreground hover:text-primary" />
                            </Link>
                        )}
                    </div>
                </div>

                <div className="flex justify-center min-w-[224px] w-full md:w-[440px]">
                    <SearchBar placeholder="¿Qué estas buscando?" handleSearch={handleSearch} query={query} setQuery={setQuery} />
                </div>

                <div className="hidden md:block">
                    {isLoggedIn ? (
                        <div className="flex justify-center items-center gap-6">
                            <Dropdown items={dropDownItems}>
                                {({ open }) => (
                                    <div className="flex justify-center items-center gap-0 hover:cursor-pointer group">
                                        <User size={20} className={open ? "text-primary" : "text-muted-foreground group-hover:text-black"} />
                                        <ChevronDown size={16} className={open ? "text-primary" : "text-muted-foreground group-hover:text-black"} />
                                    </div>
                                )}
                            </Dropdown>
                            <div className="flex justify-center items-center">
                                <NotificationBell notifications={notifications} unreadCount={unreadCount} markAllAsRead={markAllAsRead} markAsRead={markAsRead} />
                            </div>

                        </div>
                    ) : (
                        <Link to="/auth/login">
                            <User className="cursor-pointer text-muted-foreground hover:text-primary" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
