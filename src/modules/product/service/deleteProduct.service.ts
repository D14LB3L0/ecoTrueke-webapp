import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface DeleteProductResponse {
  message: string;
}

export class DeleteProductService {
  static async DeleteProduct(
    productId: string
  ): Promise<DeleteProductResponse> {
    try {
      const response = await ecoTruekeApi.delete<DeleteProductResponse>(
        `product/${productId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
