import StarRating from "@/components/ui/star-rating";
import { useGetProductPerson } from "@/hooks/useGetProductPerson";
import { useStore } from "@/stores/useStore";
import { CalendarDays, MapPin, User } from "lucide-react";
import { useLocation } from "react-router-dom";

export const UserProfilePage = () => {
  const productPersonId = useStore((state) => state.productPersonId);
  const location = useLocation();

  const isMe = location.pathname.endsWith("/me");

  const person = useStore((state) => state.person);
  const productPerson = useStore((state) => state.productPerson);
  const averageStars = useStore((state) => state.userStars);

  useGetProductPerson(!isMe ? productPersonId : undefined);

  const data = isMe ? person : productPerson;

  return (
    <div className="p-4">
      <div className="max-w-[900px] mx-auto mb-4 md:flex rounded-lg shadow-md p-6 bg-muted/50">
        {/* Imagen */}
        <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4">
          <img
            src={
              data.profilePicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    data.profilePicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt={`${data.name}`}
            className="h-[240px] w-full max-w-[280px] object-cover rounded-lg"
          />
        </div>

        {/* Datos */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {data.name} {data.paternalSurname} {data.maternalSurname}
            </h1>

            <div className="mt-4 space-y-2 text-gray-700 text-sm">
              {data.gender && (
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-medium">Género:</span> {data.gender}
                </p>
              )}
              {data.address && (
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium">Dirección:</span> {data.address}
                </p>
              )}
              <p className="flex items-center gap-2">
                {!isMe && productPerson.createdAt && (
                  <p className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    <span className="font-medium">Miembro desde:</span>{" "}
                    {new Date(productPerson.createdAt).toLocaleDateString(
                      "es-PE",
                      {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }
                    )}
                  </p>
                )}
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
