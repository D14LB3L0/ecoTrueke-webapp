import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProposal } from "@/interfaces/proposal.interface";

export interface GetProposalRequest {
  page: number;
  amountPage: number;
  status: string | null
}

export interface GetProposalResponse {
  proposals: IProposal[];
  totalPages: number;
}

interface GetProposalDataResponse {
  data: GetProposalResponse;
  message: string;
}

export class GetProposalService {
  static async getProposal(
    getProposalRequest: GetProposalRequest
  ): Promise<GetProposalResponse> {
    try {
      const response = await ecoTruekeApi.get<GetProposalDataResponse>(
        "proposal",
        {
          params: getProposalRequest,
        }
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
