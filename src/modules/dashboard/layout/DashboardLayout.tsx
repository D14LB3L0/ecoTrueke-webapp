import { MyProfilePage } from "@/modules/profile/pages/MyProfilePage";
import { SideBarLayout } from "@/modules/secondaryLayout/components/SideBarLayout";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { MyProductsPage } from "@/modules/product/pages/MyProductsPage";
import { UploadProductPage } from "@/modules/product/pages/UploadProductPage";
import { ManageProductPage } from "@/modules/product/pages/ManageProductPage";
import { EditProductPage } from "@/modules/product/pages/EditProductPage";
import { RequestProductPage } from "@/modules/product/pages/RequestProductPage";
import { ProposalActive } from "@/modules/product/pages/ProposalActive";
import { HistoryProposalPage } from "@/modules/history/pages/HistoryProposalPage";

const DashboardLayout = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route element={<SideBarLayout />}>
          <Route path="/*" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<MyProfilePage />} />

          <Route path="/my-products" element={<MyProductsPage />} />
          <Route path="/my-products/upload" element={<UploadProductPage />} />
          <Route path="/my-products/manage" element={<ManageProductPage />} />
          <Route path="/my-products/manage/view" element={<ManageProductPage />} />
          <Route path="/my-products/manage/edit" element={<EditProductPage />} />
          <Route path="/my-products/requested" element={<RequestProductPage />} />
          <Route path="/my-products/proposal" element={<ProposalActive />} />

          <Route path="/history" element={<HistoryProposalPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default DashboardLayout;
