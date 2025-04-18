import { createBrowserRouter, Navigate } from "react-router-dom";
import { EcoTrueke } from "../EcoTrueke";
import { Home } from "../modules/home/pages/Home";
import { lazy, Suspense } from "react";
import { ProtectedRouteToken } from "@/utils/security/protectedRoute";

const AuthLayout = lazy(() => import('@/modules/auth/layout/AuthLayout'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <EcoTrueke />,
        children: [
            {
                path: '/*',
                element: (
                    <ProtectedRouteToken>
                        <Home />
                    </ProtectedRouteToken>
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
                path: '*',
                element: <Navigate to="/home" replace />
            }
        ]
    }
])