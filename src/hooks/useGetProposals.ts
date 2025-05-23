import { proposalSchema } from "@/schemas/proposals.schema";
import { GetProposalService } from "@/service/getProposal.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetProposals = () => {
  // proposal
  const setProposals = useStore((state) => state.setProposals);

  // tanstack
  const query = useQuery({
    queryKey: ["getProposals"],
    queryFn: async () => {
      const response = await GetProposalService.getProposal();
      return {
        proposals: z.array(proposalSchema).parse(response.proposals),
      };
    },
    staleTime: 0,
    retry: false,
    gcTime: 0,
  });

  useEffect(() => {
    if (query.data) {
      setProposals(query.data.proposals);
    }
  }, [query.data]);

  return query;
};
