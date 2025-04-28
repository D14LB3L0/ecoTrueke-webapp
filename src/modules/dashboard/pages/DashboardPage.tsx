import LinkCard from "@/components/LinkCard"
import { Card, CardContent } from "@/components/ui/card"
import { useStore } from "@/stores/useStore"
import { Home, Package, User } from "lucide-react"

export const DashboardPage = () => {

    // person
    const person = useStore(state => state.person)


    return (
        <div className="space-y-6 min-w-[308px]">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">{`¡Bienvenido(a) ${person.name}!`}</h1>
                <h2 className="text-sm text-muted-foreground">{`Selecciona una sección para comenzar.`}</h2>
            </div>
            <Card className="max-w-[900px]">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LinkCard
                        to="/dashboard/profile"
                        icon={<User size="40px" className="mx-auto" />}
                        title="Perfil"
                        description="Actualiza tu información personal y configura tu cuenta."
                    />

                    <LinkCard
                        to="/dashboard/products"
                        icon={<Package size="40px" className="mx-auto" />}
                        title="Productos"
                        description="Administra tus productos registrados en el sistema."
                    />
                    <LinkCard
                        to="/"
                        icon={<Home size="40px" className="mx-auto" />}
                        title="Volver a EcoTrueke"
                        description="Regresa a la página principal de EcoTrueke."
                    />
                </CardContent>
            </Card>
        </div>
    )
}