import { Spinner } from "@/components/ui/spinner";
import { X, Check } from "lucide-react"; // Íconos opcionales
import { useState } from "react";

interface ProposalRowActions {
  proposalId: string;
}

export const ProposalRowActions = ({ proposalId }: ProposalRowActions) => {
  const [loadingAcceptRequest, setLoadingAcceptRequest] =
    useState<boolean>(false);
  const [loadingRejectRequest, setLoadingRejectRequest] =
    useState<boolean>(false);

  const handleAcceptRequest = () => {
    try {
      setLoadingAcceptRequest(true);
    } catch {
    } finally {
      setLoadingAcceptRequest(false);
    }
  };
  const handleRejectRequest = () => {
    try {
      setLoadingRejectRequest(true);
    } catch {
    } finally {
      setLoadingRejectRequest(false);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {loadingRejectRequest ? (
        <Spinner className="text-destructive" size="sm" />
      ) : (
        <X
          className="mr-1 cursor-pointer  text-muted-foreground hover:text-destructive transition-colors duration-200"
          onClick={(e) => {
            handleRejectRequest;
            e.stopPropagation();
          }}
          size={20}
        />
      )}
      {loadingAcceptRequest ? (
        <Spinner className="text-muted-foreground" size="sm" />
      ) : (
        <Check
          className="mr-1 cursor-pointer  text-muted-foreground hover:text-primary transition-colors duration-200"
          onClick={(e) => {
            handleAcceptRequest;
            e.stopPropagation();
          }}
          size={20}
        />
      )}
    </div>
  );
};
