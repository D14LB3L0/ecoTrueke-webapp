import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MyProfilePersonForm } from "../components/MyProfilePersonForm"
import { ActiveTab } from "../components/ActiveTab"
import { MyProfileUserForm } from "../components/MyProfileUserForm";
import { useStore } from "@/stores/useStore";
export const MyProfilePage = () => {

  const editProfile = useStore(state => state.editProfile)
  const setEditProfile = useStore(state => state.setEditProfile)

  return (
    <div className="space-y-6 min-w-[308px]">
      <h1 className="text-2xl font-bold">Editar Perfil</h1>
      <Card className="max-w-[900px]">
        <CardHeader className="relative px-6 pb-0">
          <ActiveTab activeTab={editProfile} setActiveTab={setEditProfile} />
        </CardHeader>
        <CardContent>
          {editProfile == "person" ? (
            <MyProfilePersonForm />
          ) : (
            <MyProfileUserForm />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
