import { Spinner } from "@/components/ui/spinner";
import { useStore } from "@/stores/useStore";
import { X, Check } from "lucide-react"; // Íconos opcionales
import { useState } from "react";
import { AcceptOrRejectProposalService } from "../service/acceptRejectProposal.service";
import { toast } from "@/components/ui/sonner";
import { Success } from "@/utils/constants/Success";
import { Error } from "@/utils/constants/Error";
import { useGetProposals } from "@/hooks/useGetProposals";

interface ProposalRowActions {
  proposalId: string;
}

export const ProposalRowActions = ({ proposalId }: ProposalRowActions) => {
  const [loadingAcceptOrRejectRequest, setLoadingAcceptOrRejectRequest] =
    useState<boolean>(false);

  const setProposalId = useStore((state) => state.setProposalId);
  const currentProposal = useStore((state) => state.proposalId);

  const { refetch } = useGetProposals();

  const handleAcceptOrRejectRequest = async (action: string) => {
    try {
      setProposalId(proposalId);
      setLoadingAcceptOrRejectRequest(true);

      const response =
        await AcceptOrRejectProposalService.acceptOrRejectProposal({
          proposalId,
          action,
        });

      if (response) {
        refetch();
        toast.dismiss();
        toast.success(response.message ?? Success.GENERIC);
      }
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    } finally {
      setLoadingAcceptOrRejectRequest(false);
    }
  };

  return (
    <div className="">
      {loadingAcceptOrRejectRequest && currentProposal === proposalId ? (
        <Spinner className="text-muted-foreground" size="sm" />
      ) : (
        <div className="flex gap-4 items-center">
          <X
            className="mr-1 cursor-pointer  text-muted-foreground hover:text-destructive transition-colors duration-200"
            onClick={(e) => {
              handleAcceptOrRejectRequest("rejected");
              e.stopPropagation();
            }}
            size={20}
          />
          <Check
            className="mr-1 cursor-pointer  text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              handleAcceptOrRejectRequest("accepted");
              e.stopPropagation();
            }}
            size={20}
          />
        </div>
      )}
    </div>
  );
};
