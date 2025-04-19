import { createBrowserRouter, Navigate } from "react-router-dom";
import { EcoTrueke } from "../EcoTrueke";
import { lazy, Suspense } from "react";
import { ProtectedRouteToken } from "@/utils/security/protectedRoute";

const HomeLayout = lazy(() => import('@/modules/home/layout/HomeLayout'));
const AuthLayout = lazy(() => import('@/modules/auth/layout/AuthLayout'));
const DashboardLayout = lazy(() => import('@/modules/dashboard/layout/DashboardLayout'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <EcoTrueke />,
        children: [
            {
                path: 'home/*',
                element: (
                    <HomeLayout />
                )
            },
            {
                path: 'auth/*',
                element: (
                    <Suspense fallback={<></>}>
                        <AuthLayout />
                    </Suspense>
                )
            },
            {
                path: 'dashboard/*',
                element: (
                    <Suspense fallback={<></>}>
                        <ProtectedRouteToken>
                            <DashboardLayout />
                        </ProtectedRouteToken>
                    </Suspense>
                )
            },
            {
                path: '*',
                element: <Navigate to="/" replace />
            }
        ]
    }
])