import { toast } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import { useGetProposals } from "@/hooks/useGetProposals";
import { useStore } from "@/stores/useStore";
import { Error } from "@/utils/constants/Error";
import { useState } from "react";

interface ProposalRowAction {
  proposalId: string;
}

export const ProposalRowAction = ({ proposalId }: ProposalRowAction) => {
  const [loadingExchangeSuccess, setLoadingExchangeSuccess] =
    useState<boolean>(false);

  const setProposalId = useStore((state) => state.setProposalId);
  const currentProposal = useStore((state) => state.proposalId);

  const { refetch } = useGetProposals({ status: "accepted" });

  const handleExchangeSuccess = () => {
    try {
      setProposalId(proposalId);
      setLoadingExchangeSuccess(true);

      // await confirm ... open popup calicate user
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    } finally {
      setLoadingExchangeSuccess(false);
    }
  };

  return (
    <div className="">
      {loadingExchangeSuccess && currentProposal === proposalId ? (
        <Spinner className="text-muted-foreground" size="sm" />
      ) : (
        <div className="flex gap-4 items-center">
          <div
            className="mr-1 cursor-pointer  text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              handleExchangeSuccess();
              e.stopPropagation();
            }}
          >
            Confirmar
          </div>
          <div
            className="mr-1 cursor-pointer  text-muted-foreground hover:text-destructive transition-colors duration-200"
            onClick={(e) => {
              handleExchangeSuccess();
              e.stopPropagation();
            }}
          >
            Cancelar
          </div>
        </div>
      )}
    </div>
  );
};
