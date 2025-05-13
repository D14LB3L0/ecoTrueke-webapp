import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProducts } from "@/interfaces/product.interface";

export interface GetPaginatedProductssRequest {
  page: number;
  amountPage: number;
}


interface GetPaginatedProductsData {
  products: IProducts[];
  totalPages: number;
}

interface GetPaginatedProductsResponse {
  data: GetPaginatedProductsData;
  message: string;
}

export class GetPaginatedProductsService{
    static async getPaginatedProducts(
        getpaginatedProductsRequest : GetPaginatedProductssRequest
    ): Promise<GetPaginatedProductsData>{
        try{
            const response = await ecoTruekeApi.get<GetPaginatedProductsResponse>(
                "product/pagination",
                {
                    params: getpaginatedProductsRequest
                }
            );
            return response.data.data;
        }catch (error){
            throw error;
        }
    }
}