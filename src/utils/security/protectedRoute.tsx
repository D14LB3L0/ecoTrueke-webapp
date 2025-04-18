import { useStore } from "@/stores/useStore";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";


type ProtectedRouteTokenProps = {
    redirectPath?: string;
    children: React.ReactNode;
}

export const ProtectedRouteToken = ({
    redirectPath = "/auth/login",
    children,
}: ProtectedRouteTokenProps): ReactElement | null => {
    const token = useStore((state) => state.user.token);
    const status = useStore((state) => state.user.accountStatus);

    if (!token || status !== "active") {
        return <Navigate to={redirectPath} replace />;
    }

    return <>{children}</>;
};
