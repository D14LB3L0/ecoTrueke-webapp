import { Navigate, Outlet, useLocation } from "react-router-dom"

export const EcoTrueke = () => {

    const { pathname } = useLocation();

    if (pathname === '/')
        return <Navigate to={'/home'} />

    return (
        <main className="w-full min-h-screen overflow-hidden">
            <Outlet />
        </main>
    )
}
