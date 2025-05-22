import { proposalSchema } from "@/schemas/proposals.schema";
import { GetProposalService } from "@/service/getProposal.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetProposal = () => {
  // proposal
  const setProposals = useStore((state) => state.setProposals);

  // tanstack
  const query = useQuery({
    queryKey: ["getProposal"],
    queryFn: async () => {
      const response = await GetProposalService.getProposal();
      console.log(response.proposals);
      return {
        proposals: z.array(proposalSchema).parse(response.proposals),
      };
    },
    staleTime: 0,
    retry: false,
    gcTime: 0,
    enabled: false,
  });

  useEffect(() => {
    if (query.data) {
      setProposals(query.data.proposals);
    }
  }, [query.data]);

  return query;
};
