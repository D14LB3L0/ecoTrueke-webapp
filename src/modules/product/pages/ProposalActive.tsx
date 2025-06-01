import { DataTable } from "@/components/Table/DataTable";
import { Card, CardContent } from "@/components/ui/card";
import { useGetProposals } from "@/hooks/useGetProposals";
import { useStore } from "@/stores/useStore";
import { useEffect } from "react";
import { ProposalColumn } from "../components/ProposalColumn";

export const ProposalActive = () => {
  const proposals = useStore((state) => state.proposals);

  // pagination
  const paginationAmountPage = useStore(
    (state) => state.paginationAmountPageProposals
  );
  const paginationPage = useStore((state) => state.paginationPageProposals);
  const setPage = useStore((state) => state.setPaginationPageProposals);
  const totalPages = useStore((state) => state.paginationTotalPagesProposals);

  // tanstack
  useGetProposals({ status: "accepted" });

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="space-y-6 min-w-[308px]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Solicitudes activas</h1>
        <h2 className="text-sm text-muted-foreground">
          Confirma la realización de la transacción.  
        </h2>
      </div>
      <Card className="max-w-[900px]">
        <CardContent>
          <DataTable
            columns={ProposalColumn}
            data={proposals}
            paginationAmountPage={paginationAmountPage}
            paginationPage={paginationPage}
            setPage={setPage}
            totalPages={totalPages}
            link={true}
            details={true}
          />
        </CardContent>
      </Card>
    </div>
  );
};
