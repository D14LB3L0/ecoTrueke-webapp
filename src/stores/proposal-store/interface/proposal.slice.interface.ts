import { IProposal } from "@/interfaces/proposal.interface";

export interface IProposalSlice {
  proposals: IProposal[];
  setProposals: (proposal: IProposal[]) => void;
  proposalsRequested: IProposal[];
  setProposalsRequested: (proposalsRequested: IProposal[]) => void;
}
