import { IProposal, IProposalProduct } from "@/interfaces/proposal.interface";

export interface IProposalSlice {
  proposals: IProposalProduct[];
  setProposals: (proposal: IProposalProduct[]) => void;
  proposalsRequested: IProposal[];
  setProposalsRequested: (proposalsRequested: IProposal[]) => void;
  paginationTotalPagesProposals: number;
  setPagintaionTotalPagesProposals: (paginationTotalPages: number) => void;
  paginationPageProposals: number;
  setPaginationPageProposals: (paginationPage: number) => void;
  paginationAmountPageProposals: number;
}
