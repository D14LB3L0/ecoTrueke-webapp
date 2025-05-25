import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface RegisterProductRequest {
  productPicture?: File | null;
  name: string;
  description: string;
  typeTranscription: string;
  category: string[];
  condition: string;
  quantity: number | null | string;
}

export interface RegisterProductResponse {
  message: string;
}

export class RegisterProductService {
  static async registerProductService(
    registerProductRequest: RegisterProductRequest
  ): Promise<RegisterProductResponse> {
    try {
      const formData = new FormData();

      if (registerProductRequest.productPicture) {
        formData.append(
          "productPicture",
          registerProductRequest.productPicture
        );
      }

      formData.append("name", registerProductRequest.name);
      formData.append("description", registerProductRequest.description);
      formData.append(
        "typeTranscription",
        registerProductRequest.typeTranscription
      );
      registerProductRequest.category.forEach((cat) => {
        formData.append("category", cat);
      });
      formData.append("condition", registerProductRequest.condition);
      if (registerProductRequest.quantity != null)
        formData.append("quantity", registerProductRequest.quantity.toString());

      const response = await ecoTruekeApi.post<RegisterProductResponse>(
        "product",
        formData
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
