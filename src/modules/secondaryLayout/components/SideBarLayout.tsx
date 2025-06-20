import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import navBarItems from "../data/navBarItems";
import { HeaderSideBar } from "./HeaderSideBar";
import { DynamicBreadcrumb } from "./DynamicBreadCrumb";
import { useStore } from "@/stores/useStore";

export const SideBarLayout = () => {

  const collapsedSideBar = useStore((state) => state.collapsedSideBar);
  const setCollapsedSideBar = useStore((state) => state.setCollapsedSideBar);

  const items = navBarItems();

  return (
    <div className="flex flex-col md:flex-row w-full">
      <aside
        className={`
          md:min-h-svh border-none md:border-r
          transition-all duration-300 
          ${collapsedSideBar ? "w-[64px]" : "w-[240px]"}
        `}
      >
        <div
          className={`flex flex-col md:h-full ${
            collapsedSideBar ? "items-center" : "items-start"
          } md:px-2 md:py-4`}
        >
          <HeaderSideBar
            collapsed={collapsedSideBar}
            onToggle={() => setCollapsedSideBar(!collapsedSideBar)}
          />
          <div className="hidden md:block mt-8 flex-1 w-full">
            <NavBar items={items} collapsed={collapsedSideBar} />
          </div>
        </div>
      </aside>

      <main
        className={`flex-1 p-4 md:p-8 pt-5 pb-5 bg-muted/50 min-h-svh space-y-6 transition-all`}
      >
        <div className="">
          <DynamicBreadcrumb />
        </div>
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
