import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IproductPerson } from "@/interfaces/person.interface";

export interface GetProductPersonResponse {
  person: IproductPerson;
}

interface GetProductPersonDataResponse {
  data: GetProductPersonResponse;
  message: string;
}

export class GetProductPersonService {
  static async getProductPerson(
    userId: string
  ): Promise<GetProductPersonResponse> {
    try {
      const response = await ecoTruekeApi.get<GetProductPersonDataResponse>(
        `person/by-${userId}`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
