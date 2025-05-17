import { StateCreator } from "zustand";
import { IDashboardSlice } from "./interface/dashboard.slice.interface";
import { IProduct, IProducts } from "@/interfaces/product.interface";

export const createDashboardSlice: StateCreator<
  IDashboardSlice,
  [],
  [],
  IDashboardSlice
> = (set) => ({
  editProfile: "person",
  setEditProfile: (editProfile: "person" | "user") => set({ editProfile }),
  collapsedSideBar: true,
  setCollapsedSideBar: (collapsedSideBar: boolean) => set({ collapsedSideBar }),
  productsDashboard: [],
  setProductsDashboard: (products: IProducts[]) =>
    set({ productsDashboard: products }),
  paginationTotalPagesProductDashboard: 0,
  setPagintaionTotalPagesProductDashboard: (paginationTotalPages: number) =>
    set({ paginationTotalPagesProductDashboard: paginationTotalPages }),
  paginationPageProductDashboard: 1,
  setPaginationPageProductDashboard: (paginationPage: number) =>
    set({ paginationPageProductDashboard: paginationPage }),
  paginationAmountPageProductDashboard: 2,
  productDashboard: {
    productPicture: "",
    name: "",
    description: "",
    typeTranscription: "",
    category: [],
    condition: "",
    status: "",
    quantity: 1,
  },
  setProductDashboard: (productDashboard: IProduct) => set ({ productDashboard }),
  editProductDashboardId: "",
  setEditProductDashboardId: (editProductDashboardId: string) =>
    set({ editProductDashboardId }),
});
