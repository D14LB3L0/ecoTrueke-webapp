import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProposal } from "@/interfaces/proposal.interface";

export interface GetProposalResponse {
  proposals: IProposal[];
}

interface GetProposalDataResponse {
  data: GetProposalResponse;
  message: string;
}

export class GetProposalService {
  static async getProposal(): Promise<GetProposalResponse> {
    try {
      const response = await ecoTruekeApi.get<GetProposalDataResponse>(
        "proposal/user"
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
