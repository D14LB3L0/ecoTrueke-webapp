import { IProposal } from "@/interfaces/proposal.interface";
import { StateCreator } from "zustand";
import { IProposalSlice } from "./interface/proposal.slice.interface";

export const createProposalSlice: StateCreator<
  IProposalSlice,
  [],
  [],
  IProposalSlice
> = (set) => ({
  proposals: [],
  setProposals: (proposals: IProposal[]) => set({ proposals }),
  proposalsRequested: [],
  setProposalsRequested: (proposalsRequested: IProposal[]) =>
    set({ proposalsRequested }),
});
