import { IProduct, IProducts } from "@/interfaces/product.interface";

export interface IDashboardSlice {
  editProfile: "person" | "user";
  setEditProfile: (editProfile: "person" | "user") => void;
  collapsedSideBar: boolean;
  setCollapsedSideBar: (collapsedSideBar: boolean) => void;
  productsDashboard: IProducts[];
  setProductsDashboard: (productsDashboard: IProducts[]) => void;
  paginationTotalPagesProductDashboard: number;
  setPagintaionTotalPagesProductDashboard: (
    paginationTotalPages: number
  ) => void;
  paginationPageProductDashboard: number;
  setPaginationPageProductDashboard: (paginationPage: number) => void;
  paginationAmountPageProductDashboard: number;
  productDashboard: IProduct;
  setProductDashboard: (productDashboard: IProduct) => void;
  editProductDashboardId: string;
  setEditProductDashboardId: (editProductDashboardId: string) => void;
}
