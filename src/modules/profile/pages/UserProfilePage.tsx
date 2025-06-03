import StarRating from "@/components/ui/star-rating";
import { useGetProductPerson } from "@/hooks/useGetProductPerson";
import { useGetUserRating } from "@/hooks/useGetUserRating";
import { useStore } from "@/stores/useStore";
import { CalendarDays, MapPin, User } from "lucide-react";

export const UserProfilePage = () => {
  const productPersonId = useStore((state) => state.productPersonId);
  useGetProductPerson(productPersonId);

  useGetUserRating(productPersonId);

  const productPerson = useStore((state) => state.productPerson);

  const averageStars = useStore((state) => state.userStars);

  return (
    <div className="p-4">
      <div className="max-w-[900px] mx-auto mb-4 md:flex rounded-lg shadow-md p-6 bg-muted/50">
        {/* Imagen */}
        <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4">
          <img
            src={
              productPerson.profilePicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    productPerson.profilePicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt={`${productPerson.name}`}
            className="h-[240px] w-full max-w-[280px] object-cover rounded-lg"
          />
        </div>

        {/* Datos */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {productPerson.name} {productPerson.paternalSurname}{" "}
              {productPerson.maternalSurname}
            </h1>

            <div className="mt-4 space-y-2 text-gray-700 text-sm">
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
          </div>

          {/* Rating */}
          <div className="mt-2">
            <p className="text-sm text-muted-foreground font-medium mb-1">
              Calificación general como usuario
            </p>
            <StarRating
              rating={averageStars.averageStars}
              maxStars={5}
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
