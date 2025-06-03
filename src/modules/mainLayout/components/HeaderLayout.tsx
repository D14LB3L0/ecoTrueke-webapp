import { NavBar } from "@/modules/mainLayout/components/NavBar";
import dropDownItems from "@/modules/mainLayout/data/dropDownItems";
import { useNavBar } from "../hooks/useNavBar";
import { Outlet } from "react-router-dom";

export const HeaderLayout = () => {
  const { isLoggedIn, handleLogout } = useNavBar();

  const items = dropDownItems({ handleLogout });

  return (
    <div>
      <div className="min-w-screen min-h-[106px]">
        <div className="flex justify-center items-center text-white bg-primary min-h-[36px] text-sm pl-4 pr-4 md:pl-8 md:pr-8 pt-2 pb-2">
          <p>
            Un nuevo destino para tus cosas. Una nueva historia para ti.
            ¡Truekea ahora!
          </p>
        </div>
        <NavBar isLoggedIn={isLoggedIn} dropDownItems={items} />
      </div>
      <Outlet />
    </div>
  );
};
