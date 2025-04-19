import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavBar } from "./NavBar";
import navBarItems from "../data/navBarItems";
import { useEffect, useState } from "react";

interface HeaderSideBarProps {
    onToggle: () => void;
    collapsed: boolean;
}

export const HeaderSideBar = ({ onToggle, collapsed }: HeaderSideBarProps) => {

    const items = navBarItems();

    const [openSheet, setOpenSheet] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenSheet(false);
            }
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full">
            <div className="hidden md:block  w-full">
                <div className="w-full flex items-center justify-between px-2  ">

                    {!collapsed && (
                        <div className="flex flex-col leading-none">
                            <h1 className="text-primary font-bold text-xl">Ecosistema</h1>
                            <p className="text-[10px] text-primary">Panel de Control</p>
                        </div>
                    )}
                    <button onClick={onToggle} className="p-1 hover:bg-accent rounded transition-colors">
                        <Menu size={20} className="cursor-pointer" />
                    </button>
                </div>

            </div>

            <div className="md:hidden min-h-[36px] min-w-screen bg-primary flex justify-center items-center">
                <div className="flex justify-center items-center w-full gap-2">
                    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                        <SheetTrigger asChild>
                            <button className="hover:bg-accent rounded transition-colors">
                                <Menu size={20} className="text-white" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-4 w-[240px]">
                            <div className="mb-4">
                                <h1 className="text-primary font-bold text-xl">Ecosistema</h1>
                                <p className="text-[10px] text-primary">Panel de Control</p>
                            </div>
                            <NavBar items={items} collapsed={false} />
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-white font-bold">Ecosistema</h1>
                </div>
            </div>
        </div>
    );
};
