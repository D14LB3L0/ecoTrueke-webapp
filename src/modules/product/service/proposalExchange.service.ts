import ecoTruekeApi from "@/api/ecoTrueke.api";

export interface ProposalExchangeRequest {
  ownerId: string;
  proposalType: string;
  offeredProductId: string | null;
  requestedProductId: string;
}

export interface ProposalExchangeResponse {
  message: string;
}

export class ProposalExchangeService {
  static async proposalExchangeService(
    proposalExchangeRequest: ProposalExchangeRequest
  ): Promise<ProposalExchangeResponse> {
    try {
      const response = await ecoTruekeApi.post<ProposalExchangeResponse>(
        "proposal/exchange",
        proposalExchangeRequest
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
