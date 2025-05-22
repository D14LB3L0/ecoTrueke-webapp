import { IProposal } from "@/interfaces/proposal.interface";

export interface IProposalSlice {
  proposalsRequested: IProposal[];
  setProposalsRequested: (proposalsRequested: IProposal[]) => void;
}
