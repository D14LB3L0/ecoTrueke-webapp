import { createBrowserRouter, Navigate } from "react-router-dom";
import { EcoTrueke } from "../EcoTrueke";
import { Home } from "../modules/home/pages/Home";
import { lazy, Suspense } from "react";

const AuthLayout = lazy(() => import('@/modules/auth/layout/AuthLayout'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <EcoTrueke />,
        children: [
            {
                path: '/home',
                element: (
                    <Home />
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
                element: <Navigate to="/auth/login" replace />
            }
        ]
    }
])