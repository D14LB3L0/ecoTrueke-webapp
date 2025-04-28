import { useState, useCallback, useRef, ForwardedRef, useEffect } from 'react';
import { UploadCloud, Camera } from 'lucide-react';
import React from 'react';
import { toast } from './ui/sonner';
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  onFileSelect: (file: File | null) => void;
  className?: string;
  variant?: 'avatar' | 'box';
  previewUrl?: string;
}

const ImageUploader = React.forwardRef(
  ({ onFileSelect, className, variant = 'avatar', previewUrl }: ImageUploaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | undefined>(previewUrl);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    }, []);

    const handleDragOut = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFile = files[0];

      if (imageFile && imageFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
          onFileSelect(imageFile);
        };
        reader.readAsDataURL(imageFile);
      }
    }, [onFileSelect]);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const imageFile = files[0];

      if (imageFile && imageFile.type.startsWith('image/')) {
        const img = new Image();
        img.src = URL.createObjectURL(imageFile);

        img.onload = () => {
          if (img.width < 200 || img.height < 200) {
            toast("Por favor selecciona una imagen de mínimo 200x200 píxeles.");
            return;
          }

          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result as string);
            onFileSelect(imageFile);
          };
          reader.readAsDataURL(imageFile);
        };
      }
    }, [onFileSelect]);

    const handleRemoveImage = () => {
      setPreview(undefined);
      onFileSelect(null);

      //  Reseteamos el input manualmente
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const commonClasses = `
      flex flex-col items-center justify-center transition-all duration-200 cursor-pointer border-2 border-dashed
      ${isDragging ? 'border-muted-foreground bg-muted/20' : 'border-gray-300 hover:border-muted-foreground hover:bg-muted/20'}
    `;

    const avatarClasses = `w-24 h-24 sm:w-28 sm:h-28 rounded-full`;
    const boxClasses = `w-64 h-48 rounded-lg`;

    useEffect(() => {
      if (previewUrl) {
        setPreview(previewUrl);
      }
    }, [previewUrl]);

    return (
      <div ref={ref} className={`flex flex-col items-center justify-center gap-2 ${className || ''}`}>
        <label
          className={`relative ${commonClasses} ${variant === 'avatar' ? avatarClasses : boxClasses}`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={handleFileSelect}
            aria-label="Subir imagen"
          />

          {preview ? (
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={preview}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
              {variant === 'avatar' ? (
                <Camera size={20} />
              ) : (
                <UploadCloud className="w-10 h-10" />
              )}
              <p className="text-center text-[12px] font-medium">
                {variant === 'avatar'
                  ? 'Sube tu foto de perfil'
                  : 'Arrastra tu imagen aquí o haz clic para seleccionar'}
              </p>
            </div>
          )}
        </label>

        {/* Botón de eliminar imagen si hay una imagen subida */}
        {preview && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600"
            onClick={handleRemoveImage}
          >
            Eliminar imagen
          </Button>
        )}
      </div>
    );
  }
);

export default ImageUploader;
