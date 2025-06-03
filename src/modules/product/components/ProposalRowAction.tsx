import { toast } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import { useGetProposals } from "@/hooks/useGetProposals";
import { useStore } from "@/stores/useStore";
import { Error } from "@/utils/constants/Error";
import { useState } from "react";
import { Success } from "@/utils/constants/Success";
import { ConfirmOrCancelProposalService } from "../service/confirmCancelProposal.service";
import { RatingModal } from "@/components/RatingModal";
import { RatingUserService } from "../service/ratingUser.service";

interface ProposalRowAction {
  proposalId: string;
  proposerUser: string;
}

export const ProposalRowAction = ({
  proposalId,
  proposerUser,
}: ProposalRowAction) => {
  const [loadingExchangeSuccess, setLoadingExchangeSuccess] =
    useState<boolean>(false);

  const [openPopupQualifyUser, setOpenPopUpQualifyUser] =
    useState<boolean>(false);

  const setProposalId = useStore((state) => state.setProposalId);
  const currentProposal = useStore((state) => state.proposalId);

  const { refetch } = useGetProposals({ status: "accepted" });

  const handleExchangeSuccess = async (
    productAction: string,
    proposalAction: string
  ) => {
    try {
      setProposalId(proposalId);
      setLoadingExchangeSuccess(true);

      const response =
        await ConfirmOrCancelProposalService.confirmOrCancelProposal({
          proposalId,
          productAction,
          proposalAction,
        });

      if (response) {
        toast.dismiss();
        toast.success(response.message ?? Success.GENERIC);
        if (response && productAction === "traded") {
          setOpenPopUpQualifyUser(true);
        }
      }
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    }
  };

  const handleRatingSubmit = async (stars: number) => {
    try {
      const response = await RatingUserService.ratingUser({
        proposerUserId: proposerUser,
        proposalId: proposalId,
        stars,
      });

      toast.dismiss();
      toast.success(response.message ?? Success.GENERIC);
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    } finally {
      setLoadingExchangeSuccess(false);
      refetch();
    }
  };

  const handleRatingOnClose = async () => {
    setLoadingExchangeSuccess(false);
    setOpenPopUpQualifyUser(false);
    refetch();
  };

  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
      {loadingExchangeSuccess && currentProposal === proposalId ? (
        <Spinner className="text-muted-foreground" size="sm" />
      ) : (
        <div className="flex gap-4 items-center">
          <div
            className="mr-1 cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              handleExchangeSuccess("traded", "completed");
              e.stopPropagation();
            }}
          >
            Confirmar
          </div>
          <div
            className="mr-1 cursor-pointer  text-muted-foreground hover:text-destructive transition-colors duration-200"
            onClick={(e) => {
              handleExchangeSuccess("active", "cancelled");
              e.stopPropagation();
            }}
          >
            Cancelar
          </div>
        </div>
      )}

      <RatingModal
        isOpen={openPopupQualifyUser}
        onClose={handleRatingOnClose}
        onSubmit={handleRatingSubmit}
        title="¿Cómo calificarías al usuario?"
        description="Tu opinión es muy importante para nosotros"
      />
    </div>
  );
};
