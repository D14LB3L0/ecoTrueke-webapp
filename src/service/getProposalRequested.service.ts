import ecoTruekeApi from "@/api/ecoTrueke.api";
import { IProposal } from "@/interfaces/proposal.interface";

export interface GetProposalRequestedResponse {
  proposals: IProposal[];
}

interface GetProposalDataRequestedResponse {
  data: GetProposalRequestedResponse;
  message: string;
}

export class GetProposalRequestedService {
  static async getProposalRequested(): Promise<GetProposalRequestedResponse> {
    try {
      const response = await ecoTruekeApi.get<GetProposalDataRequestedResponse>(
        "proposal/requested"
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
