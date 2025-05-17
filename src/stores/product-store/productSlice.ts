import { StateCreator } from "zustand";
import { IProductSlice } from "./interface/product.slice.interface";
import { IProduct, IProducts } from "@/interfaces/product.interface";

export const createProductSlice: StateCreator<
  IProductSlice,
  [],
  [],
  IProductSlice
> = (set) => ({
  products: [],
  setProducts: (products: IProducts[]) => set({ products: products }),
  paginationTotalPagesProduct: 0,
  setPagintaionTotalPagesProduct: (paginationTotalPages: number) =>
    set({ paginationTotalPagesProduct: paginationTotalPages }),
  paginationPageProduct: 1,
  setPaginationPageProduct: (paginationPage: number) =>
    set({ paginationPageProduct: paginationPage }),
  paginationAmountPageProduct: 20,
  productId: "",
  setProductId: (productId: string) => set({ productId }),
  product: {
    id:"",
    userId: "",
    productPicture: "",
    name: "",
    description: "",
    typeTranscription: "",
    category: [],
    condition: "",
    status: "",
    quantity: 1,
  },
  setProduct: (product: IProduct) => set({ product }),
});
