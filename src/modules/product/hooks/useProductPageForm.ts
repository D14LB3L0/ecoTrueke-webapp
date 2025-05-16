import { useEffect, useState } from "react";
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
import { useGetPaginatedProducts } from "@/hooks/useGetPaginatedProducts";
import { useStore } from "@/stores/useStore";
import { useGetProduct } from "@/hooks/useGetProduct";
import { EditProductRequest, EditProductService } from "../service/editProduct.service";

interface IUseProductPageForm {
  productId?: string;
}

export const useProductPageForm = ({ productId }: IUseProductPageForm) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // get product
  useGetProduct({ productId: productId ?? undefined });

  const currentProduct = useStore((state) => state.productDashboard);
  const setCurrentProduct = useStore((state) => state.setProductDashboard);

  const previewUrl = currentProduct.productPicture
    ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
        currentProduct.productPicture
      }`
    : undefined;

  // refetch list products
  const { refetch } = useGetPaginatedProducts();

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

  useEffect(() => {
    if (currentProduct) {
      form.reset({
        productPicture: undefined,
        name: currentProduct.name,
        description: currentProduct.description ?? "",
        typeTransaction: currentProduct.typeTranscription,
        condition: currentProduct.condition,
        quantity: currentProduct.quantity,
        category: currentProduct.category,
      });
    }
  }, [currentProduct]);

  useEffect(() => {
    return () => {
      form.reset({
        productPicture: undefined,
        name: "",
        description: "",
        typeTransaction: "",
        condition: "",
        quantity: 0,
        category: [],
      });
      setCurrentProduct({
        productPicture: "",
        name: "",
        description: null,
        typeTranscription: "",
        category: [],
        condition: "",
        status: "",
        quantity: 1,
      });
    };
  }, []);

  const handleSubmit = async (values: uploadProductFormValues) => {
    try {
      setIsLoading(true);

      if (productId) {
        let editProductRequest: EditProductRequest = {
          productId: productId,
          name: values.name.trim() ?? "",
          description: values.description?.trim() ?? "",
          typeTranscription: values.typeTransaction.trim() ?? "",
          condition: values.condition.trim() ?? "",
          category: values.category ?? [],
          quantity: values.quantity ?? "",
        };

        // CASE 1: Upload new image
        if (values.productPicture instanceof File) {
          editProductRequest.productPicture = values.productPicture;
        }
        // CASE 2: Delete image
        else if (values.productPicture === null) {
          editProductRequest.productPictureRemove = "true";
        }

        const response = await EditProductService.editProductService(editProductRequest)

        if (response){
          toast.dismiss();
          toast.success(response.message ?? Success.GENERIC);
        }

      } else {
        const registerProductRequest: RegisterProductRequest = {
          productPicture: values.productPicture ?? null,
          name: values.name.trim() ?? "",
          description: values.description?.trim() ?? "",
          typeTranscription: values.typeTransaction.trim() ?? "",
          condition: values.condition.trim() ?? "",
          category: values.category ?? [],
          quantity: values.quantity ?? "",
        };

        const response = await RegisterProductService.registerProductService(
          registerProductRequest
        );
        toast.dismiss();
        toast.success(response.message ?? Success.GENERIC);
        navigate("/dashboard/my-products");
      }
      refetch();
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
