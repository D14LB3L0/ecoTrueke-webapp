import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { HeaderLayout } from "@/modules/mainLayout/components/HeaderLayout"
import { ProductsPage } from "@/modules/product/pages/ProductsPage"
import { ProductDetailPage } from "@/modules/product/pages/ProductDetailPage"

const HomeLayout = () => {
    return (
        <>
            <Outlet />
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/details" element={<ProductDetailPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default HomeLayout
