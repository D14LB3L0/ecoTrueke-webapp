import { proposalSchema } from "@/schemas/proposals.schema";
import { GetProposalRequestedService } from "@/service/getProposalRequested.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetProposalRequested = () => {
  // proposal
  const setProposals = useStore((state) => state.setProposalsRequested);
  
  // token
  const token = useStore(state => state.user.token);

  // tanstack
  const query = useQuery({
    queryKey: ["getProposalRequested"],
    queryFn: async () => {
      const response = await GetProposalRequestedService.getProposalRequested();
      return {
        proposals: z.array(proposalSchema).parse(response.proposals),
      };
    },
    staleTime: 0,
    retry: false,
    gcTime: 0,
    enabled: !!token,
  });

  useEffect(() => {
    if (query.data) {
      setProposals(query.data.proposals);
    }
  }, [query.data]);

  return query;
};
