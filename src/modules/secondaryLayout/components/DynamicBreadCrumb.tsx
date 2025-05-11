import { useLocation, Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"; 
import * as React from "react";

const breadcrumbMap: Record<string, string> = {
    dashboard: "Dashboard",
    profile: "Perfil",
    "my-products": "Mis productos",
    upload: "Subir producto"
};

export const DynamicBreadcrumb = () => {
    const location = useLocation();

    const pathSegments = location.pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    const label =
                        breadcrumbMap[segment] ||
                        segment.charAt(0).toUpperCase() + segment.slice(1);

                    return (
                        <React.Fragment key={path}>
                            <BreadcrumbItem className="font-semibold">
                                {!isLast ? (
                                    <BreadcrumbLink asChild >
                                        <Link to={path}>{label}</Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage className="text-primary font-semibold">{label}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
