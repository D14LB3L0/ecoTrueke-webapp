import { NavBar } from "@/modules/Layout/components/NavBar"
import dropDownItems from "@/modules/Layout/data/dropDownItems"
import { useHeaderLayout } from "../hooks/useHeaderLayout";
import { Outlet } from "react-router-dom";

export const HeaderLayout = () => {

  const { isLoggedIn, handleLogout } = useHeaderLayout();

  const items = dropDownItems({ handleLogout });

  return (
    <div className="">
      <NavBar isLoggedIn={isLoggedIn} dropDownItems={items} />
      <Outlet />
    </div>
  )
}
