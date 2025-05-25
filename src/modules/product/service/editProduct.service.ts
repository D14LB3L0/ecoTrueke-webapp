import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface EditProductRequest {
  productId: string;
  productPicture?: File | null;
  productPictureRemove?: string;
  name: string;
  description: string;
  typeTranscription: string;
  category: string[];
  condition: string;
  quantity: number | null | string;
}

export interface EditProductResponse {
  message: string;
}

export class EditProductService {
  static async editProductService(
    editProductRequest: EditProductRequest
  ): Promise<EditProductResponse> {
    try {
      const formData = new FormData();

      // CASE 1 : Upload new image
      if (editProductRequest.productPicture) {
        formData.append("productPicture", editProductRequest.productPicture);
      }

      // CASE 2 : Delete image
      if (editProductRequest.productPictureRemove !== undefined) {
        formData.append(
          "productPictureRemove",
          editProductRequest.productPictureRemove
        );
      }

      formData.append("name", editProductRequest.name);
      formData.append("description", editProductRequest.description);
      formData.append(
        "typeTranscription",
        editProductRequest.typeTranscription
      );
      editProductRequest.category.forEach((cat) => {
        formData.append("category", cat);
      });
      formData.append("condition", editProductRequest.condition);
      if (editProductRequest.quantity != null)
        formData.append("quantity", editProductRequest.quantity.toString());

      const response = await ecoTruekeApi.put<EditProductResponse>(
        `product/${editProductRequest.productId}`,
        formData
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
