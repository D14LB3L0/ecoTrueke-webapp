import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  uploadProductFormSchema,
  uploadProductFormValues,
} from "../schemas/uploadProductForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";
import {
  RegisterProductRequest,
  RegisterProductService,
} from "../service/registerProduct.service";
import { Success } from "@/utils/constants/Success";
import { useNavigate } from "react-router-dom";

export const useUploadProductPageForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const [previewUrl, _] = useState<string | undefined>();
  // person.profilePicture
  //     ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${person.profilePicture}`
  //     : undefined

  const form = useForm<uploadProductFormValues>({
    resolver: zodResolver(uploadProductFormSchema),
    mode: "onChange",
    defaultValues: {
      productPicture: undefined,
      name: "",
      description: "",
      typeTransaction: "",
      condition: "",
      quantity: 0,
      category: [],
    },
  });

  const handleSubmit = async (values: uploadProductFormValues) => {
    try {
      setIsLoading(true);
      const registerProductRequest: RegisterProductRequest = {
        productPicture: values.productPicture ?? null,
        name: values.name ?? "",
        description: values.description ?? "",
        typeTranscription: values.typeTransaction ?? "",
        condition: values.condition ?? "",
        category: values.category ?? [],
        quantity: values.quantity ?? "",
      };

      const response = await RegisterProductService.registerProductService(
        registerProductRequest
      );
      toast.dismiss();
      toast.success(response.message ?? Success.GENERIC);
      navigate('/dashboard/my-products')
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
    previewUrl,
  };
};
