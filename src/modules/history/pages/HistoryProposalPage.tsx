import { DataTable } from "@/components/Table/DataTable";
import { Card, CardContent } from "@/components/ui/card";
import { useGetProposals } from "@/hooks/useGetProposals";
import { useStore } from "@/stores/useStore";
import { useEffect } from "react";
import { HistoryColumn } from "../components/HistoryColumn";

export const HistoryProposalPage = () => {
  useGetProposals({});

  const proposals = useStore((state) => state.proposals);
  const setPage = useStore((state) => state.setPaginationPageProposals);
  const paginationPage = useStore((state) => state.paginationPageProposals);
  const paginationAmountPage = useStore(
    (state) => state.paginationAmountPageProposals
  );

  const totalPages = useStore((state) => state.paginationTotalPagesProposals);

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="space-y-6 min-w-[308px]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Historial</h1>
        <h2 className="text-sm text-muted-foreground">
          Revisa todas tus transacciones y actividades realizadas.
        </h2>
      </div>
      <Card className="max-w-[900px]">
        <CardContent>
          <DataTable
            columns={HistoryColumn}
            data={proposals}
            paginationAmountPage={paginationAmountPage}
            paginationPage={paginationPage}
            setPage={setPage}
            totalPages={totalPages}
            link={true}
            details={true}
            history={true}
          />
        </CardContent>
      </Card>
    </div>
  );
};
