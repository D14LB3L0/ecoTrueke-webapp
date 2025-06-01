import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface ConfirmOrCancelProposalRequest {
  proposalId: string;
  productAction: string;
  proposalAction: string;
}

export interface ConfirmOrCancelProposalResponse {
  message: string;
}

export class ConfirmOrCancelProposalService {
  static async confirmOrCancelProposal(
    confirmOrCancelProposalRequest: ConfirmOrCancelProposalRequest
  ): Promise<ConfirmOrCancelProposalResponse> {
    try {
      const response = await ecoTruekeApi.post<ConfirmOrCancelProposalResponse>(
        "proposal/confirm-cancel",
        confirmOrCancelProposalRequest
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
