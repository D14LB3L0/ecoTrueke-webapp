import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProducts } from "@/interfaces/product.interface";

export interface GetPaginatedProductsDashboardRequest {
  page: number;
  amountPage: number;
  myProducts: boolean
}


interface GetPaginatedProductsDashboardData {
  products: IProducts[];
  totalPages: number;
}

interface GetPaginatedProductsDashboardResponse {
  data: GetPaginatedProductsDashboardData;
  message: string;
}

export interface GetPaginatedProductsRequest {
  page: number;
  amountPage: number;
  myProducts: boolean
  searchTerm?: string
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
    static async getPaginatedProductsDashboard(
        getpaginatedProductsDashboardRequest : GetPaginatedProductsDashboardRequest
    ): Promise<GetPaginatedProductsDashboardData>{
        try{
            const response = await ecoTruekeApi.get<GetPaginatedProductsDashboardResponse>(
                "product/pagination",
                {
                    params: getpaginatedProductsDashboardRequest
                }
            );
            return response.data.data;
        }catch (error){
            throw error;
        }
    }

    static async getPaginatedProducts(
        getpaginatedProductsRequest : GetPaginatedProductsRequest 
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