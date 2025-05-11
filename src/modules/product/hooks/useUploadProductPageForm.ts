import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  uploadProductFormSchema,
  uploadProductFormValues,
} from "../schemas/uploadProductForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";

export const useUploadProductPageForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [previewUrl, _] = useState<string | undefined>(
        // person.profilePicture
        //     ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${person.profilePicture}`
        //     : undefined
    );

  const form = useForm<uploadProductFormValues>({
    resolver: zodResolver(uploadProductFormSchema),
    mode: "onChange",
    defaultValues: {
      productPicture: undefined,
      name: "",
      description: "",
      typeTransaction: "",
      condition: "",
      category: [],
    },
  });

  const handleSubmit = async (values: uploadProductFormValues) => {
    try {
      setIsLoading(true);
      console.log(values)

    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    form,
    handleSubmit,
    previewUrl
  };
};
