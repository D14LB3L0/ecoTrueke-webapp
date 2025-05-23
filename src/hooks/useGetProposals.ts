import { proposalProductSchema } from "@/schemas/proposals.schema";
import { GetProposalService } from "@/service/getProposal.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetProposals = () => {
  // proposal
  const setProposals = useStore((state) => state.setProposals);

  // pagination data
  const page = useStore((state) => state.paginationPageProposals);
  const amountPage = useStore((state) => state.paginationAmountPageProposals);
  const totalPages = useStore((state) => state.setPaginationPageProposals);

  // tanstack
  const query = useQuery({
    queryKey: ["getListProposals", page],
    queryFn: async () => {
      const response = await GetProposalService.getProposal({
        page,
        amountPage
      });
      return {
        proposals: z.array(proposalProductSchema).parse(response.proposals),
        totalPages: response.totalPages
      };
    },
    staleTime: 30000,
    retry: false,
    gcTime: 30000,
  });

  useEffect(() => {
    if (query.data) {
      setProposals(query.data.proposals);
      totalPages(query.data.totalPages)
    }
  }, [query.data]);

  return query;
};
