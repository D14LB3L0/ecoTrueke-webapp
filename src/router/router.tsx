import { createBrowserRouter } from "react-router-dom";
import { EcoTrueke } from "../EcoTrueke";
import { Home } from "../modules/home/pages/Home";

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
            }
        ]
    }
])