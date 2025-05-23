import { useStore } from "@/stores/useStore";
import { useManageProposal } from "../hooks/useManageProposal"

export const ProposalProductPage = () => {

  const {} = useManageProposal();

  const proposals = useStore(state => state.proposals);

  console.log(proposals);

  return (
    <div>ProposalProductPage</div>
  )
}
