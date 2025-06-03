import { useGetProductPerson } from "@/hooks/useGetProductPerson";
import { useStore } from "@/stores/useStore";
import { CalendarDays, MapPin, User } from "lucide-react";

export const UserProfilePage = () => {
  const productPersonId = useStore((state) => state.productPersonId);
  useGetProductPerson(productPersonId);

  const productPerson = useStore((state) => state.productPerson);

  return (
    <div className="p-4">
      <div className="max-w-[900px] mx-auto mb-4 md:flex rounded-lg shadow-md p-6 bg-muted/50">
        <div className="w-full md:w-[400px] rounded-lg overflow-hidden border border-gray-200">
          <img
            src={
              productPerson.profilePicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    productPerson.profilePicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt={`${productPerson.name}`}
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div className="flex-1 mt-4 md:mt-0 md:ml-8 flex flex-col  gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {productPerson.name} {productPerson.paternalSurname}{" "}
            {productPerson.maternalSurname}
          </h1>

          <div className="space-y-3 text-gray-700 text-sm">
            {productPerson.gender && (
              <p className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-medium">Género:</span>{" "}
                {productPerson.gender}
              </p>
            )}
            {productPerson.address && (
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Dirección:</span>{" "}
                {productPerson.address}
              </p>
            )}
            <p className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="font-medium">Miembro desde:</span>{" "}
              {new Date(productPerson.createdAt).toLocaleDateString("es-PE", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </p>
          </div>

          <div className="">
            <div className="">Calificación general como usuario</div>
          </div>
        </div>
      </div>
    </div>
  );
};
