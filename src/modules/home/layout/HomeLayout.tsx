import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { HeaderLayout } from "@/modules/mainLayout/components/HeaderLayout"

const HomeLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default HomeLayout
