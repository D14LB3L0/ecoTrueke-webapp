import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MyProfilePersonForm } from "../components/MyProfilePersonForm"
import { ActiveTab } from "../components/ActiveTab"
import { useState } from "react";
import { MyProfileUserForm } from "../components/MyProfileUserForm";
export const MyProfilePage = () => {

  const [activeTab, setActiveTab] = useState<"personal" | "user">("personal");

  return (
    <div className="space-y-6 min-w-[308px]">
      <h1 className="text-2xl font-bold">Editar Perfil</h1>
      <Card className="max-w-[900px]">
        <CardHeader className="relative px-6 pb-0">
          <ActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </CardHeader>
        <CardContent>
          {activeTab == "personal" ? (
            <MyProfilePersonForm />
          ) : (
            <MyProfileUserForm />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
