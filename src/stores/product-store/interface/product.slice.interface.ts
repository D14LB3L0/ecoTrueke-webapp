import { IProduct } from "@/interfaces/product.interface";

export interface IProductSlice {
  productsDashboard: IProduct[];
  setProductsDashboard: (productsDashboard: IProduct[]) => void;
  paginationTotalPagesProductDashboard: number;
  setPagintaionTotalPagesProductDashboard: (paginationTotalPages: number) => void;
  paginationPageProductDashboard: number;
  setPaginationPageProductDashboard: (paginationPage: number) => void;
  paginationAmountPageProductDashboard: number;
}