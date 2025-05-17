import { IProduct, IProducts } from "@/interfaces/product.interface";

export interface IProductSlice {
  products: IProducts[];
  setProducts: (products: IProducts[]) => void;
  paginationTotalPagesProduct: number;
  setPagintaionTotalPagesProduct: (paginationTotalPages: number) => void;
  paginationPageProduct: number;
  setPaginationPageProduct: (paginationPage: number) => void;
  paginationAmountPageProduct: number;
  product: IProduct;
  setProduct: (product: IProduct) => void;
}
