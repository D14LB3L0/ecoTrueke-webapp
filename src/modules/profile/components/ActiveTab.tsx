import { cn } from "@/lib/utils";

interface IActiveTab {
    activeTab: string
    setActiveTab: (editProfile: "person" | "user") => void
}

export const ActiveTab = ({ activeTab, setActiveTab }: IActiveTab) => {

    return (
        <div className="flex gap-10 font-semibold text-sm relative">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-muted" />

            <div
                className={cn(
                    "absolute bottom-0 h-[2px] bg-primary transition-all duration-300",
                    activeTab === "person" ? "left-[0px] w-[110px]" : "left-[148px] w-[114px]"
                )}
            />

            <div
                className={cn(
                    "cursor-pointer pb-3 transition-colors z-10",
                    activeTab === "person"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveTab("person")}
            >
                Datos Personales
            </div>

            <div
                className={cn(
                    "cursor-pointer pb-3 transition-colors z-10",
                    activeTab === "user"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveTab("user")}
            >
                Datos de Usuario
            </div>
        </div>
    )
}
