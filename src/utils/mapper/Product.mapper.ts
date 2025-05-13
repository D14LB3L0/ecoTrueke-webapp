import {
  ProductCondition,
  ProductStatus,
  ProductTransaction,
} from "../constants/ProductTypes";

export type ProductStatusKey = keyof typeof ProductStatus;
export type ProductTransactionKey = keyof typeof ProductTransaction;
export type ProductConditionKey = keyof typeof ProductCondition;

export function mapProductStatus(status: string): string {
  return ProductStatus[status as ProductStatusKey] ?? status;
}

export function mapProductTransaction(transaction: string): string {
  return ProductTransaction[transaction as ProductTransactionKey] ?? transaction;
}

export function mapProductCondition(condition: string): string {
  return ProductCondition[condition as ProductConditionKey] ?? condition
}
