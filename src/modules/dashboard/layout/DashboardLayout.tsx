import { MyProfilePage } from "@/modules/profile/pages/MyProfilePage"
import { SideBarLayout } from "@/modules/secondaryLayout/components/SideBarLayout"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"

const DashboardLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route element={<SideBarLayout />}>
                    <Route path="/*" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/profile" element={<MyProfilePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default DashboardLayout
