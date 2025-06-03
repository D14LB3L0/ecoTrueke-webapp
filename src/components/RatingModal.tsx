import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (rating: number) => void;
  title?: string;
  description?: string;
}

export function RatingModal({
  isOpen,
  onClose,
  onSubmit,
  title = "Califica tu experiencia",
  description = "Haz clic en las estrellas para calificar",
}: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Reset rating when modal opens
  useEffect(() => {
    if (isOpen) {
      setRating(0);
      setHoverRating(0);
    }
  }, [isOpen]);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit?.(rating);
      onClose();
    }
  };

  const handleCancel = () => {
    setRating(0);
    setHoverRating(0);
    onClose();
  };

  const displayRating = hoverRating || rating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        onInteractOutside={(e) => {
          e.stopPropagation();
        }}
        className="sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-center text-sm text-muted-foreground">
            {description}
          </p>

          <div
            className="flex justify-center gap-2"
            onMouseLeave={handleMouseLeave}
          >
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <button
                key={starIndex}
                onClick={(e) => {
                  handleStarClick(starIndex);
                  e.stopPropagation();
                }}
                onMouseEnter={() => handleStarHover(starIndex)}
                className="p-2 rounded-full transition-all duration-200 hover:scale-110 hover:bg-gray-100"
              >
                <Star
                  className={`w-10 h-10 transition-all duration-200 ${
                    starIndex <= displayRating
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                      : "text-gray-300 hover:text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {rating > 0 && (
            <div className="text-center animate-in fade-in duration-300">
              <p className="text-sm font-medium">
                {rating} estrella{rating !== 1 ? "s" : ""} seleccionada
                {rating !== 1 ? "s" : ""}
              </p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                handleCancel();
              }}
            >
              Cancelar
            </Button>
            <Button
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                handleSubmit();
              }}
              disabled={rating === 0}
            >
              Enviar Calificación
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
