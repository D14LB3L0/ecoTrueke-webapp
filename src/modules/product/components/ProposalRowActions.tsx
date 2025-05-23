import { X, Check } from "lucide-react"; // Íconos opcionales

interface ProposalRowActions {
  proposalId: string;
}

export const ProposalRowActions = ({ proposalId }: ProposalRowActions) => {
  const handleAcceptRequest = () => {};
  const handleRejectRequest = () => {};

  return (
    <div className="flex gap-4 items-center">
      <X
        className="mr-1 cursor-pointer  text-muted-foreground hover:text-destructive transition-colors duration-200"
        onClick={() => handleRejectRequest}
        size={20}
      />

      <Check
        className="mr-1 cursor-pointer  text-muted-foreground hover:text-primary transition-colors duration-200"
        onClick={() => handleAcceptRequest}
        size={20}
      />
    </div>
  );
};
