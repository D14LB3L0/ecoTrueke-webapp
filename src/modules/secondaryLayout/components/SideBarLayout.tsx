import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import navBarItems from "../data/navBarItems";
import { HeaderSideBar } from "./HeaderSideBar";
import { useState } from "react";

export const SideBarLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    const items = navBarItems();

    return (
        <div className="flex flex-col md:flex-row w-full">
            <aside
                className={`
                    md:min-h-svh border-none md:border-r
                    transition-all duration-300 
                    ${collapsed ? "w-[64px]" : "w-[240px]"}
                `}
            >
                <div className={`flex flex-col md:h-full ${collapsed ? "items-center" : "items-start"} md:px-2 md:py-4`}>
                    <HeaderSideBar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
                    <div className="hidden md:block mt-8 flex-1 w-full">
                        <NavBar items={items} collapsed={collapsed} />
                    </div>
                </div>
            </aside>

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};
