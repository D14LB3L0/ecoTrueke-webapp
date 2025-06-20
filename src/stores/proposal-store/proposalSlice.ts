import { IProposal, IProposalProduct } from "@/interfaces/proposal.interface";
import { StateCreator } from "zustand";
import { IProposalSlice } from "./interface/proposal.slice.interface";

export const createProposalSlice: StateCreator<
  IProposalSlice,
  [],
  [],
  IProposalSlice
> = (set) => ({
  proposalId: '',
  setProposalId:(proposalId: string) => set({ proposalId }) ,
  proposals: [],
  setProposals: (proposals: IProposalProduct[]) => set({ proposals }),
  proposalsRequested: [],
  setProposalsRequested: (proposalsRequested: IProposal[]) =>
    set({ proposalsRequested }),
  paginationTotalPagesProposals: 0,
  setPagintaionTotalPagesProposals: (paginationTotalPagesProposals: number) =>
    set({ paginationTotalPagesProposals }),
  paginationPageProposals: 1,
  setPaginationPageProposals: (paginationPageProposals: number) =>
    set({ paginationPageProposals }),
  paginationAmountPageProposals: 20,
});
