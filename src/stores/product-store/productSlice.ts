import { StateCreator } from "zustand";
import { IProductSlice } from "./interface/product.slice.interface";
import { IProduct } from "@/interfaces/product.interface";

export const createProductSlice: StateCreator<
  IProductSlice,
  [],
  [],
  IProductSlice
> = (set) => ({
  productsDashboard: [],
  setProductsDashboard: (products: IProduct[]) =>
    set({ productsDashboard: products }),
  paginationTotalPagesProductDashboard: 1,
  setPagintaionTotalPagesProductDashboard: (paginationTotalPages: number) =>
    set({ paginationTotalPagesProductDashboard: paginationTotalPages }),
  paginationPageProductDashboard: 1,
  setPaginationPageProductDashboard: (paginationPage: number) =>
    set({ paginationPageProductDashboard: paginationPage }),
  paginationAmountPageProductDashboard: 15,
});
