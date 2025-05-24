import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface AcceptOrRejectProposalRequest {
  proposalId: string;
  action: string;
}

export interface AcceptOrRejectProposalResponse {
  message: string;
}

export class AcceptOrRejectProposalService {
  static async acceptOrRejectProposal(
    acceptOrRejectProposalRequest: AcceptOrRejectProposalRequest
  ): Promise<AcceptOrRejectProposalResponse> {
    try {
      const response = await ecoTruekeApi.post<AcceptOrRejectProposalResponse>(
        "proposal/accept-reject",
        acceptOrRejectProposalRequest
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
