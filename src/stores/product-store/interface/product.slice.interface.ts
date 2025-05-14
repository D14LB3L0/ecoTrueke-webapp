import { IProducts } from "@/interfaces/product.interface";

export interface IProductSlice {
  productsDashboard: IProducts[];
  setProductsDashboard: (productsDashboard: IProducts[]) => void;
  paginationTotalPagesProductDashboard: number;
  setPagintaionTotalPagesProductDashboard: (paginationTotalPages: number) => void;
  paginationPageProductDashboard: number;
  setPaginationPageProductDashboard: (paginationPage: number) => void;
  paginationAmountPageProductDashboard: number;
}