import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MyProfilePersonForm } from "../components/MyProfilePersonForm"
import { ActiveTab } from "../components/ActiveTab"
export const MyProfilePage = () => {


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Editar Perfil</h1>
      <Card className="max-w-[900px]">
        <CardHeader className="relative px-6 pb-0">
          <ActiveTab />
        </CardHeader>
        <CardContent>
          <MyProfilePersonForm />
        </CardContent>
      </Card>
    </div>
  )
}
