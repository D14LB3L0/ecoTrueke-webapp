import { createBrowserRouter, Navigate } from "react-router-dom";
import { EcoTrueke } from "../EcoTrueke";
import { lazy, Suspense } from "react";

const AuthLayout = lazy(() => import('@/modules/auth/layout/AuthLayout'));
const HomeLayout = lazy(() => import('@/modules/home/layout/HomeLayout'));

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
                path: '*',
                element: <Navigate to="/" replace />
            }
        ]
    }
])