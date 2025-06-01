import { useStore } from "@/stores/useStore";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/Table/DataTable";
import { ProposalColumn } from "../components/ProposalColumn";
import { useGetProposals } from "@/hooks/useGetProposals";
import { useEffect } from "react";

export const RequestProductPage = () => {
  const proposals = useStore((state) => state.proposals);

  // pagination
  const paginationAmountPage = useStore(
    (state) => state.paginationAmountPageProposals
  );
  const paginationPage = useStore((state) => state.paginationPageProposals);
  const setPage = useStore((state) => state.setPaginationPageProposals);
  const totalPages = useStore((state) => state.paginationTotalPagesProposals);

  // tanstack
  useGetProposals({ status: "pending" });

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="space-y-6 min-w-[308px]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Solicitudes</h1>
        <h2 className="text-sm text-muted-foreground">
          Acepta o rechaza las solicitudes de intercambio.
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
