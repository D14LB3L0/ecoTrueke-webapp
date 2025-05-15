import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProduct } from "@/interfaces/product.interface";

export interface GetProductRequest {
  productId: string | undefined;
}

export interface GetProductResponse {
  product: IProduct;
}

interface GetProductDataResponse {
  data: GetProductResponse;
  message: string;
}

export class GetProductService {
  static async getProduct(
    getProductRequest: GetProductRequest
  ): Promise<GetProductResponse> {
    try {
      const response = await ecoTruekeApi.get<GetProductDataResponse>(
        `product/${getProductRequest.productId}`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
